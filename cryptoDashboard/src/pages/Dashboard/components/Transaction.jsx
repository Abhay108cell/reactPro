import React, { Fragment } from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import {
  Stack,
  Text,
  Icon,
  Flex,
  Grid,
  Divider,
  Button,
} from "@chakra-ui/react";
import { FaBtc } from "react-icons/fa6";
import { HiCurrencyDollar } from "react-icons/hi";

const Transaction = () => {
  const transaction = [
    {
      id: 1,
      icon: HiCurrencyDollar,
      text: "Dollar Deposit",
      amount: "+$81,1000",
      date: "2022-01-01 7:06 PM",
    },
    {
      id: 2,
      icon: FaBtc,
      text: "BTC Sell",
      amount: "-$8110.20",
      date: "2022-01-01 8:06 PM",
    },
    {
      id: 3,
      icon: HiCurrencyDollar,
      text: "Dollar Deposit",
      amount: "+$95,5000",
      date: "2022-01-01 11:06 PM",
    },
  ];

  return (
    <CustomCard h="full">
      <Text mb="6" fontSize="sm" color="black.80">
        Recent Transaction
      </Text>
      <Stack spacing={4} >
        {transaction.map((transaction, i) => (
          <Fragment key={transaction.id}>
            {i   !== 0 && <Divider  />}
            <Flex gap="4">
              <Grid
                bg="black.5"
                boxSize={10}
                borderRadius="full"
                placeItems="center"
              >
                <Icon as={transaction.icon} />
              </Grid>
              <Flex justify="space-between" w="full">
                <Stack spacing={0}>
                  <Text textStyle="h6">{transaction.text}</Text>
                  <Text fontSize="sm" color="black.40">
                    {transaction.date}
                  </Text>
                </Stack>
                <Text textStyle="h6">{transaction.amount}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button w="full" mt="6" colorScheme="gray" >View All</Button>
    </CustomCard>
  );
};

export default Transaction;
