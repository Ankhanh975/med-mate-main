import React from "react";

export default function ChiefComplaint() {
  return (
    <>
      {/* Chief Complaint Header */}
      <div className="bg-white rounded-xl border border-gray-200 px-8 py-6 mb-6 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-2xl font-semibold mb-1">
            <span className="text-xl">💬</span> Chief Complaint
          </div>
          <div className="text-gray-500 text-sm">Primary reason for the patient's visit</div>
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
          <label className="block text-sm font-bold mb-1">Chief Complaint <span className="text-red-500">*</span></label>
          <textarea 
            className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 min-h-[120px]" 
            placeholder="Describe the primary reason for the patient's visit in their own words..."
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-1">Duration</label>
          <input 
            className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2" 
            placeholder="How long has this been going on? (e.g., 3 days, 2 weeks)"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-1">Severity (1-10)</label>
          <select className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2">
            <option value="">Select severity</option>
            <option value="1">1 - Minimal</option>
            <option value="2">2 - Mild</option>
            <option value="3">3 - Mild-Moderate</option>
            <option value="4">4 - Moderate</option>
            <option value="5">5 - Moderate</option>
            <option value="6">6 - Moderate-Severe</option>
            <option value="7">7 - Severe</option>
            <option value="8">8 - Very Severe</option>
            <option value="9">9 - Extremely Severe</option>
            <option value="10">10 - Worst Possible</option>
          </select>
        </div>
      </div>
    </>
  );
}
