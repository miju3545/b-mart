import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);
  return <div></div>;
}
