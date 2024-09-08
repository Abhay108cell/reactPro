import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Tag, Text } from '@chakra-ui/react'

const InfoCard = ({imgURL, text, tagText, inverted}) => {
  return (
    <CustomCard bgImg={imgURL} bgSize="cover" bgRepeat="no-repeat"
    bg={inverted ? "p.purple" : "white" }
    >

      <Tag 
      color={inverted ? "p.purple" : "white"}
      bg={inverted ? "white" : "p.purple"}
      borderRadius="full"
      >{tagText}</Tag>
      <Text mt="4" fontWeight="medium" textStyle="h5"
        color={inverted ? "white" : "black.80"}
       
       >
        {text}
      </Text>
    </CustomCard>

  )
}

export default InfoCard