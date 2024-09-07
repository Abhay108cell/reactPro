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
  return (
    <CustomCard>
      <Text fontSize="sm" color="black.80">Recent Transaction</Text>
    </CustomCard>
  )
}

export default Transaction