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
            <div className="flex bg-[#0d1f35] p-1 rounded-xl border border-slate-700/50 relative">
                <div
                    className={cn(
                        "absolute inset-y-1 w-[calc(50%-4px)] bg-[#1e3a5f] rounded-lg transition-all duration-300 ease-out shadow-sm border border-slate-600/50",
                        mode === 'advanced' ? "left-[calc(50%+2px)]" : "left-1"
                    )}
                />
                <button
                    onClick={() => setMode('simplified')}
                    className={cn(
                        "flex-1 relative z-10 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors duration-200 text-center rounded-lg",
                        mode === 'simplified' ? "text-cyan-400" : "text-slate-500 hover:text-slate-400"
                    )}
                >
                    Simplified Mode
                </button>
                <button
                    onClick={() => setMode('advanced')}
                    className={cn(
                        "flex-1 relative z-10 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors duration-200 text-center rounded-lg",
                        mode === 'advanced' ? "text-blue-400" : "text-slate-500 hover:text-slate-400"
                    )}
                >
                    Full Audit Sim
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
