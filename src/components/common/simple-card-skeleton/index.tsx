import { Box, Skeleton, useColorModeValue } from "@chakra-ui/react";

export default function SimpleCardSkeleton() {
  const bg = useColorModeValue("#ffffff", "#253240");
  const shadow = useColorModeValue("#cdcdcda3", "none");

  return (
    <Box rounded="lg" padding="24px 20px" bg={bg} boxShadow={`0px 0px 15px ${shadow}`} minWidth="350px">
      <Skeleton width="100%" height="270px" rounded="md" />
      <Skeleton width="280px" height="20px" rounded="md" marginTop={3} />
      <Skeleton width="100px" height="12px" rounded="sm" marginTop={3} />
    </Box>
  );
}
