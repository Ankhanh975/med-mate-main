import React from "react";

export default function MedicalHistory() {
  return (
    <>
      {/* Medical History Header */}
      <div className="bg-white rounded-xl border border-gray-200 px-8 py-6 mb-6 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-2xl font-semibold mb-1">
            <span className="text-xl">📚</span> Medical History
          </div>
          <div className="text-gray-500 text-sm">Past medical, surgical, family, and social history</div>
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
          <h3 className="text-lg font-semibold mb-4">Past Medical History</h3>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-1">Previous Diagnoses</label>
            <textarea 
              className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 min-h-[100px]" 
              placeholder="List any previous medical diagnoses, chronic conditions, hospitalizations..."
            />
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Surgical History</h3>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-1">Previous Surgeries</label>
            <textarea 
              className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 min-h-[100px]" 
              placeholder="List any previous surgeries with dates and complications if any..."
            />
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Family History</h3>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-1">Relevant Family History</label>
            <textarea 
              className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 min-h-[100px]" 
              placeholder="List any relevant family medical history (parents, siblings, grandparents)..."
            />
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Social History</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold mb-1">Smoking Status</label>
              <select className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2">
                <option value="">Select status</option>
                <option value="never">Never smoked</option>
                <option value="current">Current smoker</option>
                <option value="former">Former smoker</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Alcohol Use</label>
              <select className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2">
                <option value="">Select frequency</option>
                <option value="none">None</option>
                <option value="occasional">Occasional</option>
                <option value="moderate">Moderate</option>
                <option value="heavy">Heavy</option>
              </select>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-1">Occupation</label>
            <input 
              className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2" 
              placeholder="Enter patient's occupation"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-1">Other Social History</label>
            <textarea 
              className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 min-h-[80px]" 
              placeholder="Exercise habits, diet, recreational drug use, travel history, etc..."
            />
          </div>
        </div>
      </div>
    </>
  );
}
