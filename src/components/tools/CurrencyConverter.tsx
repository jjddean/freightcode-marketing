'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { ArrowLeftRight, Check, ChevronsUpDown, Clock, Loader2, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from "@/lib/utils";

interface ExchangeData {
    base: string;
    date: string;
    rates: Record<string, number>;
}

// Common currencies for quick selection
const COMMON_CURRENCIES = [
    { code: 'USD', name: 'US Dollar' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'British Pound' },
    { code: 'CNY', name: 'Chinese Yuan' },
    { code: 'JPY', name: 'Japanese Yen' },
    { code: 'CAD', name: 'Canadian Dollar' },
    { code: 'AUD', name: 'Australian Dollar' },
    { code: 'SGD', name: 'Singapore Dollar' },
    { code: 'HKD', name: 'Hong Kong Dollar' },
    { code: 'INR', name: 'Indian Rupee' },
];

export const CurrencyConverter = () => {
    const [amount, setAmount] = useState<string>('1000');
    const [fromCurrency, setFromCurrency] = useState<string>('USD');
    const [toCurrency, setToCurrency] = useState<string>('GBP');
    const [rates, setRates] = useState<ExchangeData | null>(null);
    const [loading, setLoading] = useState(true);
    const [lastUpdated, setLastUpdated] = useState<string>('');
    const [openFrom, setOpenFrom] = useState(false);
    const [openTo, setOpenTo] = useState(false);

    const fetchRates = async () => {
        setLoading(true);
        try {
            // In a real app, this file is updated daily by a backend script
            const response = await fetch('/exchange-rates.json');
            if (!response.ok) throw new Error('Failed to load rates');
            const data: ExchangeData = await response.json();
            setRates(data);
            setLastUpdated(data.date);
        } catch (error) {
            console.error(error);
            toast.error("Failed to load exchange rates");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRates();
    }, []);

    const convert = (val: string, from: string, to: string) => {
        if (!rates || !rates.rates) return '---';
        const amountNum = parseFloat(val);
        if (isNaN(amountNum)) return '---';

        // Convert to base (EUR) then to target
        const fromRate = rates.rates[from]; // e.g. 1.08 USD per EUR
        const toRate = rates.rates[to];     // e.g. 0.85 GBP per EUR

        // If base is EUR, rate is 1. If not found, default 1 (risk)
        const baseAmount = from === 'EUR' ? amountNum : amountNum / (fromRate || 1);
        const targetAmount = to === 'EUR' ? baseAmount : baseAmount * (toRate || 1);

        return targetAmount.toLocaleString('en-US', {
            style: 'currency',
            currency: to,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    };

    const handleSwap = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    const getCurrencyLabel = (code: string) => {
        const item = COMMON_CURRENCIES.find((c) => c.code === code);
        return item ? `${item.code} - ${item.name}` : code;
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200/60 ring-1 ring-black/5">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-cyan-50 rounded-lg">
                        <ArrowLeftRight className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900">Currency Converter</h3>
                        <p className="text-xs text-slate-500">Convert live exchange rates</p>
                    </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Clock className="w-3 h-3 text-cyan-500" />
                    <span className="font-medium text-slate-400">Rates as of: {lastUpdated || 'Loading...'}</span>
                </div>
                <Button className="h-6 w-6 p-1 rounded-full bg-transparent hover:bg-cyan-50 text-slate-400 hover:text-cyan-600 transition-colors" onClick={fetchRates}>
                    <RefreshCw className={`w-3 h-3 ${loading ? 'animate-spin' : ''}`} />
                </Button>
            </div>

            <div className="grid gap-4 mt-4">
                <div className="space-y-1.5">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full h-12 px-3 py-2 rounded-md bg-white text-lg font-bold font-mono border border-slate-300 outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none focus:border-2 focus:border-cyan-500 transition-[border-color,border-width]"
                    />
                </div>

                <div className="flex items-end gap-3 flex-nowrap">
                    <div className="space-y-1.5 flex flex-col flex-1 min-w-0">
                        <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                        <Popover open={openFrom} onOpenChange={setOpenFrom}>
                            <PopoverTrigger asChild>
                                <button
                                    type="button"
                                    className="inline-flex w-full h-12 items-center justify-between rounded-md px-4 text-gray-900 bg-white border border-gray-200 hover:bg-gray-50 outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                                >
                                    {fromCurrency ? getCurrencyLabel(fromCurrency) : "Select currency..."}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[--radix-popover-trigger-width] p-0 z-[99999] rounded-xl bg-white border-0 shadow-none">
                                <Command>
                                    <CommandInput placeholder="Search currency..." />
                                    <CommandList>
                                        <CommandEmpty>No currency found.</CommandEmpty>
                                        <CommandGroup>
                                            {COMMON_CURRENCIES.map((c) => (
                                                <CommandItem
                                                    key={c.code}
                                                    value={`${c.code} ${c.name}`}
                                                    onSelect={() => {
                                                        setFromCurrency(c.code);
                                                        setOpenFrom(false);
                                                    }}
                                                    className="aria-selected:bg-cyan-500 aria-selected:text-white"
                                                >
                                                    <Check
                                                        className={cn(
                                                            "mr-2 h-4 w-4",
                                                            fromCurrency === c.code ? "opacity-100" : "opacity-0"
                                                        )}
                                                    />
                                                    {c.code} - {c.name}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>

                    <Button
                        className="mb-1 h-10 w-10 rounded-full bg-slate-100 hover:bg-cyan-100 text-slate-500 hover:text-cyan-600 border border-transparent hover:border-cyan-200 shadow-sm flex items-center justify-center p-0 transition-all justify-self-center"
                        onClick={handleSwap}
                    >
                        <ArrowLeftRight className="w-4 h-4" />
                    </Button>

                    <div className="space-y-1.5 flex flex-col flex-1 min-w-0">
                        <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                        <Popover open={openTo} onOpenChange={setOpenTo}>
                            <PopoverTrigger asChild>
                                <button
                                    type="button"
                                    className="inline-flex w-full h-12 items-center justify-between rounded-md px-4 text-gray-900 bg-white border border-gray-200 hover:bg-gray-50 outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                                >
                                    {toCurrency ? getCurrencyLabel(toCurrency) : "Select currency..."}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[--radix-popover-trigger-width] p-0 z-[99999] rounded-xl bg-white border-0 shadow-none">
                                <Command>
                                    <CommandInput placeholder="Search currency..." />
                                    <CommandList>
                                        <CommandEmpty>No currency found.</CommandEmpty>
                                        <CommandGroup>
                                            {COMMON_CURRENCIES.map((c) => (
                                                <CommandItem
                                                    key={c.code}
                                                    value={`${c.code} ${c.name}`}
                                                    onSelect={() => {
                                                        setToCurrency(c.code);
                                                        setOpenTo(false);
                                                    }}
                                                    className="aria-selected:bg-cyan-500 aria-selected:text-white"
                                                >
                                                    <Check
                                                        className={cn(
                                                            "mr-2 h-4 w-4",
                                                            toCurrency === c.code ? "opacity-100" : "opacity-0"
                                                        )}
                                                    />
                                                    {c.code} - {c.name}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>

                <div className="p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 text-center relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-cyan-400/10 transition-colors"></div>
                    <div className="relative z-10">
                        <div className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-widest">Estimated Value</div>
                        {loading ? (
                            <div className="h-10 flex items-center justify-center">
                                <Loader2 className="w-6 h-6 animate-spin text-cyan-500" />
                            </div>
                        ) : (
                            <div className="text-2xl font-black text-slate-900 tracking-tight">
                                {convert(amount, fromCurrency, toCurrency)}
                            </div>
                        )}
                        <div className="text-xs text-slate-500 mt-2 font-mono bg-white/50 inline-block px-2 py-1 rounded border border-slate-200/50">
                            1 {fromCurrency} = {convert('1', fromCurrency, toCurrency)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
