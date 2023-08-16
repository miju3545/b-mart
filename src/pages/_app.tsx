import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import {
  UserContextProvider,
  WishListContextProvider,
  CartContextProvider,
  OrderListContextProvider,
} from "@/contexts";
import { Layout } from "@/components/atom";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <WishListContextProvider>
          <CartContextProvider>
            <OrderListContextProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </OrderListContextProvider>
          </CartContextProvider>
        </WishListContextProvider>
      </UserContextProvider>
    </QueryClientProvider>
  );
}
