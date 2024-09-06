import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import {
  Stack,
  HStack,
  Text,
  Button,
  Icon,
  Flex,
  Image,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import { Tabs, TabList, TabPanels, Tab, TabPanel, } from "@chakra-ui/react";

import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";

const PriceSection = () => {
  const timeStamps = [
    "6:55 PM",
    "7:55 PM",
    "8:55 PM",
    "9:55 PM",
    "10:55 PM",
    "11:55 PM",
  ];

  return (
    <CustomCard>
      <Flex justify="space-between" align="start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balance</Text>
          </HStack>
          <HStack
            spacing={5}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                22.39401000{" "}
              </Text>
              <HStack fontWeight="medium" color="green.500">
                <Icon as={BsArrowUpRight} />
                <Text fontSize="sm" fontWeight="medium">
                  22%{" "}
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={FaCirclePlus} />}>Buy</Button>
          <Button leftIcon={<Icon as={FaCircleMinus} />}>Sell</Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded" colorScheme="green">
        <Flex justify="end" >
          <TabList bg="black.5" p="3px">
            <Tab fontSize="sm" px="6px" borderRadius="4">Tab 2</Tab>
            <Tab fontSize="sm" >Tab 1</Tab>
          </TabList>
        </Flex>

        <TabPanels>
          <TabPanel>
            <Image w="100%" src="/Vector1.png" mt={"3rem"} />
            {/* <Image src="/Vector.png"/> */}
            <HStack justify={"space-between"}>
              {timeStamps.map((timeStamps) => (
                <Text key={timeStamps} fontSize="sm" color="black.80">
                  {timeStamps}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
