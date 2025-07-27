import React from "react";

export default function PrimaryDiagnosis() {
  return (
    <>
      {/* Primary Diagnosis Header */}
      <div className="bg-white rounded-xl border border-gray-200 px-8 py-6 mb-6 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-2xl font-semibold mb-1">
            <span className="text-xl">🧠</span> Primary Diagnosis
          </div>
          <div className="text-gray-500 text-sm">AI-assisted diagnosis and assessment</div>
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
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Primary Diagnosis</h3>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-1">Diagnosis <span className="text-red-500">*</span></label>
            <input 
              className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2" 
              placeholder="Enter primary diagnosis"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-1">ICD-10 Code</label>
            <input 
              className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2" 
              placeholder="Enter ICD-10 code if known"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-1">Confidence Level</label>
            <select className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2">
              <option value="">Select confidence level</option>
              <option value="high">High (90-100%)</option>
              <option value="moderate">Moderate (70-89%)</option>
              <option value="low">Low (50-69%)</option>
              <option value="uncertain">Uncertain (&lt;50%)</option>
            </select>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Differential Diagnoses</h3>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-1">Alternative Diagnoses</label>
            <textarea 
              className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 min-h-[120px]" 
              placeholder="List other possible diagnoses to consider..."
            />
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Clinical Reasoning</h3>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-1">Rationale</label>
            <textarea 
              className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 min-h-[150px]" 
              placeholder="Explain the clinical reasoning behind this diagnosis..."
            />
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Recommended Actions</h3>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-1">Further Testing</label>
            <textarea 
              className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 min-h-[100px]" 
              placeholder="List any additional tests or investigations needed..."
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-1">Treatment Plan</label>
            <textarea 
              className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 min-h-[120px]" 
              placeholder="Outline the initial treatment plan..."
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-1">Follow-up</label>
            <textarea 
              className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 min-h-[80px]" 
              placeholder="Specify follow-up requirements and timeline..."
            />
          </div>
        </div>
      </div>
    </>
  );
}
