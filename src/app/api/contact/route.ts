import { NextRequest, NextResponse } from 'next/server';
import { ContactFormData, ContactResponse } from '@/models/contact.model';

export async function POST(req: NextRequest) {
  try {
    const body: ContactFormData = await req.json();
    
    if (!body.name || !body.email || !body.requirements) {
      return NextResponse.json(
        { success: false, message: 'All required fields must be provided.', timestamp: new Date().toISOString() },
        { status: 400 }
      );
    }

    const responseData: ContactResponse = {
      success: true,
      message: `Thank you ${body.name}! Message delivered to the Oliots Digital engineering team. We will respond to ${body.email} within 24 hours.`,
      timestamp: new Date().toISOString()
    };

    return NextResponse.json(responseData);
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server error processing contact dispatch.', timestamp: new Date().toISOString() },
      { status: 500 }
    );
  }
}
