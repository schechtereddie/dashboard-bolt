import React from 'react';

export default function Chart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Revenue Overview</h3>
        <select className="text-sm border rounded-md px-2 py-1">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select>
      </div>
      <div className="h-64 flex items-center justify-center text-gray-500">
        Chart placeholder - Install your preferred chart library
      </div>
    </div>
  );
}