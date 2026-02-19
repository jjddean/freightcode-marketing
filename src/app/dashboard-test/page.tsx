'use client';

import React, { useState } from 'react';
import {
    LayoutDashboard,
    Ship,
    FileText,
    ShieldCheck,
    BarChart3,
    Settings,
    Plus,
    Search,
    Bell,
    User,
    ChevronRight,
    ArrowUpRight,
    Anchor,
    MapPin,
    AlertCircle,
    File,
    Package,
    TrendingUp,
    CheckCircle2
} from 'lucide-react';
import { BrandLogo } from '@/components/BrandLogo';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

function MultiStepQuoteForm() {
    const [step, setStep] = useState(1);
    const [selectedRateId, setSelectedRateId] = useState<number | null>(null);
    const [isComplete, setIsComplete] = useState(false);
    const [formData, setFormData] = useState({
        origin: '',
        dest: '',
        cargoType: 'General',
        weight: '',
        volume: '',
        service: 'Ocean FCL',
        date: '',
        insurance: false,
    });

    const steps = [
        { name: 'Route', icon: MapPin },
        { name: 'Cargo', icon: Package },
        { name: 'Service', icon: Ship },
        { name: 'Schedule', icon: BarChart3 },
        { name: 'Live Rates', icon: TrendingUp },
    ];

    const nextStep = () => setStep(s => Math.min(s + 1, 5));
    const prevStep = () => setStep(s => Math.max(s - 1, 1));
    const handleComplete = () => {
        if (selectedRateId) setIsComplete(true);
    };

    if (isComplete) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl border border-slate-200 shadow-xl p-16 text-center space-y-6 max-w-2xl mx-auto"
            >
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-[#003057] tracking-tight">Booking Confirmed</h3>
                <p className="text-slate-500 font-medium text-xs">Your space on the vessel is secured. Maersk tracking is active.</p>
                <div className="pt-4">
                    <button
                        onClick={() => {
                            setIsComplete(false);
                            setSelectedRateId(null);
                            setStep(1);
                        }}
                        className="px-8 py-3 bg-[#003057] text-white text-xs font-bold rounded-xl hover:bg-[#00284a] transition-all shadow-lg"
                    >
                        New Quote
                    </button>
                </div>
            </motion.div>
        );
    }

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-[#003057]">Where is your cargo going?</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Origin Port</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Shanghai (CNSHA)"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 text-xs focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 outline-none transition-all"
                                        value={formData.origin}
                                        onChange={e => setFormData({ ...formData, origin: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Destination Port</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Felixstowe (GBFXT)"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 text-xs focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 outline-none transition-all"
                                        value={formData.dest}
                                        onChange={e => setFormData({ ...formData, dest: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            case 2:
                return (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-[#003057]">What are you shipping?</h3>
                            <div className="grid grid-cols-3 gap-3">
                                {['General', 'Hazardous', 'Perishable'].map(type => (
                                    <button
                                        key={type}
                                        onClick={() => setFormData({ ...formData, cargoType: type })}
                                        className={cn(
                                            "py-3 px-4 rounded-xl border text-[11px] font-bold transition-all",
                                            formData.cargoType === type ? "bg-[#003057] text-white border-[#003057]" : "bg-white text-[#003057] border-slate-200 hover:border-slate-300"
                                        )}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Gross Weight (kg)</label>
                                    <input
                                        type="number"
                                        placeholder="e.g. 1200"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 text-xs focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 outline-none transition-all"
                                        value={formData.weight}
                                        onChange={e => setFormData({ ...formData, weight: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Volume (CBM)</label>
                                    <input
                                        type="number"
                                        placeholder="e.g. 24"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 text-xs focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 outline-none transition-all"
                                        value={formData.volume}
                                        onChange={e => setFormData({ ...formData, volume: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            case 3:
                return (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-[#003057]">Select Service Level</h3>
                            <div className="grid grid-cols-1 gap-3">
                                {[
                                    { name: 'Ocean FCL', desc: 'Full Container Load • Standard', icon: Ship },
                                    { name: 'Ocean LCL', desc: 'Less than Container Load • Economy', icon: Anchor },
                                    { name: 'Air Freight', desc: 'Express Delivery • Premium', icon: ArrowUpRight }
                                ].map(service => (
                                    <button
                                        key={service.name}
                                        onClick={() => setFormData({ ...formData, service: service.name })}
                                        className={cn(
                                            "w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all group",
                                            formData.service === service.name ? "bg-[#003057]/5 border-[#003057] shadow-md" : "bg-white border-slate-100 hover:bg-slate-50"
                                        )}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={cn(
                                                "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                                                formData.service === service.name ? "bg-[#003057] text-white" : "bg-slate-100 text-slate-400"
                                            )}>
                                                <service.icon className="w-5 h-5" />
                                            </div>
                                            <div className="text-left">
                                                <div className="text-xs font-bold text-[#003057]">{service.name}</div>
                                                <div className="text-[10px] text-slate-400 font-medium">{service.desc}</div>
                                            </div>
                                        </div>
                                        <div className={cn(
                                            "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                                            formData.service === service.name ? "border-[#003057] bg-[#003057]" : "border-slate-200"
                                        )}>
                                            {formData.service === service.name && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                );
            case 4:
                return (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-[#003057]">Shipping Details</h3>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Expected Shipping Date</label>
                                    <input
                                        type="date"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 text-xs focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 outline-none transition-all"
                                        value={formData.date}
                                        onChange={e => setFormData({ ...formData, date: e.target.value })}
                                    />
                                </div>
                                <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-cyan-50 text-cyan-600 rounded-lg flex items-center justify-center">
                                            <ShieldCheck className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-[#003057]">All-Risk Cargo Insurance</p>
                                            <p className="text-[10px] text-slate-400 font-medium">Protect against damage, theft, and loss</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setFormData({ ...formData, insurance: !formData.insurance })}
                                        className={cn(
                                            "w-12 h-6 rounded-full transition-all relative",
                                            formData.insurance ? "bg-cyan-500" : "bg-slate-200"
                                        )}
                                    >
                                        <div className={cn(
                                            "absolute top-1 w-4 h-4 bg-white rounded-full transition-all",
                                            formData.insurance ? "right-1" : "left-1"
                                        )} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            case 5:
                return (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                        <div className="space-y-4 text-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100 mb-2">
                                <TrendingUp className="w-3 h-3" />
                                <span className="text-[9px] font-black uppercase tracking-widest">Live Rates Found</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#003057]">Live Market Comparison</h3>
                            <p className="text-xs text-slate-500 font-medium">Based on your requirements, here are the best available rates.</p>
                        </div>
                        <div className="space-y-3 pb-4">
                            {[
                                { id: 1, carrier: 'Maersk Spot', price: '$2,450', transit: '24 Days', service: 'Direct • Fixed', logo: '🚢' },
                                { id: 2, carrier: 'CMA CGM', price: '$2,180', transit: '28 Days', service: 'Via Singapore', logo: '⚓' },
                                { id: 3, carrier: 'MSC', price: '$2,310', transit: '26 Days', service: 'Direct • Standard', logo: '🌊' }
                            ].map((rate) => (
                                <div
                                    key={rate.id}
                                    onClick={() => setSelectedRateId(rate.id)}
                                    className={cn(
                                        "bg-white p-5 rounded-2xl border transition-all cursor-pointer group flex items-center justify-between",
                                        selectedRateId === rate.id ? "border-cyan-500 bg-cyan-50/30 shadow-md scale-[1.02]" : "border-slate-200 hover:shadow-md hover:border-cyan-500/30"
                                    )}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={cn(
                                            "w-12 h-12 border rounded-2xl flex items-center justify-center text-xl transition-colors",
                                            selectedRateId === rate.id ? "bg-cyan-50 border-cyan-200" : "bg-slate-50 border-slate-100 group-hover:bg-cyan-50"
                                        )}>
                                            {rate.logo}
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-[#003057]">{rate.carrier}</div>
                                            <div className="text-[10px] text-slate-400 font-medium">{rate.service}</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-bold text-cyan-600 leading-none mb-1">{rate.price}</div>
                                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{rate.transit}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col relative min-h-[500px]">
            {/* Form Header */}
            <div className="p-8 pb-6 border-b border-slate-50 bg-white">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex gap-1.5">
                        {steps.map((s, i) => (
                            <div
                                key={i}
                                className={cn(
                                    "h-1 rounded-full transition-all duration-500",
                                    step > i + 1 ? "w-8 bg-emerald-500" :
                                        step === i + 1 ? "w-12 bg-cyan-500" : "w-8 bg-slate-100"
                                )}
                            />
                        ))}
                    </div>
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Step {step}/5</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-cyan-50 text-cyan-500 rounded-2xl flex items-center justify-center shadow-sm">
                        {React.createElement(steps[step - 1].icon, { className: "w-5 h-5" })}
                    </div>
                    <div>
                        <h2 className="text-base font-bold text-[#003057] tracking-tight">{steps[step - 1].name}</h2>
                        <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest">Quote Wizard • Beta</p>
                    </div>
                </div>
            </div>

            {/* Content area - Natural Scroll */}
            <div className="flex-1 p-8 md:p-10">
                {renderStep()}
            </div>

            {/* Footer - Sticky to Widget Bottom */}
            <div className="sticky bottom-0 p-8 py-6 bg-white/80 backdrop-blur-md border-t border-slate-100 flex items-center justify-between mt-auto z-20">
                <button
                    onClick={prevStep}
                    className={cn(
                        "text-xs font-bold text-slate-400 hover:text-[#003057] transition-colors",
                        step === 1 && "invisible"
                    )}
                >
                    Back
                </button>
                {step < 5 ? (
                    <button
                        onClick={nextStep}
                        className="bg-[#003057] text-white px-8 py-3 rounded-xl text-xs font-bold shadow-lg shadow-[#003057]/20 hover:bg-[#00284a] transition-all active:scale-95 flex items-center gap-2"
                    >
                        Continue
                        <ChevronRight className="w-4 h-4" />
                    </button>
                ) : (
                    <button
                        onClick={handleComplete}
                        className={cn(
                            "px-8 py-3 rounded-xl text-xs font-bold transition-all flex items-center gap-2",
                            selectedRateId
                                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 active:scale-95"
                                : "bg-slate-100 text-slate-300 cursor-not-allowed border border-slate-200"
                        )}
                        disabled={!selectedRateId}
                    >
                        Secure Rate
                        <CheckCircle2 className="w-4 h-4" />
                    </button>
                )}
            </div>
        </div>
    );
}

export default function TestDashboardPage() {
    const [activeTab, setActiveTab] = useState('Shipments');

    const navigation = [
        { name: 'Dashboard', icon: LayoutDashboard },
        { name: 'Shipments', icon: Ship },
        { name: 'Quotes', icon: FileText },
        { name: 'Documents', icon: File },
        { name: 'Compliance', icon: ShieldCheck },
        { name: 'Analytics', icon: BarChart3 },
        { name: 'Settings', icon: Settings },
    ];

    const stats = [
        { name: 'Active Shipments', value: '14', change: '+2', trend: 'up' },
        { name: 'Pending Reviews', value: '3', change: '-1', trend: 'down' },
        { name: 'Route Risk', value: '82%', change: 'Stable', trend: 'neutral' },
        { name: 'Monthly Saved', value: '$4,250', change: '+12%', trend: 'up' },
    ];

    const shipments = [
        { id: 'FC-8901', origin: 'Shanghai (CNSHA)', dest: 'Felixstowe (GBFXT)', status: 'In Transit', vessel: 'MSC OSCAR', eta: 'Feb 24', risk: 'Low' },
        { id: 'FC-8905', origin: 'Rotterdam (NLRTM)', dest: 'New York (USNYC)', status: 'Document Phase', vessel: 'MAERSK ALTAIR', eta: 'Mar 02', risk: 'Medium' },
        { id: 'FC-8912', origin: 'Singapore (SGSIN)', dest: 'Los Angeles (USLAX)', status: 'Customs Clear', vessel: 'EVER GIVEN', eta: 'Feb 21', risk: 'Low' },
        { id: 'FC-8898', origin: 'Dubai (AEJEA)', dest: 'Lagos (NGLOS)', status: 'Delayed', vessel: 'CMA CGM MARCO POLO', eta: 'Feb 28', risk: 'High' },
        { id: 'FC-8920', origin: 'Ho Chi Minh (VNSGN)', dest: 'Marseille (FRMRS)', status: 'Booking Confirmed', vessel: 'COSCO SHIPPING UNIVERSE', eta: 'Mar 15', risk: 'Low' },
        { id: 'FC-8924', origin: 'Busan (KRPUS)', dest: 'Valencia (ESVLC)', status: 'In Transit', vessel: 'HMM ALGECIRAS', eta: 'Mar 08', risk: 'Low' },
    ];

    const documents = [
        { name: 'Commercial Invoice', type: 'PDF', size: '1.2 MB', status: 'Verified', date: '2h ago' },
        { name: 'Packing List', type: 'DOCX', size: '850 KB', status: 'Pending', date: '5h ago' },
        { name: 'Bill of Lading', type: 'PDF', size: '2.4 MB', status: 'Action Required', date: '1d ago' },
    ];

    return (
        <div className="flex h-screen bg-[#f8fafc] overflow-hidden font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-[#003057] text-white flex flex-col shrink-0">
                <div className="p-8 pb-12">
                    <BrandLogo inverted size="lg" />
                </div>

                <nav className="flex-1 px-4 space-y-1">
                    {navigation.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => setActiveTab(item.name)}
                            className={cn(
                                "w-full flex items-center gap-3 px-4 py-2.5 rounded-md text-xs font-medium transition-all group",
                                activeTab === item.name
                                    ? "bg-white/10 text-cyan-400 shadow-[inset_4px_0_0_0_#22d3ee]"
                                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                            )}
                        >
                            <item.icon className={cn("w-4 h-4 transition-transform group-hover:scale-110", activeTab === item.name ? "text-cyan-400" : "text-slate-400 group-hover:text-white")} />
                            {item.name}
                        </button>
                    ))}
                </nav>

                <div className="p-6">
                    <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                        <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">Pro Plan</p>
                        <p className="text-[11px] text-slate-300 mb-4 font-medium leading-relaxed">Full GeoRisk™ access enabled with real-time zone alerts.</p>
                        <button className="w-full py-2 bg-cyan-400 text-[#003057] text-xs font-bold rounded-md hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20">
                            Upgrade Team
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden">
                {/* Topbar */}
                <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-10">
                    <div className="flex items-center gap-8 flex-1">
                        <h1 className="text-base font-semibold text-[#003057]">{activeTab}</h1>
                        <div className="max-w-md w-full relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search shipments, docs, HTS codes..."
                                className="w-full bg-slate-50 border border-slate-200 rounded-md py-2 pl-11 pr-4 text-xs focus:outline-none focus:ring-2 focus:ring-[#003057]/10 transition-all focus:bg-white"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="relative text-slate-400 hover:text-[#003057] transition-colors p-2 hover:bg-slate-50 rounded-md">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                        <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
                            <div className="text-right">
                                <p className="text-xs font-semibold text-[#003057]">Jason Dean</p>
                                <p className="text-[10px] text-slate-400">Admin</p>
                            </div>
                            <div className="h-10 w-10 bg-slate-100 rounded-md flex items-center justify-center border border-slate-200 cursor-pointer hover:bg-slate-200 transition-colors">
                                <User className="w-5 h-5 text-slate-600" />
                            </div>
                        </div>
                    </div>
                </header>


                <div className="flex-1 overflow-y-auto p-10 space-y-10">
                    {activeTab === 'Quotes' ? (
                        <div className="max-w-4xl mx-auto">
                            <MultiStepQuoteForm />
                        </div>
                    ) : (
                        <>
                            {/* Welcome Header */}
                            <div className="flex items-end justify-between">
                                <div>
                                    <h2 className="text-xl font-semibold text-[#003057] tracking-tight mb-0.5">Operations Dashboard</h2>
                                    <p className="text-slate-500 text-xs font-medium italic">Showing data for <span className="text-[#003057] font-semibold not-italic">February 2026</span> &bull; 14 active lines</p>
                                </div>
                                <div className="flex gap-3">
                                    <button className="bg-white border border-slate-200 text-[#003057] px-5 py-2.5 rounded-md font-medium text-xs hover:bg-slate-50 transition-all">
                                        Export CSV
                                    </button>
                                    <button className="bg-[#003057] text-white px-5 py-2.5 rounded-md font-medium text-xs shadow-lg shadow-[#003057]/20 hover:bg-[#00284a] flex items-center gap-2 transition-all active:scale-95 leading-none">
                                        <Plus className="w-4 h-4 translate-y-[-1px]" />
                                        New Shipment
                                    </button>
                                </div>
                            </div>

                            {/* Stats Grid - Fixed layout */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {stats.map((stat) => (
                                    <div key={stat.name} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                        <p className="text-[8px] font-semibold text-slate-400 uppercase tracking-widest mb-1">{stat.name}</p>
                                        <div className="flex items-baseline gap-3">
                                            <span className="text-xl font-semibold text-[#003057] tracking-tight">{stat.value}</span>
                                            <span className={cn(
                                                "text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1",
                                                stat.trend === 'up' ? "bg-emerald-50 text-emerald-600" :
                                                    stat.trend === 'down' ? "bg-red-50 text-red-600" : "bg-slate-50 text-slate-600"
                                            )}>
                                                {stat.trend === 'up' && <ArrowUpRight className="w-3 h-3" />}
                                                {stat.change}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                                {/* Shipments Table */}
                                <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                                    <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between">
                                        <h3 className="font-medium text-sm text-[#003057] flex items-center gap-2">
                                            <Ship className="w-4 h-4 text-cyan-500" />
                                            Live Vessels
                                        </h3>
                                        <button className="text-[11px] font-black uppercase tracking-widest text-cyan-600 hover:text-cyan-700">View All Queue</button>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead className="bg-slate-50 border-b border-slate-100 text-left">
                                                <tr>
                                                    <th className="px-8 py-3 text-[9px] font-medium uppercase tracking-widest text-slate-400">ID</th>
                                                    <th className="px-8 py-3 text-[9px] font-medium uppercase tracking-widest text-slate-400">Route</th>
                                                    <th className="px-8 py-3 text-[9px] font-medium uppercase tracking-widest text-slate-400">Details</th>
                                                    <th className="px-8 py-3 text-[9px] font-medium uppercase tracking-widest text-slate-400">Status</th>
                                                    <th className="px-8 py-3 text-[9px] font-medium uppercase tracking-widest text-slate-400 text-right">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-100">
                                                {shipments.map((shipment) => (
                                                    <tr key={shipment.id} className="group hover:bg-slate-50/50 transition-colors">
                                                        <td className="px-8 py-5 whitespace-nowrap">
                                                            <span className="text-xs font-medium text-[#003057]">{shipment.id}</span>
                                                        </td>
                                                        <td className="px-8 py-5 whitespace-nowrap">
                                                            <div className="flex flex-col">
                                                                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-700">
                                                                    <span>{shipment.origin.split(' ')[0]}</span>
                                                                    <ChevronRight className="w-3 h-3 text-slate-300" />
                                                                    <span>{shipment.dest.split(' ')[0]}</span>
                                                                </div>
                                                                <span className="text-[10px] font-medium text-slate-400 mt-0.5">{shipment.risk} Risk</span>
                                                            </div>
                                                        </td>
                                                        <td className="px-8 py-5 whitespace-nowrap">
                                                            <div className="flex flex-col">
                                                                <span className="text-xs font-medium text-slate-700">{shipment.vessel}</span>
                                                                <span className="text-[10px] font-medium text-slate-400 mt-0.5">ETA: {shipment.eta}</span>
                                                            </div>
                                                        </td>
                                                        <td className="px-8 py-5 whitespace-nowrap">
                                                            <span className={cn(
                                                                "text-[8px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full",
                                                                shipment.status === 'In Transit' ? "bg-blue-50 text-blue-600" :
                                                                    shipment.status === 'Customs Clear' ? "bg-emerald-50 text-emerald-600" :
                                                                        shipment.status === 'Delayed' ? "bg-red-50 text-red-600" : "bg-amber-50 text-amber-600"
                                                            )}>
                                                                {shipment.status}
                                                            </span>
                                                        </td>
                                                        <td className="px-8 py-5 whitespace-nowrap text-right">
                                                            <button className="p-2 text-slate-300 hover:text-[#003057] transition-colors">
                                                                <ArrowUpRight className="w-4 h-4" />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Side Section: Documents & Compliance */}
                                <div className="space-y-6">
                                    {/* Documents Card */}
                                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                                        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                                            <h3 className="font-semibold text-sm text-[#003057] flex items-center gap-2">
                                                <FileText className="w-4 h-4 text-cyan-500" />
                                                Compliance Docs
                                            </h3>
                                            <Plus className="w-4 h-4 text-slate-400 cursor-pointer hover:text-[#003057]" />
                                        </div>
                                        <div className="p-6 space-y-4">
                                            {documents.map((doc, i) => (
                                                <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-slate-200 transition-colors cursor-pointer group">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-[10px] font-bold text-slate-400 group-hover:bg-slate-100">
                                                            {doc.type}
                                                        </div>
                                                        <div>
                                                            <p className="text-xs font-semibold text-slate-700">{doc.name}</p>
                                                            <p className="text-[10px] text-slate-400">{doc.date} &bull; {doc.size}</p>
                                                        </div>
                                                    </div>
                                                    <div className={cn(
                                                        "w-2 h-2 rounded-full",
                                                        doc.status === 'Verified' ? "bg-emerald-500" :
                                                            doc.status === 'Pending' ? "bg-amber-500" : "bg-red-500"
                                                    )} />
                                                </div>
                                            ))}
                                            <button className="w-full py-2.5 text-[11px] font-bold text-[#003057] uppercase tracking-widest hover:bg-slate-50 rounded-lg transition-colors border border-dashed border-slate-200">
                                                Review 7 Missing Docs
                                            </button>
                                        </div>
                                    </div>

                                    {/* GeoRisk Snapshot */}
                                    <div className="bg-[#0a1628] rounded-xl p-6 text-white border border-slate-800 shadow-xl overflow-hidden relative">
                                        <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-red-500/10 blur-3xl rounded-full"></div>
                                        <div className="relative z-10">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center gap-2">
                                                    <ShieldCheck className="w-4 h-4 text-red-400" />
                                                    <span className="text-[9px] font-semibold uppercase tracking-widest text-red-400">Risk Advisor</span>
                                                </div>
                                                <div className="flex gap-1">
                                                    {[1, 2, 3].map(i => <div key={i} className="w-1 h-3 rounded-full bg-red-500/40" />)}
                                                </div>
                                            </div>
                                            <h4 className="font-semibold text-lg leading-tight mb-2">Strait of Hormuz</h4>
                                            <p className="text-slate-400 text-xs mb-4 leading-relaxed">
                                                Increased maritime activity detected. High probability of route diversion for <span className="text-white font-semibold italic">FC-8898</span>.
                                            </p>
                                            <button className="w-full py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-lg text-xs font-bold transition-all shadow-lg shadow-red-500/20">
                                                Run Simulation
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </main>
            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #e2e8f0;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #cbd5e1;
                }
            `}</style>
        </div>
    );
}
