import { Box } from "@/components/atom/Box";
import { ProductSelectCard } from "../ProductSelectCard";
import { CartProduct } from "@/lib/dto/cart";
import { useSelect } from "@/hooks/useSelect";

type Props = {
  list: Array<CartProduct>;
};

export function ProductSelectTable({ list }: Props) {
  const { checked, toggleChecked, checkedAll, toggleCheckedAll } = useSelect(list);

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" style={{ padding: "20px 0" }}>
        <label>
          <input type="checkbox" checked={checkedAll} onChange={toggleCheckedAll} />
          <span>전체 선택</span>
        </label>
        <Box display="flex" gap={10}>
          <button type="button" onClick={() => {}}>
            선택 비우기
          </button>
          <button type="button" onClick={() => {}}>
            전체 비우기
          </button>
        </Box>
      </Box>
      <Box display="grid" gap={10}>
        {list.map((item) => (
          <ProductSelectCard
            key={item.id}
            product={item}
            onChange={() => toggleChecked(item.id)}
            checked={checked[item.id]}
          />
        ))}
      </Box>
    </Box>
  );
}
