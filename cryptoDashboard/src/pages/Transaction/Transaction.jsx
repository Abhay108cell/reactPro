import React from 'react'
import { Tabs, TabList, TabPanels, Tab, Tag, TabPanel } from '@chakra-ui/react'
import DashboardLayout from '../../components/DashboardLayout'
import {
  Stack,
  Text,
  Icon,
  Flex,
  Grid,
  Divider,
  Button,
  Card
} from "@chakra-ui/react";
import { TiDownload } from 'react-icons/ti';
import TransactionTable from './component/TransactionTable';

const TransactionPage = () => {
  const tabs = [
    {
      name : "All",
      count: 349
    },
    {
      name : "Deposit",
      count: 114
    },
    {
      name : "Withdraw",
      count: 55
    },
    {
      name : "Trade",
      count: 92

    },

  ]
  return (
    <DashboardLayout>
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={TiDownload}/>}>Export CSV</Button>
      </Flex>
      <Card>
      <Tabs>
  <TabList pt="4">
    {tabs.map((tab) => (
      <Tab key={tab.name} display="flex" gap="2">
        {tab.name}
        <Tag colorScheme='gray' borderRadius="full">{tab.count}</Tag>
      </Tab>
    ))}
  </TabList>

  <TabPanels>
    <TabPanel>
     <TransactionTable/>
    </TabPanel>
    <TabPanel>
    <TransactionTable/>    </TabPanel>
    <TabPanel>
    <TransactionTable/>
    </TabPanel>
    <TabPanel>
    <TransactionTable/>
    </TabPanel>
  </TabPanels>
</Tabs>
    </Card>
    </DashboardLayout>
  )
}

export default TransactionPage
