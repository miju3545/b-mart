import { Box } from "@/components/atom/Box";
import { FilterBox, FilterBoxProps } from "@/components/atom/FilterBox";

export function ProductFilterBox(props: FilterBoxProps) {
  return (
    <Box display="flex" width="100%" justifyContent="flex-end" style={{ padding: "20px 0" }}>
      <FilterBox {...props} />
    </Box>
  );
}
