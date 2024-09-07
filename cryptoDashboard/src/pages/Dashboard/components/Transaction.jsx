import React from 'react'
import { CustomCard} from '../../../chakra/CustomCard'
import {
  Stack,
  HStack,
  Text,
  Button,
  Icon,
  Flex,
  Image,
} from "@chakra-ui/react";

const Transaction = () => {

  const transaction =[
    {
      id: 1,
      icon: "",
      text: "INR Deposit",
      amount: "+$81,1000",
      date: "2022-01-01 7:06 PM",
      },
    {
      id: 2,
      icon: "",
      text: "BTC Sell",
      amount: "-$8110.20",
      date: "2022-01-01 8:06 PM",
      },
    {
      id: 3,
      icon: "",
      text: "INR Deposit",
      amount: "+$95,5000",
      date: "2022-01-01 11:06 PM",
      },
  ]

  return (
    <CustomCard>
      <Text fontSize="sm" color="black.80">Recent Transaction</Text>
      <Stack direction="column" spacing={4}>
        {transaction.map((transaction) => (
          <Flex key={transaction.id}>

          </Flex>
        ))}
      </Stack>
    </CustomCard>
  )
}

export default Transaction