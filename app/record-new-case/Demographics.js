import React from "react";

export default function Demographics() {
  return (
    <>
      {/* Demographics Header */}
      <div className="bg-white rounded-xl border border-gray-200 px-8 py-6 mb-6 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-2xl font-semibold mb-1">
            <span className="text-xl">👤</span> Demographics
            <span className="ml-2 text-teal-500 text-xl align-middle">✔️</span>
          </div>
          <div className="text-gray-500 text-sm">Patient identification and basic information</div>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-sm font-bold mb-1">Patient Name <span className="text-red-500">*</span></label>
            <input className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2" placeholder="Enter patient name" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Age <span className="text-red-500">*</span></label>
            <input className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2" placeholder="Enter age" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Gender <span className="text-red-500">*</span></label>
            <select className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2">
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Room</label>
            <input className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2" placeholder="Enter room number" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Bed</label>
            <input className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2" placeholder="Enter bed number" />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-1">Address</label>
          <textarea className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 min-h-[100px]" placeholder="Enter patient address" />
        </div>
      </div>
    </>
  );
}
