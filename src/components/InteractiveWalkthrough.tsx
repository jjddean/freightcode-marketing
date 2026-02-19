'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Ship,
    CheckCircle2,
    MousePointer2,
    ShieldCheck,
    X,
    Plus,
    Search,
    Settings,
    Anchor,
    TrendingUp,
    ChevronLeft,
    ChevronRight,
    RotateCw,
    Cloud
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export function InteractiveWalkthrough() {
    const [step, setStep] = useState('idle'); // idle -> picking -> saving -> success
    const [selectedRate, setSelectedRate] = useState(0);
    const [showGuide, setShowGuide] = useState(true);

    // Freight-specific data
    const rates = [
        {
            carrier: "Maersk Spot",
            service: "Ocean FCL • Direct",
            price: "$2,450",
            transit: "24 Days",
            badge: "FIXED PRICE",
            color: "bg-blue-100 text-blue-600",
            logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Maersk_Group_Logo.svg"
        },
        {
            carrier: "CMA CGM",
            service: "Ocean FCL • Via Singapore",
            price: "$2,180",
            transit: "28 Days",
            badge: "ECONOMY",
            color: "bg-red-100 text-red-600",
            logo: "https://upload.wikimedia.org/wikipedia/en/2/21/CMA_CGM_Logo.svg"
        }
    ];

    useEffect(() => {
        if (step !== 'idle') setShowGuide(false);
    }, [step]);

    const handleAction = () => {
        setStep('saving');
        setTimeout(() => setStep('success'), 1500);
        setTimeout(() => {
            setStep('idle');
            setShowGuide(true);
        }, 5000);
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-sans text-slate-900">

            {/* 1. ARCADE STYLE WRAPPER (The Browser Frame) */}
            <div className="w-full max-w-6xl group relative">

                {/* BROWSER TOP BAR */}
                <div className="bg-[#EBEEF2] rounded-t-2xl border-x border-t border-slate-300 h-12 flex items-center px-4 gap-4">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-inner" />
                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-inner" />
                        <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-inner" />
                    </div>
                    <div className="flex gap-3 text-slate-400">
                        <ChevronLeft size={18} />
                        <ChevronRight size={18} />
                        <RotateCw size={16} />
                    </div>
                    <div className="flex-1 bg-white rounded-md h-7 flex items-center px-3 text-[11px] text-slate-400 border border-slate-200">
                        https://freightcode.com/dashboard
                    </div>
                    <Search size={16} className="text-slate-400" />
                </div>

                {/* 2. THE INTERACTIVE STAGE */}
                <div className="relative aspect-video bg-white border-x border-b border-slate-300 rounded-b-2xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden">

                    {/* ZOOMING CONTENT LAYER */}
                    <motion.div
                        animate={{
                            scale: step === 'picking' || step === 'saving' ? 1.05 : 1,
                            filter: step === 'picking' || step === 'saving' ? 'blur(1px)' : 'blur(0px)'
                        }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="absolute inset-0 flex flex-col pointer-events-none select-none"
                    >
                        {/* Top Navbar */}
                        <header className="h-16 md:h-20 border-b border-gray-200 bg-white flex items-center justify-between px-6 md:px-10">
                            <div className="flex items-center">
                                <BrandLogo size="lg" />
                            </div>

                            <div className="flex items-center gap-2 md:gap-6">
                                <div className="hidden md:flex items-center gap-6 text-gray-500 font-bold text-sm">
                                    <Search className="w-4 h-4" />
                                    <Settings className="w-4 h-4" />
                                </div>

                                {/* Placeholder Button for Visual Balance */}
                                <div className="bg-[#003057] text-white px-4 py-2 md:px-6 md:py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 opacity-30">
                                    <Plus className="w-4 h-4" />
                                    <span className="hidden sm:inline">New Booking</span>
                                </div>
                            </div>
                        </header>

                        {/* Dummy Dashboard Grid */}
                        <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 bg-gray-50 flex-1">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm space-y-5">
                                    <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center">
                                        <Anchor className="w-5 h-5 text-gray-400" />
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-4 bg-gray-200 w-2/3 rounded-full" />
                                        <div className="h-3 bg-gray-100 w-full rounded-full" />
                                        <div className="h-3 bg-gray-100 w-4/5 rounded-full" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* REAL PRIMARY ACTION TRIGGER */}
                    {step === 'idle' && (
                        <button
                            onClick={() => setStep('picking')}
                            className="absolute top-[22px] right-[40px] md:top-[30px] md:right-[56px] bg-[#003057] text-white px-4 py-2 md:px-6 md:py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 shadow-xl shadow-[#003057]/20 hover:bg-[#00284a] transition-all z-20 cursor-pointer active:scale-95"
                        >
                            <Plus className="w-4 h-4" />
                            <span className="hidden sm:inline">New Booking</span>
                            <span className="sm:hidden">Book</span>

                            <span className="absolute -top-1 -right-1 flex h-4 w-4">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-300 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-4 w-4 bg-sky-500"></span>
                            </span>
                        </button>
                    )}

                    {/* INTERACTIVE MODAL OVERLAY */}
                    <AnimatePresence>
                        {step !== 'idle' && (
                            <div className="absolute inset-0 z-50 flex items-center justify-center p-4">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setStep('idle')}
                                    className="absolute inset-0 bg-white/70 backdrop-blur-md"
                                />

                                <motion.div
                                    layoutId="modal"
                                    initial={{ scale: 0.8, opacity: 0, y: 40 }}
                                    animate={{ scale: 1, opacity: 1, y: 0 }}
                                    exit={{ scale: 0.8, opacity: 0, y: 40 }}
                                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                    className="relative w-full max-w-[460px] bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
                                >
                                    {step === 'success' ? (
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-16 text-center space-y-6">
                                            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                                            </div>
                                            <h3 className="text-3xl font-black text-[#003057] tracking-tight leading-tight">Booking Confirmed</h3>
                                            <p className="text-gray-600 font-medium">Your space on the vessel is secured. Maersk tracking is active.</p>
                                        </motion.div>
                                    ) : (
                                        <div className="flex flex-col">
                                            <div className="p-10 pb-6">
                                                <div className="flex items-center justify-between mb-8">
                                                    <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 border border-gray-200 rounded-full shadow-sm">
                                                        <TrendingUp className="w-4 h-4 text-[#003057]" />
                                                        <span className="font-black text-[9px] uppercase tracking-widest text-[#003057]">Live Spot Rates</span>
                                                    </div>
                                                    <button onClick={() => setStep('idle')} className="p-1 text-gray-400 hover:text-[#003057] transition-colors">
                                                        <X className="w-5 h-5" />
                                                    </button>
                                                </div>
                                                <h2 className="text-2xl font-semibold text-[#003057] tracking-tight leading-tight">Select Container Rate</h2>
                                                <p className="text-gray-600 text-[15px] mt-2 font-medium">
                                                    LND &rarr; DXB • <span className="text-[#003057]">40ft HC Container</span>
                                                </p>
                                            </div>

                                            <div className="px-6 space-y-3">
                                                {rates.map((rate, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => setSelectedRate(i)}
                                                        className={`w-full flex items-center justify-between p-4 rounded-xl transition-all border-2 ${selectedRate === i ? 'bg-gray-50 border-[#003057]/30 shadow-sm' : 'hover:bg-gray-50 border-gray-200'}`}
                                                    >
                                                        <div className="flex items-center gap-4 text-left">
                                                            <div className="w-10 h-10 bg-white rounded-xl border border-gray-200 p-2 flex items-center justify-center shadow-sm">
                                                                <Ship className="text-gray-500 w-5 h-5" />
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-[#003057] leading-none mb-1">{rate.carrier}</div>
                                                                <div className="text-[11px] text-gray-600 font-semibold tracking-tight">{rate.service}</div>
                                                            </div>
                                                        </div>
                                                        <div className="text-right">
                                                            <div className="font-semibold text-[#003057]">{rate.price}</div>
                                                            <div className="text-[10px] text-gray-600 font-semibold">{rate.transit}</div>
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>

                                            <div className="px-10 py-5">
                                                <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-200">
                                                    <div className="flex items-center gap-2">
                                                        <ShieldCheck className="w-3.5 h-3.5 text-[#003057]" />
                                                        <span className="text-[11px] font-semibold text-gray-600">All-Risk Cargo Insurance</span>
                                                    </div>
                                                    <span className="text-[11px] font-semibold text-[#003057]">+$45.00</span>
                                                </div>
                                            </div>

                                            {/* Footer Actions */}
                                            <div className="p-8 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
                                                <div className="flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-gray-500">
                                                    <ShieldCheck className="w-3.5 h-3.5 text-[#003057]" /> Secure Booking
                                                </div>
                                                <div className="flex gap-3">
                                                    <button onClick={() => setStep('idle')} className="text-sm font-semibold text-gray-500 hover:text-[#003057] transition-colors">Cancel</button>
                                                    <button
                                                        onClick={handleAction}
                                                        disabled={step === 'saving'}
                                                        className="min-w-[110px] px-8 py-3 bg-[#003057] text-white text-sm font-semibold rounded-full shadow-sm hover:bg-[#00284a] active:scale-95 transition-all flex items-center justify-center"
                                                    >
                                                        {step === 'saving' ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : 'Confirm Booking'}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence>

                    {/* VIRTUAL CURSOR */}
                    <AnimatePresence>
                        {showGuide && (
                            <motion.div
                                initial={{ x: 600, y: 500, opacity: 0 }}
                                animate={{
                                    x: [600, 880, 880, 880],
                                    y: [500, 110, 110, 110],
                                    opacity: [0, 1, 1, 1],
                                    scale: [1, 1, 0.9, 1]
                                }}
                                transition={{
                                    duration: 2,
                                    delay: 1.5,
                                    repeat: Infinity,
                                    repeatDelay: 2,
                                    times: [0, 0.7, 0.8, 0.9]
                                }}
                                className="absolute pointer-events-none z-[60] flex flex-col items-center"
                                style={{ left: 0, top: 0 }}
                            >
                                <MousePointer2 className="w-10 h-10 text-[#003057] fill-white drop-shadow-2xl translate-x-1" />
                                <div className="mt-3 bg-white/95 backdrop-blur px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-[0_20px_40px_rgba(0,0,0,0.2)] border border-slate-100">
                                    Click to See How it Works
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* 3. ARCADE STEP INDICATOR (The timeline at the bottom) */}
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur border border-slate-200 px-6 py-3 rounded-2xl flex items-center gap-8 shadow-xl">
                    <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${step === 'idle' ? 'bg-[#003057]' : 'bg-slate-200'}`} />
                        <span className="text-[10px] font-bold text-slate-500">START</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${step === 'picking' ? 'bg-[#003057]' : 'bg-slate-200'}`} />
                        <span className="text-[10px] font-bold text-slate-500">SELECT RATES</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${step === 'success' ? 'bg-[#003057]' : 'bg-slate-200'}`} />
                        <span className="text-[10px] font-bold text-slate-500">CONFIRMED</span>
                    </div>
                </div>
            </div>

            <div className="mt-28 text-center text-slate-400 font-bold text-[10px] tracking-[0.3em] uppercase">
                Click the button above to begin the tour
            </div>
        </div>
    );
}
