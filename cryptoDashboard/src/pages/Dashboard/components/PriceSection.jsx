import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'

const PriceSection = () => {
  return (
    <CustomCard>
       <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balance</Text>
          </HStack >
          <HStack spacing={5}
           align={{
            base: 'flex-start',
            sm: 'center',
          }}
          flexDir={{
            base: 'column',
            sm: "row"
          }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="medium">22.39401000 </Text>
              <Tag colorScheme="gray">BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle="h2" fontWeight="medium">1300.00 </Text>
              <Tag colorScheme="gray">INR</Tag>
            </HStack>
          </HStack>
        </Stack>
    </CustomCard>
  )
}

export default PriceSection