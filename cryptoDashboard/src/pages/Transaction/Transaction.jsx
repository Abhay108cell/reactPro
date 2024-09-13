import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  HStack,
  Tag,
  TabPanel,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import {
  Stack,
  Text,
  Icon,
  Flex,
  Grid,
  Divider,
  Button,
  Card,
} from "@chakra-ui/react";
import { TiDownload } from "react-icons/ti";
import TransactionTable from "./component/TransactionTable";
import { IoSearch } from "react-icons/io5";

const TransactionPage = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 55,
    },
    {
      name: "Trade",
      count: 92,
    },
  ];
  return (
    <DashboardLayout title="Transaction">
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={TiDownload} />}>Export CSV</Button>
      </Flex>
      <Card borderRadius="1rem">
        <Tabs>
          <TabList pt="4" display="flex" w="full" justifyContent="space-between">
            <HStack>
              {tabs.map((tab) => (
                <Tab key={tab.name} display="flex" gap="2" pb="4">
                  {tab.name}
                  <Tag colorScheme="gray" borderRadius="full">
                    {tab.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>
            <InputGroup maxW="200px"  pr="6">
              <InputLeftElement pointerEvents="none">
                <Icon as={IoSearch} />
              </InputLeftElement>
              <Input type="tel" placeholder="search..." />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />{" "}
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default TransactionPage;
