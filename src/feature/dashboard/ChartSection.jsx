import React from 'react'
import RevenueChart from './RevenueChart'
import SalesChart from './SalesChart'

const ChartSection = () => {
  return (
    <>
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        <div className='xl:col-span-2'>
            <RevenueChart/>
        </div>
        <div className='space-y-2'>
          <SalesChart/>
        </div>
    </div>
    </>
  )
}

export default ChartSection