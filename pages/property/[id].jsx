import {FaBed, FaBath} from 'react-icons/fa'
import {BsGridFill} from 'react-icons/bs'
import {GoVerified} from 'react-icons/go'
import millify from "millify";
import { Box } from '@chakra-ui/react';
import { baseUrl, fetchApi } from '@/utils/fetchApi';
import ImageScrollbar from '@/components/ImageScrollbar'

const PropertyDetails = ({propertyDetails: {price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos}})=>(
  <Box maxWidth={"1000px"} margin='auto' p={'4'}>
    {photos && <ImageScrollbar data={photos}/>}
  </Box>
)

export default PropertyDetails;

export async function getStaticProps({params}){
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${params.id}`);
  return {
    props: {
      propertyDetails: data
    }
  }
}

export async function getStaticPaths(){
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);
  const paths = [...propertyForSale?.hits?.map(e => ({params: {id: e.externalID}})), ...propertyForRent?.hits?.map(e => ({params: {id: e.externalID}}))];
  console.log(paths)
  return {
    paths,
    fallback: 'blocking'
  }
}