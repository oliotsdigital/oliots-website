'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Code, 
  Brain, 
  Network, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ChevronRight, 
  X, 
  Layers, 
  Calendar, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  ArrowLeft
} from 'lucide-react';
import { useServicesState } from '@/state/useServicesState';
import { useAppointmentState } from '@/state/useAppointmentState';
import { useSoundState } from '@/state/useSoundState';
import { ServiceItem, ServiceCategory } from '@/models/service.model';
import { DesktopBackgroundCanvas } from '@/components/desktop/DesktopBackgroundCanvas';
import { Step1SelectService } from '@/components/apps/AppointmentApp/Step1SelectService';
import { Step2SelectDateTime } from '@/components/apps/AppointmentApp/Step2SelectDateTime';
import { Step3ContactInfo } from '@/components/apps/AppointmentApp/Step3ContactInfo';
import { BookingConfirmationTicket } from '@/components/apps/AppointmentApp/BookingConfirmationTicket';

export function ServicesPageClient() {
  const { playBeep } = useSoundState();
  const { activeCategory, services, allServices, loading, filterServices } = useServicesState(playBeep);
  const appointmentState = useAppointmentState(playBeep);

  const [selectedDetailService, setSelectedDetailService] = useState<ServiceItem | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleOpenBooking = (serviceTitle?: string) => {
    if (serviceTitle) {
      appointmentState.selectServiceAndOpen(serviceTitle);
    }
    setIsBookingModalOpen(true);
    playBeep(700, 'sine');
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
    playBeep(450, 'sine');
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-6 h-6 text-blue-600" />;
      case 'Brain':
        return <Brain className="w-6 h-6 text-cyan-600" />;
      case 'Network':
        return <Network className="w-6 h-6 text-indigo-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-emerald-600" />;
      default:
        return <Code className="w-6 h-6 text-blue-600" />;
    }
  };

  const getCategoryGradient = (category: string) => {
    switch (category) {
      case 'web':
        return 'from-blue-500/10 via-sky-500/10 to-indigo-500/10 border-blue-200 text-blue-700';
      case 'ai':
        return 'from-cyan-500/10 via-teal-500/10 to-blue-500/10 border-cyan-200 text-cyan-700';
      case 'software':
        return 'from-indigo-500/10 via-purple-500/10 to-blue-500/10 border-indigo-200 text-indigo-700';
      case 'growth':
        return 'from-emerald-500/10 via-teal-500/10 to-green-500/10 border-emerald-200 text-emerald-700';
      default:
        return 'from-blue-500/10 to-indigo-500/10 border-blue-200 text-blue-700';
    }
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900 font-sans relative overflow-x-hidden selection:bg-blue-600 selection:text-white flex flex-col justify-between">
      {/* Background Canvas Effect */}
      <DesktopBackgroundCanvas />

      {/* Main Container */}
      <div className="relative z-20 flex-1 flex flex-col">
        {/* Sticky Header / Navbar */}
        <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <img 
                src="/logos/Logo-removebg-preview.png" 
                alt="Oliots Digital Logo" 
                className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-blue-600 font-bold flex items-center space-x-1.5">
                <span>Services</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              </Link>
              <Link href="/#about" className="hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/#contact" className="hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </nav>

            {/* Header Actions */}
            <div className="flex items-center space-x-3">
              <Link 
                href="/" 
                className="hidden sm:inline-flex items-center space-x-1 text-xs font-bold text-slate-600 hover:text-blue-600 px-3 py-2 rounded-xl bg-slate-100/80 hover:bg-slate-200/80 transition-all"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Home</span>
              </Link>

              <button
                onClick={() => handleOpenBooking()}
                className="px-4 sm:px-5 py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs sm:text-sm flex items-center space-x-2 shadow-md shadow-blue-500/20 active:scale-95 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-12 sm:pt-16 pb-10 w-full text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-extrabold tracking-wider uppercase shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Digital Capabilities & Engineering</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] max-w-4xl mx-auto">
            Transformative Technology Solutions{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
              Engineered for Growth.
            </span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
            From full-stack modern web applications and autonomous AI agents to cloud software architectures and revenue-focused SEO engines.
          </p>

          {/* Metric Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6">
            <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/80 shadow-xs flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-black text-blue-600">99.9%</span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1">Uptime Reliability</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/80 shadow-xs flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-black text-indigo-600">50+</span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1">Projects Delivered</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/80 shadow-xs flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-black text-cyan-600">24/7</span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1">AI Automation</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/80 shadow-xs flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-black text-emerald-600">100%</span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1">Custom Architecture</span>
            </div>
          </div>
        </section>

        {/* Services Showcase Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10 w-full space-y-8">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200/80 pb-6">
            {[
              { key: 'all', label: 'All Capabilities' },
              { key: 'web', label: 'Web & Digital' },
              { key: 'ai', label: 'AI & Automation' },
              { key: 'software', label: 'Software Systems' },
              { key: 'growth', label: 'SEO & Growth' }
            ].map(tab => {
              const isActive = activeCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => filterServices(tab.key as ServiceCategory)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-102'
                      : 'bg-white/80 hover:bg-white text-slate-600 border border-slate-200 hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Grid Loading State */}
          {loading ? (
            <div className="py-20 text-center space-y-3">
              <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="text-sm font-bold text-slate-500">Loading service capabilities...</p>
            </div>
          ) : (
            /* Services Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {services.map((svc) => (
                <div
                  key={svc.id}
                  className="group rounded-3xl bg-white/80 hover:bg-white backdrop-blur-xl border border-slate-200/90 hover:border-blue-300 shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between space-y-6 relative overflow-hidden"
                >
                  {/* Subtle top accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${getCategoryGradient(svc.category)}`} />

                  <div className="space-y-4">
                    {/* Header: Icon & Category Tag */}
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/80 border border-slate-200/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {getServiceIcon(svc.iconName)}
                      </div>
                      <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full border uppercase tracking-wider ${getCategoryGradient(svc.category)}`}>
                        {svc.categoryTag}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                        {svc.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mt-2 font-medium">
                        {svc.description}
                      </p>
                    </div>

                    {/* Deliverables / Features List */}
                    <div className="pt-2 border-t border-slate-100 space-y-2">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                        Key Deliverables & Stack
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {svc.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-xs font-semibold text-slate-700 bg-slate-50/80 p-2 rounded-xl border border-slate-100">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex flex-col sm:flex-row gap-3 border-t border-slate-100">
                    <button
                      onClick={() => handleOpenBooking(svc.title)}
                      className="flex-1 py-3 px-4 rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-sm transition-all cursor-pointer"
                    >
                      <span>{svc.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => setSelectedDetailService(svc)}
                      className="py-3 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 active:scale-98 text-slate-700 font-bold text-xs sm:text-sm flex items-center justify-center space-x-1.5 transition-all cursor-pointer"
                    >
                      <span>View Specifications</span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Methodology / Process Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16 w-full space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Engineering Methodology
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium max-w-2xl mx-auto">
              How we take your vision from initial architecture to resilient production deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Discovery & Strategy',
                desc: 'We analyze target goals, security standards, requirements, and user workflows to plan robust system architectures.',
                icon: ShieldCheck,
                color: 'text-blue-600 bg-blue-50 border-blue-100'
              },
              {
                step: '02',
                title: 'Architecture & UX',
                desc: 'Designing fast user interfaces and scalable API schema models that ensure flawless speed and security.',
                icon: Layers,
                color: 'text-cyan-600 bg-cyan-50 border-cyan-100'
              },
              {
                step: '03',
                title: 'Agile Engineering',
                desc: 'Writing clean, thoroughly tested code with continuous integration, automated deployment, and strict QA.',
                icon: Cpu,
                color: 'text-indigo-600 bg-indigo-50 border-indigo-100'
              },
              {
                step: '04',
                title: 'Deployment & Growth',
                desc: 'Continuous performance monitoring, technical SEO, and automated scaling to drive long-term business LTV.',
                icon: Zap,
                color: 'text-emerald-600 bg-emerald-50 border-emerald-100'
              }
            ].map((m) => {
              const IconComp = m.icon;
              return (
                <div key={m.step} className="p-6 rounded-3xl bg-white/80 border border-slate-200/80 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${m.color}`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-black text-slate-300 font-mono">{m.step}</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">{m.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{m.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10 w-full">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center lg:text-left max-w-2xl">
              <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-md">
                READY TO START?
              </span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
                Accelerate Your Digital Transformation Today
              </h2>
              <p className="text-blue-100 text-sm sm:text-base font-medium">
                Schedule a consultation with our senior engineers and digital architects to discuss your custom project.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => handleOpenBooking()}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-blue-700 hover:bg-slate-100 font-black text-sm shadow-xl active:scale-95 transition-all cursor-pointer flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5 text-blue-600" />
                <span>Schedule Consultation</span>
              </button>

              <Link
                href="/#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-extrabold text-sm border border-white/30 backdrop-blur-md active:scale-95 transition-all text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Detail Specifications Modal */}
      {selectedDetailService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 relative overflow-hidden">
            <button
              onClick={() => setSelectedDetailService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3">
              <span className={`text-xs font-bold px-3 py-1 rounded-full border uppercase ${getCategoryGradient(selectedDetailService.category)}`}>
                {selectedDetailService.categoryTag}
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-black text-slate-900">{selectedDetailService.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mt-2 font-medium">
                {selectedDetailService.description}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                Core Capabilities & Architecture
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedDetailService.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs font-semibold text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 border-t border-slate-100 justify-end">
              <button
                onClick={() => setSelectedDetailService(null)}
                className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = selectedDetailService.title;
                  setSelectedDetailService(null);
                  handleOpenBooking(title);
                }}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center space-x-2 shadow-md cursor-pointer"
              >
                <span>Request Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Appointment / Proposal Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 relative">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">Schedule Service Consultation</h3>
              </div>
              <button
                onClick={handleCloseBooking}
                className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-2">
              {appointmentState.step === 1 && (
                <Step1SelectService
                  selectedService={appointmentState.bookingData.service}
                  onSelectService={svc => appointmentState.updateBookingData('service', svc)}
                  onNext={() => appointmentState.goToStep(2)}
                />
              )}

              {appointmentState.step === 2 && (
                <Step2SelectDateTime
                  date={appointmentState.bookingData.date}
                  time={appointmentState.bookingData.time}
                  onDateChange={d => appointmentState.updateBookingData('date', d)}
                  onTimeChange={t => appointmentState.updateBookingData('time', t)}
                  onBack={() => appointmentState.goToStep(1)}
                  onNext={() => appointmentState.goToStep(3)}
                />
              )}

              {appointmentState.step === 3 && (
                <Step3ContactInfo
                  name={appointmentState.bookingData.name}
                  email={appointmentState.bookingData.email}
                  onNameChange={n => appointmentState.updateBookingData('name', n)}
                  onEmailChange={e => appointmentState.updateBookingData('email', e)}
                  onBack={() => appointmentState.goToStep(2)}
                  onConfirm={appointmentState.confirmAppointment}
                  isSubmitting={appointmentState.isSubmitting}
                />
              )}

              {appointmentState.step === 4 && (
                <BookingConfirmationTicket
                  confirmation={appointmentState.confirmation}
                  onCloseWindow={handleCloseBooking}
                  onReset={appointmentState.resetForm}
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-20 border-t border-slate-200/80 bg-white/70 backdrop-blur-xl py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500">
          <div className="flex items-center space-x-2">
            <span>© {new Date().getFullYear()} Oliots Digital. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/services" className="hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="/#contact" className="hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
