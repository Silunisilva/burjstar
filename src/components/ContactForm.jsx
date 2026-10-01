import React, { useState } from 'react';
import { Send, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';
import { SERVICES } from '../data/services';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/companyInfo';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Contracting',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const handleWhatsAppDirect = () => {
    const text = `*General Contact Enquiry - Burj Star Abu Dhabi*
----------------------------------------
*Name:* ${formData.name || 'Not specified'}
*Phone:* ${formData.phone || 'Not specified'}
*Email:* ${formData.email || 'Not specified'}
*Service:* ${formData.service}
*Message:* ${formData.message || 'I would like to discuss my project requirement.'}
----------------------------------------
_Sent from burjstar.co web portal_`;

    window.open(createWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="bg-white border border-neutral-300/80 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#D89828]/10 rounded-bl-full pointer-events-none"></div>

      {submitted ? (
        <div className="py-12 text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto mb-5 shadow-inner">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-2">
            Inquiry Received Successfully
          </h3>
          <p className="text-sm text-neutral-600 max-w-md mx-auto mb-8 font-normal leading-relaxed">
            Thank you, <span className="font-semibold text-neutral-900">{formData.name || 'valued client'}</span>. Our technical estimation team in Abu Dhabi will review your request and get in touch within 2 to 4 business hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  service: 'Annual Maintenance Contract Abu Dhabi',
                  message: ''
                });
              }}
              className="px-6 py-3 rounded-xl bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-black transition-all"
            >
              Submit Another Request
            </button>
            <button
              onClick={handleWhatsAppDirect}
              className="px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#20ba59] transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Continue on WhatsApp</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                Full Name <span className="text-[#B57C1C]">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Mohammed Al Mansoori"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:border-[#D89828] focus:bg-white transition-all font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                Phone Number (UAE) <span className="text-[#B57C1C]">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="+971 50 123 4567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:border-[#D89828] focus:bg-white transition-all font-medium"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="client@domain.ae"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:border-[#D89828] focus:bg-white transition-all font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
                Interested Service
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:border-[#D89828] focus:bg-white transition-all font-medium"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">
              Project / Maintenance Description <span className="text-[#B57C1C]">*</span>
            </label>
            <textarea
              rows="4"
              required
              placeholder="Tell us about your property location, issues faced, square footage, or specific contracting requirements..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:border-[#D89828] focus:bg-white transition-all resize-none font-medium"
            ></textarea>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3.5">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-3.5 px-6 bg-[#D89828] hover:bg-[#E5AF4D] text-black text-xs font-bold uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{loading ? 'Submitting...' : 'Send Enquiry'}</span>
            </button>

            <button
              type="button"
              onClick={handleWhatsAppDirect}
              className="flex-1 py-3.5 px-6 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>
          </div>
        </form>
      )}

    </div>
  );
}
