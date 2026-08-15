import { NextRequest, NextResponse } from 'next/server';
import { AppointmentBookingData, AppointmentBookingResponse } from '@/models/appointment.model';

export async function POST(req: NextRequest) {
  try {
    const body: AppointmentBookingData = await req.json();

    if (!body.name || !body.email || !body.date || !body.time || !body.service) {
      return NextResponse.json(
        { success: false, message: 'All booking fields are required.' },
        { status: 400 }
      );
    }

    const ticketId = 'OLI-' + Math.floor(100000 + Math.random() * 900000);

    const response: AppointmentBookingResponse = {
      success: true,
      ticketId,
      confirmationDetails: body
    };

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to process strategy appointment.' },
      { status: 500 }
    );
  }
}
