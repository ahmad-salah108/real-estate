import { Box, Button, Flex, Select } from "@chakra-ui/react";
import { useState } from "react";
import { filterData, getFilterValues } from "@/utils/filterData";
import { colors } from "@/styles/theme";
import { useRouter } from "next/router";

const SearchFilters = ({open}) => {
  const router = useRouter();
  const [filters, setFilters] = useState(filterData);
  const color = colors();
  const { query } = router;
  const searchProperties = (filterValues) => {
    const path = router.pathname;

    const values = getFilterValues(filterValues);

    values.forEach(item => {
      if(item.value && filterValues?.[item.name]){
        query[item.name] = item.value;
      }
    })

    router.push({pathname: path, query})
  };

  return (
    <Flex bg={color.gray[100]} p="4" justifyContent={"center"} flexWrap="wrap">
      {filters?.map((filter) => (
        <Box key={filter.queryName} className={open ? 'zIndex-minus' : ''}>
          <Select
            placeholder={filter.placeholder}
            w="fit-content"
            p={2}
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
            value={query[filter.queryName]}
          >
            {filter?.items?.map(item=>(
              <option value={item.value} key={item.value}>{item.name}</option>
            ))}
          </Select>
        </Box>
      ))}
      <Flex alignItems={'center'} justifyContent='center'>
        <Button colorScheme={'red'} onClick={()=>router.push({pathname: router.pathname})}>
          Reset
        </Button>
      </Flex>
    </Flex>
  );
};

export default SearchFilters;
