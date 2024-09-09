import React from 'react'
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

const TransactionPage = () => {
  return (
    <DashboardLayout>
      <Flex justify="end" mt="6">
        <Button>Export CSV</Button>
      </Flex>
      <Card>
      transaction page
    </Card>
    </DashboardLayout>
  )
}

export default TransactionPage
