import React, { useState } from 'react';
import { X, ShieldCheck, Mail, Phone, CheckCircle, ArrowRight } from 'lucide-react';

export default function QuotationModal({ isOpen, onClose, defaultApplication = 'residential' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    applicationType: defaultApplication,
    location: '',
    message: '',
    systemUnits: '1 Unit (6 kW / 6.5 kWh)'
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Contact number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.location.trim()) errs.location = 'City / Location is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleMailtoDirect = () => {
    const subject = encodeURIComponent(`SOURCE Quotation Request — ${formData.fullName} (${formData.applicationType})`);
    const body = encodeURIComponent(
      `Full Name: ${formData.fullName}\n` +
      `Business / Organization: ${formData.businessName || 'N/A'}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Application Type: ${formData.applicationType}\n` +
      `Location: ${formData.location}\n` +
      `Estimated Sizing: ${formData.systemUnits}\n\n` +
      `Project Details & Requirements:\n${formData.message || 'Standard installation requested'}\n\n` +
      `Submitted via SOURCE Official Product Experience`
    );
    window.location.href = `mailto:info@amectechnology.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-[#F4F4F4] rounded-3xl shadow-2xl border border-black/10 overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quotation-modal-title"
      >
        {/* Header */}
        <div className="px-6 py-5 bg-white border-b border-black/8 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-signal-red animate-pulse"></span>
              <span className="text-[11px] font-mono tracking-widest uppercase text-slate font-semibold">Direct Engineering Inquiry</span>
            </div>
            <h2 id="quotation-modal-title" className="text-xl font-semibold text-obsidian tracking-tight mt-1">
              Pre-order SOURCE & Engineering Review
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate hover:text-obsidian rounded-full hover:bg-black/5 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-obsidian mb-1.5">
                    Full Name <span className="text-signal-red">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-obsidian focus:outline-none focus:ring-2 focus:ring-cobalt/30 transition-all ${
                      errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-black/10'
                    }`}
                  />
                  {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-obsidian mb-1.5">
                    Business or Organization <span className="text-slate text-[10px]">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. GreenTech Studios"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/10 text-sm text-obsidian focus:outline-none focus:ring-2 focus:ring-cobalt/30 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-obsidian mb-1.5">
                    Email Address <span className="text-signal-red">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-obsidian focus:outline-none focus:ring-2 focus:ring-cobalt/30 transition-all ${
                      errors.email ? 'border-red-400 bg-red-50/20' : 'border-black/10'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-obsidian mb-1.5">
                    Phone / Mobile <span className="text-signal-red">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-obsidian focus:outline-none focus:ring-2 focus:ring-cobalt/30 transition-all ${
                      errors.phone ? 'border-red-400 bg-red-50/20' : 'border-black/10'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-obsidian mb-1.5">
                    Application Type <span className="text-signal-red">*</span>
                  </label>
                  <select
                    value={formData.applicationType}
                    onChange={(e) => setFormData({ ...formData, applicationType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/10 text-sm text-obsidian focus:outline-none focus:ring-2 focus:ring-cobalt/30 transition-all"
                  >
                    <option value="residential">Residential (Home / Villa)</option>
                    <option value="commercial">Commercial (Office / Retail / Clinic)</option>
                    <option value="industrial">Small-Scale Industry (Workshop)</option>
                    <option value="remote">Remote Site / Off-Grid Microgrid</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-obsidian mb-1.5">
                    Location / City <span className="text-signal-red">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Bangalore, Nagpur, Pune"
                    className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-obsidian focus:outline-none focus:ring-2 focus:ring-cobalt/30 transition-all ${
                      errors.location ? 'border-red-400 bg-red-50/20' : 'border-black/10'
                    }`}
                  />
                  {errors.location && <p className="text-[11px] text-red-600 mt-1">{errors.location}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-obsidian mb-1.5">
                  Project Notes & Existing Solar Infrastructure <span className="text-slate text-[10px]">(Optional)</span>
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your roof space, existing solar array, power outages, or heavy loads (air conditioners, motors)..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-black/10 text-sm text-obsidian focus:outline-none focus:ring-2 focus:ring-cobalt/30 transition-all resize-none"
                ></textarea>
              </div>

              <div className="p-3 rounded-xl bg-white border border-black/8 flex items-start gap-3 text-xs text-slate">
                <ShieldCheck className="w-4 h-4 text-cobalt flex-shrink-0 mt-0.5" />
                <p>
                  Direct response from AMEC Technology engineers. Your contact information is kept strictly confidential and used solely for technical consultation and quotation sizing.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full text-xs font-medium text-obsidian hover:bg-black/5 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-7 py-2.5 rounded-full text-xs font-semibold bg-obsidian text-white hover:bg-obsidian-hover transition-all shadow-sm flex items-center gap-2 group"
                >
                  <span>Review & Send Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </form>
          ) : (
            <div className="py-6 px-4 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-blue-50 text-cobalt mx-auto flex items-center justify-center border border-cobalt/20 shadow-inner">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-obsidian tracking-tight">
                Inquiry Validated & Ready for Transmission
              </h3>
              <p className="text-sm text-slate max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-obsidian">{formData.fullName}</span>. 
                Deliver this inquiry directly to the AMEC engineering inbox with a single click.
              </p>

              <div className="p-4 rounded-2xl bg-white border border-black/8 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between border-b border-black/5 pb-1">
                  <span className="text-slate">Application:</span>
                  <span className="font-semibold capitalize text-obsidian">{formData.applicationType}</span>
                </div>
                <div className="flex justify-between border-b border-black/5 pb-1">
                  <span className="text-slate">Location:</span>
                  <span className="font-semibold text-obsidian">{formData.location}</span>
                </div>
                <div className="flex justify-between border-b border-black/5 pb-1">
                  <span className="text-slate">Target Recipient:</span>
                  <span className="font-semibold text-obsidian">info@amectechnology.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate">Direct Phone:</span>
                  <span className="font-semibold text-obsidian">+91 9021510318</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleMailtoDirect}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold bg-obsidian text-white hover:bg-obsidian-hover transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-cobalt" />
                  <span>Send via Email (info@amectechnology.com)</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-5 py-3 rounded-full text-xs font-medium border border-black/15 text-obsidian hover:bg-black/5 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
