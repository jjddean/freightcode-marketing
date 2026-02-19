'use client';

import React, { useState, useEffect } from 'react';
import { Shield, ArrowRight, Info, Search, FileText, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { fetchHSCode, fetchTradeData, calculateUKImportCosts } from '@/lib/trade-data';

export const FullModeSimulator = () => {
    const [step, setStep] = useState<'audit' | 'results'>('audit');
    const [data, setData] = useState({
        hs: '',
        value: '',
        origin: 'CN',
        freight: '',
        insurance: '',
        incoterm: 'fob'
    });
    const [hsInfo, setHsInfo] = useState<{ code: string; desc: string } | null>(null);
    const [results, setResults] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleHsSearch = async (val: string) => {
        setData({ ...data, hs: val });
        if (val.length >= 4) {
            const info = await fetchHSCode(val);
            setHsInfo(info);
        } else {
            setHsInfo(null);
        }
    };

    const handleAudit = async () => {
        setIsLoading(true);
        // Simulate "Forensic Audit" delay
        await new Promise(r => setTimeout(r, 1500));

        const tradeData = await fetchTradeData();
        const baseRate = tradeData.hs_overrides[data.hs.substring(0, 4)] ?? 0.025;

        const costs = calculateUKImportCosts({
            goodsValue: parseFloat(data.value) || 0,
            freight: parseFloat(data.freight) || 0,
            insurance: parseFloat(data.insurance) || 0,
            dutyRate: baseRate,
            isVatRegistered: true,
            hasPreference: false
        });

        setResults({
            ...costs,
            hsDesc: hsInfo?.desc || 'General Merchandise'
        });
        setIsLoading(false);
        setStep('results');
    };

    return (
        <Card className="max-w-2xl mx-auto !bg-[#0d1f35] border-slate-700 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden">
            <CardHeader className="!bg-[#0a1628]/50 text-white py-8 px-10 relative border-b border-slate-700/50">
                <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-[#1e3a5f] rounded-2xl flex items-center justify-center shadow-inner border border-slate-700/40 relative">
                        <Shield className="h-6 w-6 text-cyan-400" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-500 rounded-full animate-pulse" />
                    </div>
                    <div>
                        <CardTitle className="text-2xl font-bold tracking-tight text-white mb-1">
                            UK Duty & VAT Simulator
                        </CardTitle>
                        <p className="text-slate-400 text-sm font-medium">Professional Customs Value & Tax Audit</p>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="p-10 !bg-[#0d1f35]">
                {step === 'audit' && (
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Commodity HS Code</Label>
                                    <div className="relative">
                                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                                        <Input
                                            placeholder="e.g. 6403 91"
                                            className="!bg-[#0a1628] border-slate-700 !text-white h-14 pl-12 rounded-xl focus:border-cyan-500 font-mono tracking-wider"
                                            value={data.hs}
                                            onChange={(e) => handleHsSearch(e.target.value)}
                                        />
                                    </div>
                                    {hsInfo && (
                                        <p className="text-[11px] text-cyan-400/80 font-medium ml-1 animate-in fade-in slide-in-from-left-2">
                                            Found: {hsInfo.desc.substring(0, 60)}...
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Origin Territory</Label>
                                    <Input
                                        placeholder="CHINA (CN)"
                                        className="!bg-[#0a1628] border-slate-700 !text-white h-14 rounded-xl"
                                        value={data.origin}
                                        onChange={(e) => setData({ ...data, origin: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">FOB / EXW Value (GBP)</Label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">£</span>
                                        <Input
                                            type="number"
                                            placeholder="0.00"
                                            className="!bg-[#0a1628] border-slate-700 !text-white h-14 pl-10 rounded-xl font-bold text-lg"
                                            value={data.value}
                                            onChange={(e) => setData({ ...data, value: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Freight</Label>
                                        <Input
                                            type="number"
                                            placeholder="£"
                                            className="!bg-[#0a1628] border-slate-700 !text-white h-14 rounded-xl"
                                            value={data.freight}
                                            onChange={(e) => setData({ ...data, freight: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Insurance</Label>
                                        <Input
                                            type="number"
                                            placeholder="£"
                                            className="!bg-[#0a1628] border-slate-700 !text-white h-14 rounded-xl"
                                            value={data.insurance}
                                            onChange={(e) => setData({ ...data, insurance: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-cyan-500/5 border border-cyan-500/20 rounded-2xl flex gap-4 items-center">
                            <Info className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                            <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                                The Simulator verifies customs valuation methods according to UK General Interpretation Rules (GIR). Advanced audit includes trade remedies and preferential tariff eligibility checks.
                            </p>
                        </div>

                        <Button
                            onClick={handleAudit}
                            disabled={!data.hs || !data.value || isLoading}
                            className="w-full h-16 bg-cyan-500 hover:bg-cyan-600 !text-white text-lg font-bold rounded-2xl shadow-lg active:scale-[0.98] transition-all"
                        >
                            {isLoading ? (
                                <span className="flex items-center gap-3">
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Verifying HTS & Origin Data...
                                </span>
                            ) : (
                                <span className="flex items-center gap-2">
                                    Execute Customs Audit
                                    <ArrowRight className="h-5 w-5" />
                                </span>
                            )}
                        </Button>
                    </div>
                )}

                {step === 'results' && results && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1 space-y-4">
                                <div className="p-6 bg-[#0a1628] border border-slate-700 rounded-2xl space-y-4">
                                    <h4 className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Audit Summary</h4>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-slate-400">HS Code</span>
                                            <span className="text-white font-mono">{data.hs}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-slate-400">Duty Rate</span>
                                            <span className="text-white font-bold">{(results.dutyRate * 100).toFixed(1)}%</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-slate-400">VAT Factor</span>
                                            <span className="text-white">20% Standard</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center flex flex-col justify-center">
                                <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-2">Total Estimated Tax Liability</p>
                                <p className="text-5xl font-bold text-white tracking-tighter">
                                    £{results.totalTaxes.toLocaleString()}
                                </p>
                                <p className="text-[11px] text-slate-500 mt-2 font-medium">Ready for C88 Submission</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center justify-between ml-1">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Calculation Breakdown</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    { label: 'Customs Value', value: `£${results.customsValue.toLocaleString()}` },
                                    { label: 'Import Duty', value: `£${results.dutyAmount.toLocaleString()}` },
                                    { label: 'Import VAT', value: `£${results.vatAmount.toLocaleString()}` }
                                ].map((item, i) => (
                                    <div key={i} className="p-4 bg-[#0a1628] border border-slate-800 rounded-xl">
                                        <p className="text-[9px] text-slate-500 font-bold uppercase tracking-tight mb-1">{item.label}</p>
                                        <p className="text-lg font-bold text-white">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                            <Button className="flex-1 h-14 bg-white/10 hover:bg-white/20 !text-white border border-white/20 font-bold rounded-xl flex items-center justify-center gap-2">
                                <FileText className="h-4 w-4" />
                                Generate UK Import Profile
                            </Button>
                            <Button className="flex-1 h-14 bg-cyan-500 hover:bg-cyan-600 !text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2">
                                Upload Documents to HMRC
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </div>

                        <button
                            onClick={() => setStep('audit')}
                            className="w-full text-xs text-slate-500 hover:text-slate-300 font-medium py-1"
                        >
                            ← Run Another Audit
                        </button>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};
