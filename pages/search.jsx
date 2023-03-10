import Property from "@/components/Property";
import SearchFilters from "@/components/SearchFilters";
import { Box, Flex, Icon, Text, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BsFilter } from "react-icons/bs";
import noresult from '@/assets/noresult.svg'
import Image from "next/image";
import { baseUrl, fetchApi } from "@/utils/fetchApi";
import { colors } from "@/styles/theme";

const Search = ({ properties, open }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const color = colors();
  const router = useRouter();

  return (
    <Box>
      <Flex
        cursor={"pointer"}
        bg={color.gray[100]}
        p="2"
        fontWeight={"black"}
        fontSize="lg"
        justifyContent={"center"}
        alignItems="center"
        onClick={()=>setSearchFilters(prev=>!prev)}
      >
        <Text>Search Property By Filters</Text>
        <Icon paddingLeft={"2"} w="7" as={BsFilter}></Icon>
      </Flex>
      {searchFilters && <SearchFilters open={open}/>}
      <Text fontSize={'2xl'} p='4' fontWeight={'bold'}>
        Properties {router.query.purpose}
      </Text>
      <Flex flexWrap={'wrap'} justifyContent='center'>
        {properties?.map(prop=><Property key={prop.id} property={prop}/>)}
      </Flex>
      {properties?.length === 0 && (
        <Flex justifyContent='center' alignItems='center' flexDir='column' marginTop='5' marginBottom='5'>
          <Image alt='no results' src={noresult} />
          <Text fontSize='xl' marginTop='3'>No Result Found.</Text>
        </Flex>
      )}
    </Box>
  );
};

export default Search;


export async function getServerSideProps({ query }){
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'yearly';
  const minPrice = query.minPrice || '0';
  const maxPrice = query.maxPrice || '1000000';
  const roomsMin = query.roomsMin || '0';
  const bathsMin = query.bathsMin || '0';
  const sort = query.sort || 'price-desc';
  const areaMax = query.areaMax || '35000';
  const locationExternalIDs = query.locationExternalIDs || '5002';
  const categoryExternalID = query.categoryExternalID || '4';

  const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);
  return {
    props: {
      properties: data?.hits
    }
  };
}