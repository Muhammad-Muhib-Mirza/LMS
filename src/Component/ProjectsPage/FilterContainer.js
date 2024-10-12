import React, { useState } from "react";
import Filter from "./Filter";
import SubjectFilter from "./SubjectFilter";
import IndustryFilter from "./IndustryFilter";
import RoleFilter from "./RoleFilter";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Select,
  Input,
} from "@chakra-ui/react";

const FilterModal = ({ handleFilterChange }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [filter, setFilter] = useState({
    jobTitles: "",
    level: "",
    function: "",
    location: "",
    industryAndKeywords: "",
    construction: "",
    railroadTransportation: "",
    manufacturing: "",
    companyName: "",
    companyURL: "",
    contactName: "",
    employees: "",
    revenue: "",
  });

  const handleClearFilter = () => {};

  return (
    <Box
      p={6}
      maxW="md"
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
    >
      <Flex direction="column" mb={6}>
        <Heading size="lg" mb={4} color="teal.500">
          Filters
        </Heading>
        <Button
          colorScheme="red"
          variant="outline"
          size="sm"
          onClick={handleClearFilter}
        >
          Clear (1)
        </Button>
      </Flex>

      <Flex direction="column" gap={4}>
        <Text
          fontWeight="medium"
          style={{ fontSize: "1.3rem" }}
          size="lg"
          mb={1}
          color="teal.500"
        >
          Class
        </Text>
        <Filter handleFilterChange={handleFilterChange} />

        <Text
          fontWeight="medium"
          style={{ fontSize: "1.3rem" }}
          size="lg"
          mb={1}
          color="teal.500"
        >
          Subject
        </Text>
        <SubjectFilter handleFilterChange={handleFilterChange} />

        <Text
          fontWeight="medium"
          style={{ fontSize: "1.3rem" }}
          size="lg"
          mb={1}
          color="teal.500"
        >
          Industry
        </Text>
        <IndustryFilter handleFilterChange={handleFilterChange} />

        <Text
          fontWeight="medium"
          style={{ fontSize: "1.3rem" }}
          size="lg"
          mb={1}
          color="teal.500"
        >
          Role
        </Text>
        <RoleFilter handleFilterChange={handleFilterChange} />
      </Flex>
    </Box>
  );
};

export default FilterModal;
