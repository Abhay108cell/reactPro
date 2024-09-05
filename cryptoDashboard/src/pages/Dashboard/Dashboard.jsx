import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import PortfolioSection from './components/PortfolioSection'
import PriceSection from './components/PriceSection'

const Dashboard = ({}) => {
  return <DashboardLayout title="Dashboard">
      <PortfolioSection/>
      <PriceSection/>
  </DashboardLayout>
}

export default Dashboard