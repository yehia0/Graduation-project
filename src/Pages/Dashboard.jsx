import React from 'react'
import DashboardHeader from '../Components/DashboardHeader'
import RisksDetected from '../Components/RisksDetected'
import RecentScans from '../Components/RecentScans'
import RecentRisks from '../Components/RecentRisks'


const Dashboard = () => {
  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
      <DashboardHeader/>
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div className="text-xl md:text-2xl font-semibold">Risks detected</div>
        <div className="text-lg">Total: 0</div>
      </div>
      <RisksDetected/>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="text-xl md:text-2xl font-semibold">Recent Scans</div>
        <button className="text-blue-500 hover:underline text-sm md:text-base">See all scans &gt;</button>
      </div>
      <RecentScans/>
      <div className="flex flex-col md:flex-row justify-between items-center mt-6">
        <div className="text-xl md:text-2xl font-semibold">Recent Risks</div>
        <button className="text-blue-500 hover:underline text-sm md:text-base">See all risks &gt;</button>
      </div>
      <RecentRisks/>
    </div>

  )
}

export default Dashboard
