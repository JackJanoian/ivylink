import React from 'react';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Essay Upload */}
      <label htmlFor="essay">Upload or Paste Your Essay:</label>
      <textarea id="essay" name="essay" rows="5" cols="50"></textarea>

      {/* College Selection */}
      <label htmlFor="colleges">Select Colleges:</label>
      <select id="colleges" name="colleges" multiple>
        {/* Add college options here dynamically */}
        <option value="college1">College 1</option>
        <option value="college2">College 2</option>
      </select>
    </div>
  );
}