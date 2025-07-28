"use client";
import React, { useState } from "react";

export default function CaseFeedback() {
  const [selectedCase, setSelectedCase] = useState(null);

  const submittedCases = [
    {
      id: 1,
      title: "Acute Myocardial Infarction - 58 y/o Male",
      date: "12/8/2023",
      status: "REVIEWED",
      score: 87,
      maxScore: 100,
      statusColor: "text-green-600",
      statusBg: "bg-green-100"
    },
    {
      id: 2,
      title: "Community-Acquired Pneumonia - 74 y/o Female",
      date: "11/3/2023",
      status: "REVIEWED",
      score: 92,
      maxScore: 100,
      statusColor: "text-green-600",
      statusBg: "bg-green-100"
    },
    {
      id: 3,
      title: "Chest Pain Workup - 45 y/o Female",
      date: "1/12/2023",
      status: "NEEDS REVISION",
      score: 74,
      maxScore: 100,
      statusColor: "text-red-600",
      statusBg: "bg-red-100"
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar - Submitted Cases */}
      <aside className="w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-900 mb-1">Case Feedback</h1>
          <p className="text-sm text-gray-600">Review your submitted cases and instructor feedback</p>
        </div>

        {/* Cases List */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <div className="mb-4">
              <h2 className="text-sm font-semibold text-gray-700 mb-3">Submitted Cases</h2>
              <p className="text-xs text-gray-500 mb-4">Click to view detailed feedback</p>
            </div>

            <div className="space-y-3">
              {submittedCases.map((case_) => (
                <div
                  key={case_.id}
                  onClick={() => setSelectedCase(case_)}
                  className={`p-4 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                    selectedCase?.id === case_.id
                      ? 'border-teal-200 bg-teal-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-900 leading-tight">
                      {case_.title}
                    </h3>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="text-xs text-gray-500 mb-3">{case_.date}</div>
                  
                  <div className="flex items-center justify-between">
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${case_.statusBg} ${case_.statusColor}`}>
                      {case_.status === 'REVIEWED' && (
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                      {case_.status === 'NEEDS REVISION' && (
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      )}
                      {case_.status}
                    </div>
                    <div className="text-sm font-semibold text-gray-900">
                      {case_.score}<span className="text-gray-500">/{case_.maxScore}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content - Feedback View */}
      <main className="flex-1 flex flex-col">
        {selectedCase ? (
          <div className="flex-1 p-8">
            {/* Case Header */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900 mb-2">{selectedCase.title}</h1>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>Submitted: {selectedCase.date}</span>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${selectedCase.statusBg} ${selectedCase.statusColor}`}>
                      {selectedCase.status}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900">{selectedCase.score}</div>
                  <div className="text-sm text-gray-500">out of {selectedCase.maxScore}</div>
                </div>
              </div>
            </div>

            {/* Feedback Sections */}
            <div className="space-y-6">
              {/* Overall Performance */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Overall Performance</h2>
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4">
                    Excellent work on this case presentation. Your clinical reasoning was sound and you demonstrated 
                    a thorough understanding of acute myocardial infarction management.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-green-800 mb-2">Strengths</h3>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Comprehensive history taking</li>
                      <li>• Appropriate diagnostic workup</li>
                      <li>• Evidence-based treatment plan</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section-by-Section Feedback */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Section-by-Section Feedback</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-400 pl-4">
                    <h3 className="font-medium text-gray-900">Demographics & History</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Well documented patient information with appropriate risk factor identification.
                    </p>
                    <div className="text-sm font-medium text-green-600 mt-2">Score: 18/20</div>
                  </div>
                  
                  <div className="border-l-4 border-green-400 pl-4">
                    <h3 className="font-medium text-gray-900">Physical Examination</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Thorough cardiovascular examination with appropriate findings documented.
                    </p>
                    <div className="text-sm font-medium text-green-600 mt-2">Score: 25/25</div>
                  </div>
                  
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h3 className="font-medium text-gray-900">Diagnostic Workup</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Good selection of diagnostic tests. Consider adding troponin timing details.
                    </p>
                    <div className="text-sm font-medium text-yellow-600 mt-2">Score: 22/25</div>
                  </div>
                  
                  <div className="border-l-4 border-green-400 pl-4">
                    <h3 className="font-medium text-gray-900">Treatment Plan</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Excellent evidence-based approach with appropriate medications and interventions.
                    </p>
                    <div className="text-sm font-medium text-green-600 mt-2">Score: 22/25</div>
                  </div>
                </div>
              </div>

              {/* Instructor Comments */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Instructor Comments</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-semibold text-sm">DR</span>
                    </div>
                    <div>
                      <div className="font-medium text-blue-900 mb-1">Dr. Sarah Johnson</div>
                      <p className="text-sm text-blue-800">
                        "This is an exemplary case presentation that demonstrates strong clinical reasoning 
                        and comprehensive patient care. Your attention to detail in the history and physical 
                        examination was particularly impressive. For future cases, consider discussing 
                        alternative diagnostic approaches when initial tests are inconclusive."
                      </p>
                      <div className="text-xs text-blue-600 mt-2">Posted 2 days ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Empty state when no case is selected
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Select a case to view feedback</h2>
              <p className="text-gray-600">Choose a case from the list to see detailed section-by-section feedback</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}