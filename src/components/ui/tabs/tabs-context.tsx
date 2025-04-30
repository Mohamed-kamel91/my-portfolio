import React, {
  useState,
  createContext,
  useContext,
  useMemo,
  useCallback,
} from 'react';

type ContextValue = {
  active: number;
  isActive: (index: number) => boolean;
  setActive: React.Dispatch<React.SetStateAction<number>>;
};

const TabsContext = createContext<ContextValue | null>(null);

export const useTabs = () => {
  const tabsContext = useContext(TabsContext);

  if (!tabsContext) {
    throw new Error('context has to be used within Tabs Provider>');
  }

  return tabsContext;
};

export const Tabs = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState<number>(0);

  const isActive = useCallback(
    (index: number) => active === index,
    [active],
  );

  const contextValue = useMemo(
    () => ({ active, isActive, setActive }),
    [active, isActive, setActive],
  );

  return <TabsContext value={contextValue}>{children}</TabsContext>;
};
