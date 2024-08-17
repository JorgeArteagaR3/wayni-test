import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { User } from "../types/user";
import { getUser as getUserSvc } from "../services/user";

type UserContextProps = {
  user: User | null;
  setUser: Dispatch<SetStateAction<UserContextProps["user"]>>;
};

const UserContext = createContext<UserContextProps>({} as UserContextProps);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);

  const getUser = useCallback(async () => {
    const foundUser = await getUserSvc();
    setUser(foundUser);
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
