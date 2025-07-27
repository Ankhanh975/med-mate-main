import React from "react";

export default function PhysicalExamination() {
  return (
    <>
      {/* Physical Examination Header */}
      <div className="bg-white rounded-xl border border-gray-200 px-8 py-6 mb-6 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-2xl font-semibold mb-1">
            <span className="text-xl">🩺</span> Physical Examination
          </div>
          <div className="text-gray-500 text-sm">Vital signs and systematic physical examination</div>
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
          <h3 className="text-lg font-semibold mb-4">Vital Signs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold mb-1">Blood Pressure <span className="text-red-500">*</span></label>
              <input 
                className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2" 
                placeholder="e.g., 120/80 mmHg"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Heart Rate <span className="text-red-500">*</span></label>
              <input 
                className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2" 
                placeholder="e.g., 72 bpm"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Temperature <span className="text-red-500">*</span></label>
              <input 
                className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2" 
                placeholder="e.g., 98.6°F or 37°C"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Respiratory Rate</label>
              <input 
                className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2" 
                placeholder="e.g., 16 breaths/min"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Oxygen Saturation</label>
              <input 
                className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2" 
                placeholder="e.g., 98% on room air"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Weight</label>
              <input 
                className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2" 
                placeholder="e.g., 70 kg or 154 lbs"
              />
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">General Appearance</h3>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-1">Overall Appearance</label>
            <textarea 
              className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 min-h-[80px]" 
              placeholder="Describe patient's general appearance, distress level, alertness..."
            />
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">System Examination</h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-1">Head, Eyes, Ears, Nose, Throat (HEENT)</label>
              <textarea 
                className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 min-h-[80px]" 
                placeholder="Describe HEENT examination findings..."
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Cardiovascular</label>
              <textarea 
                className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 min-h-[80px]" 
                placeholder="Describe heart sounds, rhythm, murmurs, peripheral pulses..."
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Respiratory</label>
              <textarea 
                className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 min-h-[80px]" 
                placeholder="Describe breath sounds, chest expansion, percussion..."
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Abdominal</label>
              <textarea 
                className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 min-h-[80px]" 
                placeholder="Describe inspection, palpation, percussion, auscultation findings..."
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Neurological</label>
              <textarea 
                className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 min-h-[80px]" 
                placeholder="Describe mental status, cranial nerves, motor, sensory, reflexes..."
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Musculoskeletal</label>
              <textarea 
                className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 min-h-[80px]" 
                placeholder="Describe joint examination, range of motion, deformities..."
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Skin</label>
              <textarea 
                className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 min-h-[80px]" 
                placeholder="Describe skin color, texture, lesions, rashes..."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
