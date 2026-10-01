import React, { useState } from 'react';
import { X, Send, MessageSquare, CheckCircle2, ShieldCheck, Building2 } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/companyInfo';
import Button from './Button';

export default function AMCQuoteModal({ isOpen, onClose, defaultService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    packageType: defaultService || 'Villa – 6 BHK (Standard Package - AED 13,200/yr)',
    propertyType: 'Residential Villa (6 BHK)',
    location: 'Saadiyat Island',
    floorsUnits: '6 BHK Villa (G+1)',
    selectedServices: defaultService ? [defaultService] : ['HVAC and AC Maintenance', 'Electrical Services', 'Plumber Services'],
    additionalNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const packageOptions = [
    'Villa – 6 BHK (Basic - AED 11,500/yr)',
    'Villa – 6 BHK (Standard - AED 13,200/yr) - Most Popular',
    'Villa – 6 BHK (Premium - AED 16,800/yr) - VIP',
    'Apartment – 4 BHK (Basic - AED 5,500/yr)',
    'Apartment – 4 BHK (Standard - AED 7,000/yr)',
    'Apartment – 4 BHK (Premium - AED 9,200/yr)',
    'Apartment – 3 BHK + MR (Basic - AED 7,400/yr)',
    'Apartment – 3 BHK + MR (Standard - AED 8,800/yr)',
    'Apartment – 3 BHK + MR (Premium - AED 10,400/yr)',
    'Commercial / Building / Custom AMC Scope',
    'Specific Single Trade Service Enquiry'
  ];

  const propertyTypes = [
    'Luxury Villa (6 BHK)',
    'Apartment (4 BHK)',
    'Apartment (3 BHK + Maid Room)',
    'Residential Compound',
    'Commercial Building / Tower',
    'Retail Showroom / Office',
    'Warehouse / Industrial Facility'
  ];

  const locations = [
    'Saadiyat Island',
    'Yas Island & Yas Acres',
    'Al Reem Island & Al Maryah',
    'Al Nahyan & Downtown Abu Dhabi',
    'Khalifa City & Shakhbout City',
    'Mohamed Bin Zayed City (MBZ)',
    'Al Raha Beach & Al Reef',
    'Mussafah Industrial',
    'Al Ain Region',
    'Other Abu Dhabi Region'
  ];

  const availableServices = [
    'Annual Maintenance Contract (AMC)',
    'HVAC and AC Maintenance',
    'Elevator and Escalator Maintenance',
    'Interior Design & Fit-Out',
    'General Constructing & Civil',
    'Electrical Services',
    'Plumber Services',
    'Painting Services',
    'Villa Maintenance',
    'Building Maintenance',
    'Facility Management',
    'General Maintenance & Handyman',
    'Tiles Installation',
    'Carpenter Service',
    'Glass Installation',
    'Aluminum Cabinets',
    'Kitchen Cabinets',
    'Water Proofing Service'
  ];

  const toggleService = (srv) => {
    setFormData(prev => {
      const exists = prev.selectedServices.includes(srv);
      return {
        ...prev,
        selectedServices: exists 
          ? prev.selectedServices.filter(s => s !== srv)
          : [...prev.selectedServices, srv]
      };
    });
  };

  const generateWhatsAppMessage = () => {
    return `*New AMC & Maintenance Enquiry - Burj Star Abu Dhabi*
----------------------------------------
*Client Name:* ${formData.name || 'Not provided'}
*Phone:* ${formData.phone || 'Not provided'}
*Email:* ${formData.email || 'Not provided'}
*Selected AMC Package:* ${formData.packageType || 'Custom Scope'}
*Property Type:* ${formData.propertyType}
*Location in Abu Dhabi:* ${formData.location}
*Size / Units:* ${formData.floorsUnits}
*Required Services:* ${formData.selectedServices.join(', ')}
*Additional Details:* ${formData.additionalNotes || 'Official AMC quotation requested'}
----------------------------------------
Please review and share the official AMC contract proposal.`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const url = createWhatsAppUrl(generateWhatsAppMessage());
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white border border-neutral-200 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-neutral-50 p-6 border-b border-neutral-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D89828] flex items-center justify-center text-black shadow-sm font-bold">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold text-neutral-900">
                Request Annual Maintenance (AMC) Quote
              </h3>
              <p className="text-xs text-neutral-600">
                Customized preventive & 24/7 emergency care in Abu Dhabi
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

        {/* Content */}
        {submitted ? (
          <div className="p-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4 shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-serif font-bold text-neutral-900 mb-2">
              Thank You for Your AMC Enquiry!
            </h4>
            <p className="text-sm text-neutral-600 max-w-md mx-auto mb-6">
              Our engineering estimator has received your details for <strong className="text-[#B57C1C]">{formData.packageType}</strong> and will prepare a customized AMC proposal within 4 business hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <Button
                onClick={handleSendWhatsApp}
                variant="whatsapp"
                size="md"
                icon={MessageSquare}
                className="flex-1"
              >
                Send via WhatsApp Now
              </Button>
              <Button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                variant="dark"
                size="md"
                className="flex-1"
              >
                Close
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 max-h-[78vh] overflow-y-auto">
            
            {/* Contact Details */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#946317] mb-3">
                1. Your Contact Information
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Salem Al Suwaidi"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#D89828] focus:bg-white transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">Phone Number (UAE) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#D89828] focus:bg-white transition-all font-medium"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#D89828] focus:bg-white transition-all font-medium"
                  />
                </div>
              </div>
            </div>

            {/* Package & Property Details */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#946317] mb-3">
                2. AMC Package & Property Details
              </h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">Selected AMC Package Plan</label>
                  <select
                    value={formData.packageType}
                    onChange={(e) => setFormData({ ...formData, packageType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-neutral-50 border border-neutral-300 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-[#D89828] focus:bg-white transition-all font-medium"
                  >
                    {packageOptions.map((pkg, i) => (
                      <option key={i} value={pkg}>{pkg}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">Property Type</label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-neutral-50 border border-neutral-300 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-[#D89828] focus:bg-white transition-all font-medium"
                    >
                      {propertyTypes.map((type, i) => (
                        <option key={i} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">Location in Abu Dhabi</label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-neutral-50 border border-neutral-300 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-[#D89828] focus:bg-white transition-all font-medium"
                    >
                      {locations.map((loc, i) => (
                        <option key={i} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">Floors / Size</label>
                    <input
                      type="text"
                      placeholder="e.g. 6 BHK Villa (G+1)"
                      value={formData.floorsUnits}
                      onChange={(e) => setFormData({ ...formData, floorsUnits: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#D89828] focus:bg-white transition-all font-medium"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Services Checkboxes */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#946317] mb-3">
                3. Select Scope of Services
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {availableServices.map((srv, idx) => {
                  const isChecked = formData.selectedServices.includes(srv);
                  return (
                    <label
                      key={idx}
                      onClick={() => toggleService(srv)}
                      className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs cursor-pointer select-none transition-all ${
                        isChecked 
                          ? 'bg-[#D89828]/15 border-[#D89828] text-neutral-950 font-semibold' 
                          : 'bg-neutral-50 border-neutral-200 text-neutral-700 hover:border-neutral-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="rounded border-neutral-300 text-[#D89828] focus:ring-0"
                      />
                      <span>{srv}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                Additional Requirements or Specific Issues (Optional)
              </label>
              <textarea
                rows="2"
                placeholder="Mention any specific HVAC brands, current issues, or contract start dates..."
                value={formData.additionalNotes}
                onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#D89828] focus:bg-white transition-all font-medium"
              ></textarea>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row gap-3">
              <Button
                type="submit"
                variant="gold"
                size="md"
                icon={Send}
                className="flex-1 shadow-sm"
              >
                Submit AMC Request
              </Button>
              
              <Button
                type="button"
                onClick={handleSendWhatsApp}
                variant="whatsapp"
                size="md"
                icon={MessageSquare}
                className="flex-1 shadow-sm"
              >
                Instant Send via WhatsApp
              </Button>
            </div>

          </form>
        )}
      </div>
    </div>
  );
}
