import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import {
  UserContextProvider,
  WishListContextProvider,
  CartContextProvider,
  OrderListContextProvider,
  SideTabContextProvider,
  ModalContextProvider
} from "@/contexts/index";
import { Layout } from "@/components/block";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: 1,
          refetchOnWindowFocus: false,
          useErrorBoundary: false
        }
      }
    })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <SideTabContextProvider>
        <ModalContextProvider>
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
        </ModalContextProvider>
      </SideTabContextProvider>
    </QueryClientProvider>
  );
}
