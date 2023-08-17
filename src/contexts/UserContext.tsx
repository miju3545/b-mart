import { PropsWithChildren, createContext, useState } from "react";

type UserContextType = {
  user: {
    name: string;
  };
};

export const UserContext = createContext(false as unknown as UserContextType);

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [value, setValue] = useState({ user: { name: "미주알고주알" } });
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
