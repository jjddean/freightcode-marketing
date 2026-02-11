'use client';

import React, { useState } from 'react';
import { Calculator, ArrowRight, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export const TariffCalculator = () => {
    const [importValue, setImportValue] = useState<string>('');
    const [refund, setRefund] = useState<number | null>(null);
    const [step, setStep] = useState<'input' | 'form' | 'success'>('input');
    const [formData, setFormData] = useState({
        email: '',
        company: '',
        notes: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const MAIN_APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:5173';

    // Robust cleaner: strips everything except digits and first decimal point
    const getCleanValue = (val: string) => val.replace(/[^0-9.]/g, '');

    const calculateRefund = () => {
        const cleanValue = getCleanValue(importValue);
        const value = parseFloat(cleanValue);
        if (isNaN(value) || value <= 0) return;

        // 25% tariff × 90% eligibility coefficient (standard for the industry)
        const estimatedRefund = value * 0.25 * 0.90;
        setRefund(estimatedRefund);
    };

    const handleLeadSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call for lead capture
        // In a real scenario, this would go to a database or CRM
        await new Promise(resolve => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        setStep('success');
    };

    return (
        <Card className="max-w-md mx-auto !bg-[#0d1f35] border-slate-700 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden">
            {/* Header: Centered with dark navy background and icon container */}
            <CardHeader className="!bg-[#0a1628]/50 text-white py-6 px-8 relative border-b border-slate-700/50">

                <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 bg-[#1e3a5f] rounded-xl flex items-center justify-center shadow-inner border border-slate-700/40 flex-shrink-0">
                        <Calculator className="h-5 w-5 text-cyan-400" />
                    </div>
                    <CardTitle className="text-xl font-bold tracking-tight text-white m-0">
                        {step === 'success' ? 'Request Received' : 'Tariff Refund Estimator'}
                    </CardTitle>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">
                    {step === 'success' ? 'Personalized audit in progress' : 'Estimate potential IEEPA / Section 301 refunds for China imports'}
                </p>
            </CardHeader>

            <CardContent className="p-8 pt-10 !bg-[#0d1f35]">
                {step === 'input' && (
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] block ml-1">
                                Total Import Value (USD)
                            </label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 select-none pointer-events-none border-r border-slate-700/50 pr-3">
                                    <span className="text-white text-lg font-bold">$</span>
                                </div>
                                <Input
                                    type="text"
                                    placeholder="e.g. 500,000"
                                    className="!bg-[#0a1628] border-slate-700 !text-white placeholder:text-slate-600 text-lg pl-14 h-14 rounded-xl focus:border-cyan-500 focus:ring-0 !focus-visible:ring-0 !focus-visible:ring-offset-0 focus-visible:outline-none transition-all shadow-sm font-semibold"
                                    value={importValue}
                                    onChange={(e) => setImportValue(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') calculateRefund();
                                    }}
                                />
                            </div>
                            <p className="text-[10px] text-slate-500 italic font-medium">
                                Enter total value of China-origin imports since 2021.
                            </p>
                        </div>

                        <Button
                            type="button"
                            onClick={calculateRefund}
                            className="w-full h-14 bg-cyan-500 hover:bg-cyan-600 !text-white text-base font-bold rounded-xl transition-all shadow-lg active:scale-[0.98] flex items-center justify-center gap-2 border-0"
                            disabled={!importValue || parseFloat(getCleanValue(importValue)) <= 0}
                        >
                            Calculate Potential Refund
                            <ArrowRight className="h-4 w-4" />
                        </Button>

                        {refund !== null && (
                            <div className="pt-10 animate-in fade-in slide-in-from-top-4 duration-500">
                                <div className="p-8 bg-[#1e3a5f]/40 border border-slate-700/50 rounded-2xl text-center">
                                    <p className="text-[9px] font-bold text-emerald-400 uppercase tracking-[0.15em] mb-2">
                                        Estimated Potential Recovery
                                    </p>
                                    <p className="text-4xl font-bold text-white tracking-tighter">
                                        ${refund.toLocaleString(undefined, { minimumFractionDigits: 0 })}
                                    </p>
                                    <p className="mt-3 text-[11px] text-slate-400 leading-relaxed font-medium">
                                        Based on standard 25% Section 301 duties and 90% eligibility coefficient.
                                    </p>

                                    <Button
                                        type="button"
                                        onClick={() => setStep('form')}
                                        className="w-full h-14 bg-white/10 hover:bg-white/20 !text-white border border-white/20 font-bold rounded-xl mt-6 transition-all"
                                    >
                                        Initiate Detailed Forensic Audit
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        )}

                        {refund === null && (
                            <div className="flex gap-3 items-start pt-4 border-t border-slate-800/50 mt-2">
                                <Info className="h-3.5 w-3.5 text-slate-600 flex-shrink-0 mt-0.5" />
                                <p className="text-[9px] text-slate-500 leading-relaxed font-medium">
                                    Estimates are based on standard 25% Section 301 duties. Actual refunds depend on specific HTS eligibility, entry dates, and ongoing court rulings in the CIT.
                                </p>
                            </div>
                        )}
                    </div>
                )}

                {step === 'form' && (
                    <form onSubmit={handleLeadSubmit} className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-500">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                            <Input
                                required
                                type="email"
                                placeholder="work@company.com"
                                className="!bg-[#0a1628] border-slate-700 !text-white h-12 rounded-xl focus:border-cyan-500 focus:ring-0 !focus-visible:ring-0 !focus-visible:ring-offset-0 focus-visible:outline-none"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Company Name</label>
                            <Input
                                required
                                placeholder="Global Trade Inc."
                                className="!bg-[#0a1628] border-slate-700 !text-white h-12 rounded-xl focus:border-cyan-500 focus:ring-0 !focus-visible:ring-0 !focus-visible:ring-offset-0 focus-visible:outline-none"
                                value={formData.company}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Import Value (USD)</label>
                            <Input
                                disabled
                                className="!bg-[#0a1628]/50 border-slate-700 !text-slate-400 h-12 rounded-xl cursor-not-allowed !focus-visible:ring-0 !focus-visible:ring-offset-0"
                                value={`$${parseFloat(getCleanValue(importValue)).toLocaleString()}`}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Optional Notes</label>
                            <textarea
                                className="w-full !bg-[#0a1628] border border-slate-700 !text-white rounded-xl p-3 text-sm focus:outline-none focus:border-cyan-500 transition-all min-h-[80px]"
                                placeholder="e.g. Specific HTS codes or ports..."
                                value={formData.notes}
                                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                            />
                        </div>

                        <div className="pt-2 flex flex-col gap-3">
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full h-14 bg-cyan-500 hover:bg-cyan-600 !text-white font-bold rounded-xl"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Request'}
                            </Button>
                            <button
                                type="button"
                                onClick={() => setStep('input')}
                                className="text-xs text-slate-500 hover:text-slate-300 font-medium py-1"
                            >
                                ← Back to estimation
                            </button>
                        </div>
                    </form>
                )}

                {step === 'success' && (
                    <div className="text-center py-10 space-y-8 animate-in zoom-in-95 duration-500">
                        <div className="space-y-4">
                            <div className="flex items-baseline justify-center text-white/90 mb-2">
                                <span className="text-2xl font-semibold tracking-tight">freight</span>
                                <span className="text-2xl font-light tracking-tight text-cyan-400">code</span>
                                <span className="text-[12px] font-normal ml-0.5 -translate-y-3">®</span>
                            </div>
                            <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-white font-bold text-xl tracking-tight">Request Received</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mx-auto max-w-[280px] font-medium">
                                Thanks! We’ve received your details. Our team will manually review and email your personalized estimate within 24–48 hours.
                            </p>
                        </div>
                        <Button
                            onClick={() => {
                                setStep('input');
                                setImportValue('');
                                setRefund(null);
                                setFormData({ email: '', company: '', notes: '' });
                            }}
                            className="bg-transparent text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 border-0 font-bold"
                        >
                            Start New Calculation
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};
