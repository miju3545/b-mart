import { PropsWithChildren, createContext, useState } from "react";

type UserContextType = {
  user: {
    username: string;
  };
};

export const UserContext = createContext(false as unknown as UserContextType);

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [value, setValue] = useState({ user: { username: "" } });
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
