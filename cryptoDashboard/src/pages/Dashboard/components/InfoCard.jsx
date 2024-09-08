import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Tag, Text } from '@chakra-ui/react'

const InfoCard = ({imgURL, text, tagText}) => {
  return (
    <CustomCard bgImg={imgURL} bgSize="cover" bgRepeat="no-repeat">

      <Tag bg="p.purple" color="white" borderRadius="full">{tagText}</Tag>
      <Text mt="4" fontWeight="medium" textStyle="h5">
        {text}
      </Text>
    </CustomCard>

  )
}

export default InfoCard