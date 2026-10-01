import React, { useState } from 'react';
import { X, Send, Mail, MessageSquare, CheckCircle2, Briefcase } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/companyInfo';
import Button from './Button';

export default function JobApplyModal({ job, onClose }) {
  const [applicant, setApplicant] = useState({
    name: '',
    phone: '',
    email: '',
    experienceYears: '3-5 years',
    currentLocation: 'Abu Dhabi, UAE',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!job) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleEmailApply = () => {
    const subject = encodeURIComponent(`Job Application: ${job.title} - ${applicant.name}`);
    const body = encodeURIComponent(
      `Dear Burj Star HR Team,\n\nI wish to apply for the position of "${job.title}".\n\nApplicant Details:\n- Name: ${applicant.name}\n- Phone: ${applicant.phone}\n- Email: ${applicant.email}\n- Experience: ${applicant.experienceYears}\n- Current Location: ${applicant.currentLocation}\n- Notes: ${applicant.notes}\n\n(Resume attached)\n\nBest regards,\n${applicant.name}`
    );
    window.location.href = `mailto:${COMPANY_INFO.careersEmail}?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppApply = () => {
    const text = `*Job Application - Burj Star Careers*
Position: ${job.title}
Name: ${applicant.name || 'Candidate'}
Phone: ${applicant.phone || 'Not provided'}
Experience: ${applicant.experienceYears}
Location: ${applicant.currentLocation}
Notes: ${applicant.notes || 'Interested in this role'}`;
    window.open(createWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="relative w-full max-w-xl bg-white border border-neutral-200 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-neutral-50 p-6 border-b border-neutral-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D89828] flex items-center justify-center text-black shadow-sm font-bold">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-neutral-900">
                Apply for {job.title}
              </h3>
              <p className="text-xs text-[#946317] font-semibold">
                {job.department} • {job.location}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-neutral-900 rounded-lg hover:bg-neutral-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        {submitted ? (
          <div className="p-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4 shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-serif font-bold text-neutral-900 mb-2">
              Application Details Recorded!
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto mb-6">
              Please finalize sending your CV directly to our HR inbox or connect via WhatsApp for fast-track recruitment.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <Button
                onClick={handleEmailApply}
                variant="gold"
                size="md"
                icon={Mail}
                className="flex-1 shadow-sm"
              >
                Send via Email App
              </Button>
              <Button
                onClick={handleWhatsAppApply}
                variant="whatsapp"
                size="md"
                icon={MessageSquare}
                className="flex-1 shadow-sm"
              >
                Fast-Track WhatsApp
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Ahmad Tariq"
                value={applicant.name}
                onChange={(e) => setApplicant({ ...applicant, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#D89828] focus:bg-white transition-all font-medium"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">Phone Number (UAE) *</label>
                <input
                  type="tel"
                  required
                  placeholder="+971 50 XXX XXXX"
                  value={applicant.phone}
                  onChange={(e) => setApplicant({ ...applicant, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#D89828] focus:bg-white transition-all font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={applicant.email}
                  onChange={(e) => setApplicant({ ...applicant, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#D89828] focus:bg-white transition-all font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">Years of UAE Experience</label>
                <select
                  value={applicant.experienceYears}
                  onChange={(e) => setApplicant({ ...applicant, experienceYears: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-neutral-50 border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:border-[#D89828] focus:bg-white transition-all font-medium"
                >
                  <option value="1-2 years">1-2 years</option>
                  <option value="3-5 years">3-5 years</option>
                  <option value="5-8 years">5-8 years</option>
                  <option value="8+ years">8+ years</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">Current Location</label>
                <input
                  type="text"
                  placeholder="e.g. Abu Dhabi / Dubai"
                  value={applicant.currentLocation}
                  onChange={(e) => setApplicant({ ...applicant, currentLocation: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#D89828] focus:bg-white transition-all font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Cover Note / Key Skills
              </label>
              <textarea
                rows="3"
                placeholder="Briefly mention your certifications, licenses, and relevant experience in UAE..."
                value={applicant.notes}
                onChange={(e) => setApplicant({ ...applicant, notes: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#D89828] focus:bg-white transition-all font-medium resize-none"
              ></textarea>
            </div>

            <div className="pt-3 border-t border-neutral-200 flex flex-col sm:flex-row gap-3">
              <Button
                type="submit"
                variant="gold"
                size="md"
                icon={Send}
                className="flex-1 shadow-sm"
              >
                Proceed Application
              </Button>
              <Button
                type="button"
                onClick={handleWhatsAppApply}
                variant="whatsapp"
                size="md"
                icon={MessageSquare}
                className="flex-1 shadow-sm"
              >
                Apply via WhatsApp
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
