import React from "react";

export default function Medications() {
  return (
    <>
      {/* Medications Header */}
      <div className="bg-white rounded-xl border border-gray-200 px-8 py-6 mb-6 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-2xl font-semibold mb-1">
            <span className="text-xl">💊</span> Medications
          </div>
          <div className="text-gray-500 text-sm">Current medications and allergies</div>
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
          <h3 className="text-lg font-semibold mb-4">Current Medications</h3>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-1">Prescription Medications</label>
            <textarea 
              className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 min-h-[120px]" 
              placeholder="List all current prescription medications with dosages and frequency..."
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-1">Over-the-Counter Medications</label>
            <textarea 
              className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 min-h-[100px]" 
              placeholder="List any OTC medications, vitamins, supplements, herbal remedies..."
            />
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Allergies</h3>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-1">Drug Allergies</label>
            <textarea 
              className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 min-h-[100px]" 
              placeholder="List any known drug allergies and their reactions..."
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-1">Environmental Allergies</label>
            <textarea 
              className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 min-h-[80px]" 
              placeholder="List any environmental allergies (food, pollen, latex, etc.)..."
            />
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Medication History</h3>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-1">Recently Discontinued Medications</label>
            <textarea 
              className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 min-h-[80px]" 
              placeholder="List any medications recently stopped and reason for discontinuation..."
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-1">Medication Adherence</label>
            <select className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2">
              <option value="">Select adherence level</option>
              <option value="excellent">Excellent (takes as prescribed)</option>
              <option value="good">Good (occasionally misses doses)</option>
              <option value="fair">Fair (frequently misses doses)</option>
              <option value="poor">Poor (rarely takes as prescribed)</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
