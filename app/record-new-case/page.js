"use client";
import React, { useState } from "react";
import Demographics from "./Demographics";
import ChiefComplaint from "./ChiefComplaint";
import HistoryOfPresentingIllness from "./HistoryOfPresentingIllness";
import MedicalHistory from "./MedicalHistory";
import Medications from "./Medications";
import PhysicalExamination from "./PhysicalExamination";
import PrimaryDiagnosis from "./PrimaryDiagnosis";

export default function RecordNewCase() {
  const [activeSection, setActiveSection] = useState('demographics');

  const sections = [
    {
      id: 'demographics',
      name: 'Demographics',
      icon: '👤',
      description: 'Patient identification and basic information',
      category: 'Patient Information',
      component: Demographics
    },
    {
      id: 'chief-complaint',
      name: 'Chief Complaint',
      icon: '💬',
      description: 'Primary reason for the patient\'s visit',
      category: 'History & Background',
      component: ChiefComplaint
    },
    {
      id: 'history-presenting-illness',
      name: 'History of Presenting Illness',
      icon: '📄',
      description: 'Detailed history of presenting illness',
      category: 'History & Background',
      component: HistoryOfPresentingIllness
    },
    {
      id: 'medical-history',
      name: 'Medical History',
      icon: '📚',
      description: 'Past medical, surgical, family, and social history',
      category: 'History & Background',
      component: MedicalHistory
    },
    {
      id: 'medications',
      name: 'Medications',
      icon: '💊',
      description: 'Current medications and allergies',
      category: 'History & Background',
      component: Medications
    },
    {
      id: 'physical-examination',
      name: 'Physical Examination',
      icon: '🩺',
      description: 'Vital signs and systematic physical examination',
      category: 'Assessment & Diagnosis',
      component: PhysicalExamination
    },
    {
      id: 'primary-diagnosis',
      name: 'Primary Diagnosis',
      icon: '🧠',
      description: 'AI-assisted diagnosis and assessment',
      category: 'Assessment & Diagnosis',
      component: PrimaryDiagnosis
    }
  ];

  const ActiveComponent = sections.find(section => section.id === activeSection)?.component || Demographics;

  const groupedSections = sections.reduce((acc, section) => {
    if (!acc[section.category]) {
      acc[section.category] = [];
    }
    acc[section.category].push(section);
    return acc;
  }, {});

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-80 bg-white border-r border-gray-200 flex flex-col p-6 pt-8 min-h-screen">
        <div className="mb-8">
          <div className="font-semibold text-lg">Record New Case</div>
          <div className="text-sm text-gray-500">Case Documentation</div>
        </div>
        <nav className="flex-1 overflow-y-auto pr-2">
          {Object.entries(groupedSections).map(([category, categorySections]) => (
            <div key={category} className="mb-6">
              <div className="font-bold text-gray-700 text-sm mb-2">{category}</div>
              {categorySections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg mb-1 transition-colors ${
                    activeSection === section.id
                      ? 'bg-teal-600 text-white'
                      : 'hover:bg-orange-100'
                  }`}
                >
                  <span className="text-xl">{section.icon}</span>
                  <div className="flex flex-col items-start">
                    <span className="font-semibold whitespace-nowrap">{section.name}</span>
                    <span className={`text-xs ${
                      activeSection === section.id
                        ? 'text-teal-100'
                        : 'text-gray-500'
                    }`}>
                      {section.description}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          ))}
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 flex flex-col px-12 py-8">
        <ActiveComponent />
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
          <div className="text-xs text-gray-500">0/7</div>
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