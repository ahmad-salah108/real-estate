import { Box, Flex, Select } from "@chakra-ui/react";
import { useState } from "react";
import { filterData, getFilterValues } from "@/utils/filterData";
import { colors } from "@/styles/theme";
import { useRouter } from "next/router";

const SearchFilters = () => {
  const router = useRouter();
  const [filters, setFilters] = useState(filterData);
  const color = colors();
  const { query } = router;
  console.log(query['maxPrice'])
  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);

    values.forEach(item => {
      query[item.name] = item.value || query[item.name]
    })

    router.push({pathname: path, query})
  };

  return (
    <Flex bg={color.gray[100]} p="4" justifyContent={"center"} flexWrap="wrap">
      {filters?.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            placeholder={filter.placeholder}
            w="fit-content"
            p={2}
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
          >
            {filter?.items?.map(item=>(
              <option value={item.value} key={item.value}>{item.name}</option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
};

export default SearchFilters;
