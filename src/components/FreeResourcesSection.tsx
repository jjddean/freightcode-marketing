'use client';

import { useState } from 'react';
import { CurrencyConverter } from '@/components/tools/CurrencyConverter';
import { HSCodeLookup } from '@/components/tools/HSCodeLookup';

type ToolId = 'currency' | 'hscode' | null;

export function FreeResourcesSection() {
  const [openTool, setOpenTool] = useState<ToolId>(null);

  const handleToggle = (tool: Exclude<ToolId, null>) => {
    setOpenTool((current) => (current === tool ? null : tool));
  };

  return (
    <section id="free-resources" className="bg-white py-12 px-6 border-t border-slate-100">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-8 md:p-12 text-center bg-slate-50/50 border-b border-slate-100">
          <div className="inline-flex items-center px-3 py-1 bg-[#1e3a5f] rounded-full mb-4">
            <span className="text-cyan-400 text-xs font-medium">Free Resources</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#003057] mb-3">Essential Trade Utilities</h2>
          <p className="text-gray-600 text-sm max-w-lg mx-auto mb-8">
            Instant calculations and generic lookup tools for daily logistics operations.
          </p>
          <p className="text-slate-500 text-xs max-w-xl mx-auto mb-6">
            These are starter utilities. Many more advanced tools are available inside the Freightcode app.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => handleToggle('currency')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-tight border transition-colors ${
                openTool === 'currency'
                  ? 'bg-white text-cyan-600 shadow-sm border-slate-200'
                  : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
              }`}
            >
              Currency Converter
            </button>
            <button
              type="button"
              onClick={() => handleToggle('hscode')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-tight border transition-colors ${
                openTool === 'hscode'
                  ? 'bg-white text-cyan-600 shadow-sm border-slate-200'
                  : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
              }`}
            >
              HS Code Lookup
            </button>
          </div>

          {openTool && (
            <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="max-w-2xl mx-auto">
                {openTool === 'currency' ? <CurrencyConverter /> : <HSCodeLookup />}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
