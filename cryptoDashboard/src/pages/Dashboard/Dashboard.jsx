import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import PortfolioSection from './components/PortfolioSection'
import PriceSection from './components/PriceSection'
import { Grid, GridItem } from '@chakra-ui/react'
import Transaction from './components/Transaction'
import InfoCard from './components/InfoCard'

const Dashboard = ({}) => {
  return <DashboardLayout title="Dashboard">
      <Grid
      gridTemplateColumns={{
        base: "repeat(1, 1fr)",
        xl: "repeat(2, 1fr)",

      }}
      gap={6}
      >
        <GridItem colSpan={{
          base: 1,
          xl: 2,
        }}>
      <PortfolioSection/>
        </GridItem>
        <GridItem colSpan={1}>
        <PriceSection/>
        </GridItem>
        <GridItem colSpan={1}>
        <Transaction/>
        </GridItem>
        <GridItem colSpan={1}>
        <InfoCard
        imgURL="public\Loans.svg"
        text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
        tagText="Loan"
        inverted={false}
        />
        </GridItem>
        <GridItem colSpan={1}>
        <InfoCard
        imgURL="public\Visual.svg"
        text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
        tagText="Contact"
        inverted={true}
        />
        </GridItem>
      </Grid>
  </DashboardLayout>
}

export default Dashboard