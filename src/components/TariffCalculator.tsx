'use client';

import React, { useState } from 'react';
import { Calculator, DollarSign, ArrowRight, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export const TariffCalculator = () => {
    const [importValue, setImportValue] = useState<string>('');
    const [refund, setRefund] = useState<number | null>(null);
    const router = useRouter();

    const MAIN_APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:5173';

    const calculateRefund = () => {
        const value = parseFloat(importValue);
        if (isNaN(value) || value <= 0) return;
        // 25% tariff × 90% eligibility
        const estimatedRefund = value * 0.25 * 0.90;
        setRefund(estimatedRefund);
    };

    return (
        <Card className="max-w-lg mx-auto border-slate-200 shadow-xl overflow-hidden">
            <CardHeader className="bg-slate-900 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-blue-400" />
                    Tariff Refund Estimator
                </CardTitle>
                <p className="text-slate-300 text-sm mt-1">
                    Estimate Section 301 / IEEPA refunds on China imports
                </p>
            </CardHeader>

            <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">
                        Total China Import Value (USD)
                    </label>
                    <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input
                            type="number"
                            placeholder="e.g. 500000"
                            className="pl-10 h-12"
                            value={importValue}
                            onChange={(e) => setImportValue(e.target.value)}
                        />
                    </div>
                    <p className="text-xs text-slate-500">
                        Enter total value of China-origin imports since 2018.
                    </p>
                </div>

                <Button
                    onClick={calculateRefund}
                    className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                    disabled={!importValue || parseFloat(importValue) <= 0}
                >
                    Calculate Potential Refund
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                {refund !== null && (
                    <div className="mt-6 p-6 bg-green-50 border border-green-100 rounded-xl animate-in fade-in slide-in-from-top-2">
                        <p className="text-xs font-semibold text-green-800 uppercase tracking-wider mb-2">
                            Estimated Refund
                        </p>
                        <p className="text-4xl font-bold text-green-900">
                            ${refund.toLocaleString(undefined, { minimumFractionDigits: 0 })}
                        </p>
                        <p className="mt-2 text-sm text-green-700 leading-relaxed">
                            Based on standard 25% Section 301 duties and 90% eligibility factor.
                        </p>

                        <div className="mt-6 pt-6 border-t border-green-200">
                            <Button
                                onClick={() => router.push(`${MAIN_APP_URL}/signup?from=calculator&value=${importValue}`)}
                                className="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-bold"
                            >
                                Get Free Detailed Refund Audit
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <p className="mt-3 text-xs text-center text-green-700">
                                Takes 2 minutes • No obligation • Secure upload
                            </p>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};
