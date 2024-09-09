import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
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

const TransactionPage = () => {
  return (
    <DashboardLayout>
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={TiDownload}/>}>Export CSV</Button>
      </Flex>
      <Card>
      <Tabs>
  <TabList>
    <Tab>One</Tab>
    <Tab>Two</Tab>
    <Tab>Three</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
    </Card>
    </DashboardLayout>
  )
}

export default TransactionPage
