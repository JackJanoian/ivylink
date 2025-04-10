'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EssayVersions() {
  const router = useRouter();
  const [baseEssay, setBaseEssay] = useState("This is the base essay.");
  const [selectedVersion, setSelectedVersion] = useState("Base Essay");
  const [essayData, setEssayData] = useState({ "Base Essay": { content: "This is the base essay. It needs to be improved to fit specific college requirements and expectations. The essay should highlight key strengths and experiences relevant to each institution.", feedback: [] }, "University X": { content: "This is the essay tailored for University X. It emphasizes research experience and academic achievements, aligning with the university's focus on innovation and scholarly work. The language is formal and highlights intellectual curiosity.", feedback: [{ line: 1, feedback: "The introduction could more directly state your interest in research.", suggestion: "Consider adding a sentence about your passion for academic inquiry." }, { line: 3, feedback: "While your research experience is impressive, try to connect it more explicitly to the university's specific programs or faculty.", suggestion: "Mention specific professors or research areas at University X that align with your interests." }] }, "College Y": { content: "This version is tailored for College Y, a liberal arts college known for its strong sense of community and interdisciplinary approach. It includes anecdotes showcasing teamwork, leadership, and a broad range of interests, using a more personal and engaging tone.", feedback: [{ line: 2, feedback: "The transition between your experiences could be smoother.", suggestion: "Use transitional phrases to connect different anecdotes and show a cohesive narrative." }, { line 4, feedback: "The conclusion could be strengthened by reiterating your fit within the college's community.", suggestion: "Consider adding a sentence about how you envision contributing to the College Y campus culture." }] }, "Tech Institute Z": { content: "This essay is crafted for Tech Institute Z, focusing on technical skills, problem-solving abilities, and a passion for technology. It details specific projects and their technical challenges, using precise and technical language to demonstrate expertise.", feedback: [{ line: 1, feedback: "Consider starting with a concise statement of your technical expertise or a key project.", suggestion: "Begin with a brief overview of your most significant technical achievement to grab the reader's attention." }, { line: 5, feedback: "While your technical skills are evident, try to show how you approach problem-solving rather than just stating the solution.", suggestion: "Include a brief description of your thought process or any challenges you overcame during the project." }] } });

  const handleGoBack = () => {
    router.push('/dashboard');
  };

  const handleVersionChange = (event) => {
    const version = event.target.value;
    setSelectedVersion(version);
  };

  const currentEssay = essayData[selectedVersion];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Essay Versions</h1>

      <div className="mb-4 flex items-center">
        <label htmlFor="version-select" className="mr-2">Select Version:</label>
        <select
          id="version-select"
          value={selectedVersion}
          onChange={handleVersionChange}
          className="border border-gray-300 rounded p-2"
        >
          {Object.keys(essayData).map((version) => (
            <option key={version} value={version}>{version}</option>
          ))}
        </select>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">{selectedVersion}</h2>
        {selectedVersion === "Base Essay" ? (
          <textarea value={baseEssay} readOnly className="w-full h-64 border rounded p-2" />
        ) : (
          <textarea value={currentEssay.content} readOnly className="w-full h-64 border rounded p-2" />
        )}
        {currentEssay.feedback.length > 0 && (
          <div className="mt-4">
            <h3 className="font-semibold">Feedback:</h3>
            <ul>
              {currentEssay.feedback.map((fb, index) => (
                <li key={index} className="mb-2 p-2 bg-gray-100 rounded">
                  <span className="font-medium">Line {fb.line}:</span> {fb.feedback}
                  {fb.suggestion && <p className="text-sm text-gray-700 mt-1">Suggestion: {fb.suggestion}</p>}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleGoBack}
      >
        Go Back to Dashboard
      </button>
    </div>
  );
}