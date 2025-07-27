import React from "react";

export default function HistoryOfPresentingIllness() {
  return (
    <>
      {/* History of Presenting Illness Header */}
      <div className="bg-white rounded-xl border border-gray-200 px-8 py-6 mb-6 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-2xl font-semibold mb-1">
            <span className="text-xl">📄</span> History of Presenting Illness
          </div>
          <div className="text-gray-500 text-sm">Detailed history of presenting illness</div>
        </div>
        <div className="flex gap-3">
          <button className="border border-gray-300 rounded-lg px-6 py-2 text-sm font-medium flex items-center gap-2">
            <span className="text-lg">💾</span> Save Draft
          </button>
          <button className="bg-teal-600 text-white rounded-lg px-6 py-2 text-sm font-semibold flex items-center gap-2">
            <span className="text-lg">✈️</span> Submit Case
          </button>
        </div>
      </div>
      {/* Form Card */}
      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8 max-w-4xl">
        <div className="mb-6">
          <label className="block text-sm font-bold mb-1">Detailed History <span className="text-red-500">*</span></label>
          <textarea 
            className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 min-h-[200px]" 
            placeholder="Provide a detailed chronological account of the patient's illness from onset to presentation..."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-bold mb-1">Onset</label>
            <select className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2">
              <option value="">Select onset</option>
              <option value="sudden">Sudden</option>
              <option value="gradual">Gradual</option>
              <option value="insidious">Insidious</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Progression</label>
            <select className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2">
              <option value="">Select progression</option>
              <option value="improving">Improving</option>
              <option value="worsening">Worsening</option>
              <option value="stable">Stable</option>
              <option value="fluctuating">Fluctuating</option>
            </select>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-1">Associated Symptoms</label>
          <textarea 
            className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 min-h-[100px]" 
            placeholder="List any associated symptoms..."
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-1">Aggravating Factors</label>
          <textarea 
            className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 min-h-[80px]" 
            placeholder="What makes the symptoms worse?"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-1">Relieving Factors</label>
          <textarea 
            className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 min-h-[80px]" 
            placeholder="What makes the symptoms better?"
          />
        </div>
      </div>
    </>
  );
}
