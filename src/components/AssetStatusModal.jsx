import React, { useState } from 'react';
import { ASSET_INVENTORY } from '../data/assetInventory';
import { X, CheckCircle2, AlertCircle, Image as ImageIcon, Database } from 'lucide-react';

export default function AssetStatusModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  // Flatten asset inventory for tabular view
  const allAssets = [];
  Object.entries(ASSET_INVENTORY).forEach(([category, items]) => {
    Object.entries(items).forEach(([key, asset]) => {
      allAssets.push({ category, key, ...asset });
    });
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-graphite-950/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[85vh] bg-ivory-50 rounded-2xl shadow-2xl border border-graphite/10 flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="asset-inventory-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-graphite/10 bg-ivory">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-graphite text-ivory flex items-center justify-center shadow-sm">
              <Database className="w-5 h-5 text-solar" />
            </div>
            <div>
              <h2 id="asset-inventory-title" className="text-lg font-semibold text-graphite tracking-tight">
                Asset Inventory & Governance Registry
              </h2>
              <p className="text-xs text-muted">
                Tracking all imagery, schematics & interface previews against approved engineering sources
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-muted hover:text-graphite rounded-full hover:bg-graphite/5 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Table */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-4 flex items-center justify-between text-xs text-muted">
            <span>Total Tracked Assets: {allAssets.length}</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
              Verified AMEC Assets (100% Sourced)
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-graphite/10 bg-white">
            <table className="w-full text-left text-sm text-graphite">
              <thead className="bg-ivory-100 text-xs uppercase font-medium text-muted tracking-wider border-b border-graphite/10">
                <tr>
                  <th scope="col" className="px-4 py-3">Asset Name</th>
                  <th scope="col" className="px-4 py-3">Website Section</th>
                  <th scope="col" className="px-4 py-3">Source & File Path</th>
                  <th scope="col" className="px-4 py-3">Approval Status</th>
                  <th scope="col" className="px-4 py-3 text-right">Replacement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-graphite/5 text-xs">
                {allAssets.map((asset) => (
                  <tr key={asset.id} className="hover:bg-ivory/50 transition-colors">
                    <td className="px-4 py-3 font-medium text-graphite">
                      <div className="flex items-center gap-2">
                        <ImageIcon className="w-3.5 h-3.5 text-muted flex-shrink-0" />
                        <span>{asset.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-muted">{asset.section}</td>
                    <td className="px-4 py-3">
                      <div className="font-mono text-[11px] text-graphite-100">{asset.path}</div>
                      <div className="text-[10px] text-muted">{asset.source}</div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        {asset.approvalStatus}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      {asset.replacementRequired ? (
                        <span className="inline-flex items-center gap-1 text-[10px] text-amber-700 font-medium">
                          <AlertCircle className="w-3 h-3" /> Required
                        </span>
                      ) : (
                        <span className="text-[10px] text-muted">Ready for Launch</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-ivory-100 border border-graphite/10 text-xs text-muted leading-relaxed">
            <strong className="text-graphite font-medium">Asset Replacement Strategy:</strong> All image references in this codebase originate from the decoupled <code className="bg-white px-1.5 py-0.5 rounded border border-graphite/10 font-mono text-[11px]">assetInventory.js</code> dictionary. When updated ultra-high-resolution CAD renderings or new photography are released by AMEC engineering, dropping the replacement files into <code className="bg-white px-1.5 py-0.5 rounded border border-graphite/10 font-mono text-[11px]">public/assets/</code> will automatically update the entire application without any layout refactoring.
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-ivory border-t border-graphite/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-medium bg-graphite text-ivory rounded-full hover:bg-graphite-800 transition-colors"
          >
            Close Registry
          </button>
        </div>
      </div>
    </div>
  );
}
