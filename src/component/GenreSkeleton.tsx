import {
  Card,
  Skeleton,
  CardBody,
  SkeletonText,
  HStack,
} from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <HStack spacing={2} marginBottom={"20px"}>
      {/* <Skeleton boxSize={"32px"}></Skeleton> */}
      <SkeletonText width={"100%"}></SkeletonText>
    </HStack>
  );
};

export default GenreSkeleton;
