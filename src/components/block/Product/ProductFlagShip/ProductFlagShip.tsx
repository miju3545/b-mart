import { ReactNode, useEffect, useState } from "react";
import { Heading } from "@/components/atom/Heading";
import { Box } from "@/components/atom/Box";
import { ProductCard } from "../ProductCard/ProductCard";
import { SubCategory } from "@/lib/dto/category";
import { Product as ProductDto } from "@/lib/dto";
import { ProductFlagShipList } from "./ProductFlagShipList";

type Props = {
  title: ReactNode;
  list: SubCategory[];
};

export function ProductFlagShip({ title, list }: Props) {
  const [currentFlagship, setCurrentFlagship] = useState<SubCategory>();
  const [products, setProducts] = useState<ProductDto[]>([]);

  useEffect(() => {
    if (!currentFlagship) return;
    fetch(`/api/categories/${currentFlagship?.id}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data.result));
  }, [currentFlagship]);

  useEffect(() => {
    setCurrentFlagship(list?.[0]);
  }, [list]);

  return (
    <Box display="flex" flexDirection="column" gap={10} style={{ marginBottom: "100px" }}>
      <Heading level={3}>{title}</Heading>
      <ul style={{ display: "flex", gap: "10px" }}>
        {list?.map((category) => (
          <Tab
            key={category.id}
            title={category.title}
            onClick={() => setCurrentFlagship(category)}
            active={category.id === currentFlagship?.id}
          />
        ))}
      </ul>

      <ProductFlagShipList list={products} col={2} show={4} />
    </Box>
  );
}

function Tab({ title, onClick, active }: { title: string; onClick: () => void; active?: boolean }) {
  return (
    <button type="button" onClick={onClick} style={active ? { background: "#111", color: "#fff" } : undefined}>
      {title}
    </button>
  );
}
