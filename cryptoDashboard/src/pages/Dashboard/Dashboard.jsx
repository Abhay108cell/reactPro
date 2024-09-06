import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import PortfolioSection from './components/PortfolioSection'
import PriceSection from './components/PriceSection'
import { Grid, GridItem } from '@chakra-ui/react'

const Dashboard = ({}) => {
  return <DashboardLayout title="Dashboard">
      <Grid
      gridTemplateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",

      }}
      >
        <GridItem>
      <PortfolioSection/>
        </GridItem>
        <GridItem>
        <PriceSection/>
        </GridItem>
      </Grid>
  </DashboardLayout>
}

export default Dashboard