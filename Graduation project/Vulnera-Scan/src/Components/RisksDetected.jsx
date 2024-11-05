import React from 'react'

const RisksDetected = () => {
    const riskLevels = [
        { label: 'Critical', color: 'bg-purple-400', count: 0 },
        { label: 'High', color: 'bg-red-400', count: 0 },
        { label: 'Medium', color: 'bg-orange-400', count: 0 },
        { label: 'Low', color: 'bg-yellow-400', count: 0 },
        { label: 'Accepted', color: 'bg-green-400', count: 0 },
        { label: 'Closed', color: 'bg-gray-300', count: 0 },
    ];
return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
      {riskLevels.map((risk) => (
        <div className={`${risk.color} text-white text-center py-8 rounded-lg`} key={risk.label}>
          <div>{risk.label}</div>
          <div className="text-4xl font-bold">{risk.count}</div>
        </div>
      ))}
    </div>

)
}

export default RisksDetected
