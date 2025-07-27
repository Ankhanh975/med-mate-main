import React from "react";

export default function RecordNewCase() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-80 bg-white border-r border-gray-200 flex flex-col p-6 pt-8 min-h-screen">
        <div className="mb-8">
          <div className="font-semibold text-lg">Record New Case</div>
          <div className="text-sm text-gray-500">Case Documentation</div>
        </div>
        <nav className="flex-1 overflow-y-auto pr-2">
          <div className="mb-6">
            <div className="font-bold text-gray-700 text-sm mb-2">Patient Information</div>
            <button className="w-full flex items-center gap-3 px-3 py-3 rounded-lg bg-teal-600 text-white mb-1">
              <span className="text-xl">👤</span>
              <div className="flex flex-col items-start">
                <span className="font-semibold">Demographics</span>
                <span className="text-xs text-teal-100">Patient identification and basic information</span>
              </div>
            </button>
          </div>
          <div className="mb-6">
            <div className="font-bold text-gray-700 text-sm mb-2">History & Background</div>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-orange-100 mb-1">
              <span className="text-xl">💬</span>
              <div className="flex flex-col items-start">
                <span className="font-semibold whitespace-nowrap">Chief Complaint</span>
                <span className="text-xs text-gray-500">Primary reason for the patient's visit</span>
              </div>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-orange-100 mb-1">
              <span className="text-xl">📄</span>
              <div className="flex flex-col items-start">
                <span className="font-semibold whitespace-nowrap">History of Presenting Illness</span>
                <span className="text-xs text-gray-500">Detailed history of presenting illness</span>
              </div>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-orange-100 mb-1">
              <span className="text-xl">📚</span>
              <div className="flex flex-col items-start">
                <span className="font-semibold whitespace-nowrap">Medical History</span>
                <span className="text-xs text-gray-500">Past medical, surgical, family, and social history</span>
              </div>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-orange-100 mb-1">
              <span className="text-xl">💊</span>
              <div className="flex flex-col items-start">
                <span className="font-semibold whitespace-nowrap">Medications</span>
                <span className="text-xs text-gray-500">Current medications and allergies</span>
              </div>
            </button>
          </div>
          <div className="mb-6">
            <div className="font-bold text-gray-700 text-sm mb-2">Assessment & Diagnosis</div>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-orange-100 mb-1">
              <span className="text-xl">🩺</span>
              <div className="flex flex-col items-start">
                <span className="font-semibold whitespace-nowrap">Physical Examination</span>
                <span className="text-xs text-gray-500">Vital signs and systematic physical examination</span>
              </div>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-orange-100 mb-1">
              <span className="text-xl">🧠</span>
              <div className="flex flex-col items-start">
                <span className="font-semibold whitespace-nowrap">Primary Diagnosis</span>
                <span className="text-xs text-gray-500">AI</span>
              </div>
            </button>
          </div>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 flex flex-col px-12 py-8">
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
              <span className="text-lg">��</span> Save Draft
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
      </main>
      {/* Right Sidebar */}
      <aside className="w-96 bg-white border-l border-gray-200 flex flex-col p-6 pt-8 min-h-screen">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-lg font-semibold mb-1">
            <span className="text-xl">🤖</span> AI Clinical Assistant
          </div>
          <div className="text-sm text-gray-500">Real-time guidance & feedback</div>
        </div>
        <div className="mb-6">
          <div className="font-medium text-sm mb-1">Progress</div>
          <div className="w-full h-4 bg-gray-100 rounded-full mb-2">
            <div className="h-4 bg-teal-200 rounded-full" style={{ width: '0%' }}></div>
          </div>
          <div className="text-xs text-gray-500">0/10</div>
        </div>
        <div className="mb-6">
          <div className="font-medium text-sm mb-2 flex items-center gap-1">
            <span className="text-yellow-400">💡</span> Real-time Guidance
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-yellow-50 text-yellow-900 rounded px-3 py-2 text-xs">Complete patient name for proper identification</div>
            <div className="bg-yellow-50 text-yellow-900 rounded px-3 py-2 text-xs">Age helps with differential diagnosis considerations</div>
            <div className="bg-yellow-50 text-yellow-900 rounded px-3 py-2 text-xs">Gender influences disease prevalence and presentations</div>
          </div>
        </div>
        <div>
          <div className="font-medium text-sm mb-2">Quick Actions</div>
          <div className="flex flex-col gap-2">
            <button className="flex items-center gap-2 border border-gray-200 rounded px-3 py-2 text-sm hover:bg-gray-50">
              <span className="text-lg">💬</span> Ask AI Question
            </button>
            <button className="flex items-center gap-2 border border-gray-200 rounded px-3 py-2 text-sm hover:bg-gray-50">
              <span className="text-lg">🧮</span> Medical Calculators
            </button>
            <button className="flex items-center gap-2 border border-gray-200 rounded px-3 py-2 text-sm hover:bg-gray-50">
              <span className="text-lg">📖</span> Clinical Guidelines
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
} 