import { createContext, useState, ReactNode, useContext } from "react";

interface ContextType {
  data: number;
  add: () => void;
  remove: () => void;
}
const testDataContext = createContext<ContextType | undefined>(undefined);
testDataContext.displayName = "testData";
export const TestDataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<number>(0);

  const add = () => {
    setData(data + 1);
  };
  const remove = () => {
    setData(data - 1);
  };
  return (
    <testDataContext.Provider value={{ data, add, remove }}>
      {children}
    </testDataContext.Provider>
  );
};

export const useTestData = () => {
  const context = useContext(testDataContext);
  if (!context) {
    throw new Error("useTestData must be used within a TestDataProvider");
  }
  return context;
};
