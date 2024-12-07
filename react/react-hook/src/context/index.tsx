import { ReactNode } from "react";
import { TestDataProvider } from "./test_context";
export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <TestDataProvider>{children}</TestDataProvider>;
};
