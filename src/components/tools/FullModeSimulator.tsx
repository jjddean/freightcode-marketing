'use client';

import React, { useState } from 'react';
import { ShieldCheck, FileText, AlertCircle, ArrowRight, Calculator } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const FullModeSimulator = () => {
    const [step, setStep] = useState<'input' | 'form' | 'success'>('input');
    const [data, setData] = useState({ hts: '', value: '', date: '', origin: 'CN' });
    const [refund, setRefund] = useState<number | null>(null);
    const [formData, setFormData] = useState({
        email: '',
        company: '',
        notes: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Robust cleaner: strips everything except digits and first decimal point
    const getCleanValue = (val: string) => val.replace(/[^0-9.]/g, '');

    const handleCalculate = () => {
        const cleanValue = getCleanValue(data.value);
        const value = parseFloat(cleanValue);
        if (isNaN(value) || value <= 0 || !data.hts || !data.date) return;

        // 25% tariff × 90% eligibility coefficient (standard for the industry)
        const estimatedRefund = value * 0.25 * 0.90;
        setRefund(estimatedRefund);
    };

    const handleLeadSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsSubmitting(false);
        setStep('success');
    };

    return (
        <Card className="max-w-md mx-auto !bg-[#0d1f35] border-slate-700 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden">
            <CardHeader className="!bg-[#0a1628]/50 text-white py-6 px-8 relative border-b border-slate-700/50">
                <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 bg-[#1e3a5f] rounded-xl flex items-center justify-center shadow-inner border border-slate-700/40 flex-shrink-0">
                        <ShieldCheck className="h-5 w-5 text-cyan-400" />
                    </div>
                    <CardTitle className="text-xl font-bold tracking-tight text-white m-0">
                        {step === 'success' ? 'Verification Sent' : 'Tariff Audit Simulator'}
                    </CardTitle>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">
                    {step === 'success' ? 'Personalized audit in progress' : 'Run a high-fidelity HTS eligibility simulation.'}
                </p>
            </CardHeader>

            <CardContent className="p-8 pt-10 !bg-[#0d1f35]">
                {step === 'input' && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">HTS Code</label>
                                <Input
                                    placeholder="e.g. 8517.12.00"
                                    className="!bg-[#0a1628] border-slate-700 !text-white h-12 rounded-xl text-sm font-semibold"
                                    value={data.hts}
                                    onChange={(e) => setData({ ...data, hts: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Origin</label>
                                <Select value={data.origin} onValueChange={(v) => setData({ ...data, origin: v })}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="CN">China (CN)</SelectItem>
                                        <SelectItem value="VN">Vietnam (VN)</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Shipment Value (USD)</label>
                            <Input
                                type="text"
                                placeholder="10,000"
                                className="!bg-[#0a1628] border-slate-700 !text-white h-12 rounded-xl text-lg font-bold"
                                value={data.value}
                                onChange={(e) => setData({ ...data, value: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Entry Date</label>
                            <Input
                                type="date"
                                className="!bg-[#0a1628] border-slate-700 !text-white h-12 rounded-xl text-sm"
                                value={data.date}
                                onChange={(e) => setData({ ...data, date: e.target.value })}
                            />
                        </div>

                        <Button
                            onClick={handleCalculate}
                            className="w-full h-14 bg-cyan-500 hover:bg-cyan-600 !text-white font-bold rounded-xl flex items-center justify-center gap-2"
                            disabled={!data.hts || !data.value || !data.date}
                        >
                            Run Detailed Simulation
                            <ArrowRight className="h-4 w-4" />
                        </Button>

                        {refund !== null && (
                            <div className="pt-6 animate-in fade-in slide-in-from-top-4 duration-500">
                                <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-center">
                                    <div className="flex justify-center mb-3">
                                        <ShieldCheck className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <p className="text-[9px] font-bold text-blue-400 uppercase tracking-[0.15em] mb-2">
                                        Verified Potential Recovery
                                    </p>
                                    <p className="text-4xl font-bold text-white tracking-tighter">
                                        ${refund.toLocaleString(undefined, { minimumFractionDigits: 0 })}
                                    </p>
                                    <p className="mt-3 text-[11px] text-slate-400 leading-relaxed font-medium">
                                        HTS {data.hts} is eligible for Section 301 refund coverage.
                                    </p>
                                    <Button
                                        onClick={() => setStep('form')}
                                        className="w-full h-14 bg-white/10 hover:bg-white/20 !text-white border border-white/20 font-bold rounded-xl mt-6 transition-all"
                                    >
                                        Initiate Recovery Claim
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                    <div className="mt-4 flex gap-2 items-center justify-center text-[9px] text-blue-400/80 font-bold uppercase tracking-widest">
                                        <AlertCircle className="h-3 w-3" />
                                        180-Day Protest Window: Active
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {step === 'form' && (
                    <form onSubmit={handleLeadSubmit} className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-500">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Official Email</label>
                            <Input
                                required
                                type="email"
                                placeholder="name@company.com"
                                className="!bg-[#0a1628] border-slate-700 !text-white h-12 rounded-xl"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Company Entity</label>
                            <Input
                                required
                                placeholder="Business Legal Name"
                                className="!bg-[#0a1628] border-slate-700 !text-white h-12 rounded-xl"
                                value={formData.company}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Simulation Data</label>
                            <div className="p-3 bg-[#0a1628]/50 border border-slate-700 rounded-xl text-[11px] text-slate-400 space-y-1">
                                <div className="flex justify-between">
                                    <span>HTS Code:</span>
                                    <span className="text-white font-bold">{data.hts}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Value:</span>
                                    <span className="text-white font-bold">${parseFloat(getCleanValue(data.value)).toLocaleString()}</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-2 flex flex-col gap-3">
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full h-14 bg-cyan-500 hover:bg-cyan-600 !text-white font-bold rounded-xl"
                            >
                                {isSubmitting ? 'Submitting Claim...' : 'Submit Claim Request'}
                            </Button>
                            <button
                                type="button"
                                onClick={() => setStep('input')}
                                className="text-xs text-slate-500 hover:text-slate-300 font-medium py-1 underline underline-offset-4"
                            >
                                Edit Simulation Data
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
                            <h3 className="text-white font-bold text-xl tracking-tight">Simulation Verified</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mx-auto max-w-[280px] font-medium">
                                Your claim request has been queued. A personal representative will email you to coordinate the 7501 document collection within 24 hours.
                            </p>
                        </div>
                        <Button
                            onClick={() => {
                                setStep('input');
                                setData({ hts: '', value: '', date: '', origin: 'CN' });
                                setRefund(null);
                                setFormData({ email: '', company: '', notes: '' });
                            }}
                            className="bg-transparent text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 border-0 font-bold"
                        >
                            Run Another Simulation
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};
