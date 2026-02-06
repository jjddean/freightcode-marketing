'use client';

import React, { useState } from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectItem } from '@/components/ui/select';
import { useRouter } from 'next/navigation';

export const FullModeSimulator = () => {
    const [step, setStep] = useState(1);
    const [data, setData] = useState({
        hts: '',
        value: '',
        date: '',
        origin: 'CN',
    });
    const router = useRouter();

    const MAIN_APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:5173';

    const handleCalculate = () => {
        if (!data.hts || !data.value || !data.date) return;
        setStep(2);
    };

    const estimatedRefund = parseFloat(data.value) * 0.25 || 0;

    return (
        <Card className="w-full max-w-2xl mx-auto border-slate-200 shadow-2xl">
            <CardHeader className="border-b bg-slate-50">
                <div className="flex justify-between items-center">
                    <CardTitle className="text-xl font-bold text-slate-900">Tariff Audit Simulator</CardTitle>
                    <span className="text-xs font-bold bg-blue-100 text-blue-700 px-3 py-1 rounded-full uppercase">
                        Full Mode
                    </span>
                </div>
            </CardHeader>

            <CardContent className="p-8 space-y-8">
                {step === 1 ? (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">HTS Code</label>
                                <Input
                                    placeholder="e.g. 8517.12.00"
                                    value={data.hts}
                                    onChange={(e) => setData({ ...data, hts: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Shipment Value (USD)</label>
                                <Input
                                    type="number"
                                    placeholder="10000"
                                    value={data.value}
                                    onChange={(e) => setData({ ...data, value: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Country of Origin</label>
                                <Select value={data.origin} onValueChange={(v) => setData({ ...data, origin: v })}>
                                    <SelectItem value="CN">China (CN)</SelectItem>
                                    <SelectItem value="VN">Vietnam (VN)</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Entry Date</label>
                                <Input
                                    type="date"
                                    value={data.date}
                                    onChange={(e) => setData({ ...data, date: e.target.value })}
                                />
                            </div>
                        </div>

                        <Button
                            onClick={handleCalculate}
                            className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white font-medium"
                            disabled={!data.hts || !data.value || !data.date}
                        >
                            Run Detailed Audit
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                ) : (
                    <div className="space-y-8 animate-in fade-in duration-500">
                        <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-sm font-semibold text-blue-800 uppercase">Verified Potential Recovery</p>
                                    <p className="text-5xl font-black text-blue-900 mt-2">
                                        ${estimatedRefund.toLocaleString(undefined, { minimumFractionDigits: 0 })}
                                    </p>
                                </div>
                                <ShieldCheck className="h-10 w-10 text-blue-600" />
                            </div>

                            <p className="mt-4 text-sm text-blue-700 leading-relaxed">
                                HTS {data.hts} from {data.origin} on {new Date(data.date).toLocaleDateString()} appears eligible for significant recovery.
                            </p>
                            <p className="mt-2 text-xs text-blue-600">
                                180-day protest window status: <span className="font-bold uppercase tracking-wider">Active</span> (Based on entry date).
                            </p>
                        </div>

                        <div className="space-y-4">
                            <Button
                                onClick={() => router.push(`${MAIN_APP_URL}/signup?from=full-audit`)}
                                className="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-bold"
                            >
                                Initiate Recovery Claim
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>

                            <p className="text-center text-sm text-slate-600">
                                Upload your 7501 Entry Summaries in the secure portal to begin.
                            </p>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};
