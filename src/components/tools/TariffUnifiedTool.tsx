'use client';

import React, { useState } from 'react';
import { TariffCalculator } from './TariffCalculator';
import { FullModeSimulator } from './FullModeSimulator';
import { cn } from '@/lib/utils';

export const TariffUnifiedTool = () => {
    const [mode, setMode] = useState<'simplified' | 'advanced'>('simplified');

    return (
        <div className="w-full max-w-md mx-auto space-y-6">
            {/* Toggle Switch */}
            <div className="flex items-center justify-center gap-2 p-1 bg-[#0d1f35] border border-slate-700/60 rounded-full w-fit mx-auto">
                <button
                    onClick={() => setMode('simplified')}
                    className={cn(
                        "px-6 py-2.5 rounded-full text-sm font-medium transition-all",
                        mode === 'simplified'
                            ? "bg-[#1e3a5f] text-cyan-400 shadow-sm border border-slate-600/70"
                            : "text-slate-400 hover:text-slate-300"
                    )}
                >
                    UK Import Cost Calculator
                </button>
                <button
                    onClick={() => setMode('advanced')}
                    className={cn(
                        "px-6 py-2.5 rounded-full text-sm font-medium transition-all",
                        mode === 'advanced'
                            ? "bg-[#1e3a5f] text-cyan-400 shadow-sm border border-slate-600/70"
                            : "text-slate-400 hover:text-slate-300"
                    )}
                >
                    UK Duty & VAT Simulator
                </button>
            </div>

            {/* Content with Animation */}
            <div className="relative min-h-[500px]">
                {mode === 'simplified' ? (
                    <div className="animate-in fade-in slide-in-from-left-4 duration-300">
                        <TariffCalculator />
                    </div>
                ) : (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                        <FullModeSimulator />
                    </div>
                )}
            </div>
        </div>
    );
};
