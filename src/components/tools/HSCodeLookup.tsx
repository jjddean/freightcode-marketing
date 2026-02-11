'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Loader2, BookOpen, AlertCircle, Copy, Check } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface HSCode {
    code: string;
    desc: string;
}

interface HSCodeLookupProps {
    className?: string;
}

export const HSCodeLookup = ({ className }: HSCodeLookupProps) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [allCodes, setAllCodes] = useState<HSCode[]>([]);
    const [results, setResults] = useState<HSCode[]>([]);
    const [loading, setLoading] = useState(false);
    const [isDbLoaded, setIsDbLoaded] = useState(false);
    const [searched, setSearched] = useState(false);
    const [copiedId, setCopiedId] = useState<string | null>(null);

    // Load HS Codes lazily on first interaction or mount
    useEffect(() => {
        const loadDatabase = async () => {
            try {
                const response = await fetch('/hs-codes.json');
                if (!response.ok) throw new Error('Failed to load HS codes');
                const data = await response.json();
                setAllCodes(data);
                setIsDbLoaded(true);
            } catch (error) {
                console.error("Failed to load HS provider:", error);
                toast.error("Offline HS database failed to load.");
            }
        };

        loadDatabase();
    }, []);

    const handleSearch = () => {
        if (!searchTerm.trim()) return;

        setLoading(true);
        setSearched(true);

        // Use timeout to allow UI to show loading state before heavy filter
        setTimeout(() => {
            const lowerTerm = searchTerm.toLowerCase();
            const filtered = allCodes.filter(item =>
                item.desc.toLowerCase().includes(lowerTerm) ||
                item.code.startsWith(lowerTerm)
            ).slice(0, 50); // Limit to 50 results for performance

            setResults(filtered);
            setLoading(false);
        }, 100);
    };

    const copyToClipboard = (code: string) => {
        navigator.clipboard.writeText(code);
        setCopiedId(code);
        toast.success(`Code ${code} copied to clipboard`);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <div className={cn("bg-white p-6 rounded-xl shadow-lg border border-slate-200/60 ring-1 ring-black/5", className)}>
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-cyan-50 rounded-lg">
                        <BookOpen className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900">HS Code Lookup</h3>
                        <p className="text-xs text-slate-500">Search 2024 WCO Harmonized System</p>
                    </div>
                </div>
                {!isDbLoaded && <span className="text-xs text-cyan-600 bg-cyan-50 px-2 py-1 rounded-full font-medium animate-pulse">Initializing...</span>}
            </div>

            <div className="flex gap-2 mb-6">
                <Input
                    placeholder="Enter product description or HS Code (e.g. 'Coffee', '8517')"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    disabled={!isDbLoaded}
                    className="h-12 text-lg focus-visible:ring-cyan-500"
                />
                <Button onClick={handleSearch} disabled={loading || !isDbLoaded} className="h-12 w-12 p-0 shrink-0 bg-cyan-600 hover:bg-cyan-700 transition-colors shadow-sm">
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
                </Button>
            </div>

            {searched && results.length === 0 && !loading && (
                <div className="text-center py-12 text-slate-400 bg-slate-50 rounded-lg border border-dashed border-slate-200">
                    <AlertCircle className="w-10 h-10 mx-auto mb-3 text-slate-300" />
                    <p className="font-medium text-slate-600">No HS Codes found</p>
                    <p className="text-sm">Try a different keyword or code.</p>
                </div>
            )}

            {results.length > 0 && (
                <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                    {results.map((item, idx) => (
                        <div
                            key={idx}
                            className="p-4 border border-slate-100 rounded-lg hover:bg-cyan-50/30 hover:border-cyan-100 transition-all group cursor-pointer relative"
                            onClick={() => copyToClipboard(item.code)}
                        >
                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <div className="font-mono text-sm font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded inline-block mb-1.5 border border-cyan-100/50">
                                        {item.code}
                                    </div>
                                    <div className="text-sm text-slate-700 leading-relaxed font-medium">{item.desc}</div>
                                </div>
                                <Button className="opacity-0 group-hover:opacity-100 h-8 w-8 p-0 text-slate-400 hover:text-cyan-600 bg-transparent hover:bg-cyan-50 flex items-center justify-center rounded-md transition-all" onClick={(e) => {
                                    e.stopPropagation();
                                    copyToClipboard(item.code);
                                }}>
                                    {copiedId === item.code ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="mt-6 text-xs text-slate-400 text-center pt-4 border-t border-slate-100">
                {isDbLoaded ? `Database Ready (${allCodes.length.toLocaleString()} codes)` : 'Loading database...'}
            </div>
        </div>
    );
};
