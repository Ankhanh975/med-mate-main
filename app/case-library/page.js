"use client";
import React, { useState } from "react";

export default function CaseLibrary() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");

  const cases = [
    {
      id: 1,
      title: "Acute Myocardial Infarction in 55-year-old Male",
      specialty: "Intermediate",
      specialtyColor: "bg-orange-100 text-orange-800",
      description: "A comprehensive case study of STEMI presentation, diagnosis, and management in the emergency department.",
      patientInfo: "55-year-old male presents to ED with sudden onset severe chest pain. High-risk cardiac...",
      duration: "45 min",
      participants: 2347,
      rating: 4.8,
      author: "Dr. Sarah Johnson",
      date: "1/15/2023",
      learningObjectives: [
        "Recognize classic MI symptoms and ECG changes",
        "Understand door-to-balloon time protocols",
        "+ 1 more..."
      ],
      tags: ["ECG", "Chest Pain", "Emergency", "+1"]
    },
    {
      id: 2,
      title: "Community-Acquired Pneumonia Management",
      specialty: "Cardiology",
      specialtyColor: "bg-blue-100 text-blue-800",
      description: "Learn to diagnose and treat pneumonia using evidence-based guidelines and severity scoring.",
      patientInfo: "72-year-old female with fever, cough, and shortness of breath for 3 days...",
      duration: "30 min",
      participants: 1682,
      rating: 4.6,
      author: "Dr. Michael Chen",
      date: "1/10/2023",
      learningObjectives: [
        "Apply CURB-65 and PSI scoring systems",
        "Choose appropriate antibiotic therapy",
        "+ 1 more..."
      ],
      tags: ["Pneumonia", "Antibiotics", "CURB-65", "+1"]
    },
    {
      id: 3,
      title: "Diabetic Ketoacidosis Emergency Management",
      specialty: "Advanced",
      specialtyColor: "bg-red-100 text-red-800",
      description: "Critical care management of severe DKA with fluid resuscitation and insulin protocols.",
      patientInfo: "24-year-old Type 1 diabetic presents with altered mental status, severe dehydration...",
      duration: "60 min",
      participants: 1854,
      rating: 4.9,
      author: "Dr. Lisa Rodriguez",
      date: "1/8/2023",
      learningObjectives: [
        "Recognize DKA complications",
        "Implement fluid and electrolyte management",
        "+ 1 more..."
      ],
      tags: ["DKA", "Critical Care", "Diabetes", "+1"]
    },
    {
      id: 4,
      title: "Stroke Workup and Thrombolysis Decision",
      specialty: "Advanced",
      specialtyColor: "bg-red-100 text-red-800",
      description: "Time-critical evaluation of acute stroke patient and decision-making for thrombolytic therapy.",
      patientInfo: "68-year-old presents with sudden onset left-sided weakness and speech difficulties...",
      duration: "50 min",
      participants: 1923,
      rating: 4.7,
      author: "Dr. James Wilson",
      date: "1/5/2023",
      learningObjectives: [
        "Apply NIHSS scoring system",
        "Evaluate thrombolysis eligibility",
        "+ 1 more..."
      ],
      tags: ["Stroke", "Neurology", "Thrombolysis", "+1"]
    },
    {
      id: 5,
      title: "Pediatric Asthma Exacerbation",
      specialty: "Intermediate",
      specialtyColor: "bg-orange-100 text-orange-800",
      description: "Management of acute asthma attack in a school-age child with appropriate medication dosing.",
      patientInfo: "8-year-old child presents with severe wheezing and respiratory distress...",
      duration: "35 min",
      participants: 1456,
      rating: 4.5,
      author: "Dr. Emily Davis",
      date: "1/3/2023",
      learningObjectives: [
        "Assess severity of asthma exacerbation",
        "Calculate pediatric medication doses",
        "+ 1 more..."
      ],
      tags: ["Pediatrics", "Asthma", "Respiratory", "+1"]
    },
    {
      id: 6,
      title: "Hypertensive Emergency vs Urgency",
      specialty: "Intermediate",
      specialtyColor: "bg-orange-100 text-orange-800",
      description: "Differentiate between hypertensive emergency and urgency with appropriate treatment approaches.",
      patientInfo: "52-year-old presents with severe hypertension and headache...",
      duration: "40 min",
      participants: 1678,
      rating: 4.4,
      author: "Dr. Robert Kim",
      date: "12/28/2022",
      learningObjectives: [
        "Distinguish emergency vs urgency",
        "Select appropriate antihypertensive agents",
        "+ 1 more..."
      ],
      tags: ["Hypertension", "Emergency", "Cardiology", "+1"]
    }
  ];

  const specialties = ["All Specialties", "Intermediate", "Cardiology", "Advanced", "Beginner", "Pulmonology", "Endocrinology", "Neurology", "Pediatrics", "Internal Medicine"];
  const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

  const filteredCases = cases.filter(case_ => {
    const matchesSearch = case_.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         case_.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         case_.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesSpecialty = selectedSpecialty === "All Specialties" || case_.specialty === selectedSpecialty;
    const matchesLevel = selectedLevel === "All Levels" || case_.specialty === selectedLevel;
    return matchesSearch && matchesSpecialty && matchesLevel;
  });

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-400">★</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400">☆</span>);
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Case Library</h1>
            <p className="text-gray-600">Explore anonymized clinical cases for learning and practice</p>
          </div>
          
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search cases by title, tags, or specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            
            <div className="flex gap-3">
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              >
                {specialties.map(specialty => (
                  <option key={specialty} value={specialty}>{specialty}</option>
                ))}
              </select>
              
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              >
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredCases.length} of {cases.length} cases
          </div>
        </div>
      </div>

      {/* Cases Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map((case_) => (
            <div key={case_.id} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${case_.specialtyColor}`}>
                    {case_.specialty}
                  </span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                  {case_.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {case_.description}
                </p>
                
                <p className="text-xs text-gray-500 mb-4 line-clamp-2">
                  {case_.patientInfo}
                </p>
              </div>
              
              {/* Learning Objectives */}
              <div className="px-6 pb-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Learning Objectives:</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  {case_.learningObjectives.map((objective, index) => (
                    <li key={index}>• {objective}</li>
                  ))}
                </ul>
              </div>
              
              {/* Tags */}
              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-1">
                  {case_.tags.map((tag, index) => (
                    <span key={index} className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Card Footer */}
              <div className="px-6 py-4 border-t border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {renderStars(case_.rating)}
                    <span className="text-sm font-medium text-gray-900 ml-1">{case_.rating}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    ⏱ {case_.duration} • 👥 {case_.participants.toLocaleString()}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs text-gray-500">
                    📝 {case_.author} • 📅 {case_.date}
                  </div>
                </div>
                
                <button className="w-full bg-teal-600 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Study Case
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredCases.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No cases found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}