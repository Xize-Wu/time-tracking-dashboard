import { ReactNode, createContext, useContext, useState } from "react";

interface ActivityContextType {
  period: string;
  changePeriod: (value: string) => void;
}

interface ActivityProviderProps {
  children: ReactNode;
}

const ActivityContext = createContext<ActivityContextType | undefined>(
  undefined
);

function ActivityProvider({ children }: ActivityProviderProps) {
  const [period, setPeriod] = useState("Day");

  function changePeriod(value: string) {
    switch (value) {
      case "Day":
        setPeriod("Day");
        break;
      case "Week":
        setPeriod("Week");
        break;
      case "Month":
        setPeriod("Month");
        break;
      default:
        break;
    }
  }

  const contextValue: ActivityContextType = {
    period,
    changePeriod,
  };
  return (
    <ActivityContext.Provider value={contextValue}>
      {children}
    </ActivityContext.Provider>
  );
}

function useActivity() {
  const context = useContext(ActivityContext);
  if (!context) {
    throw new Error("useContext must be used within a context provider.");
  }
  return context;
}
export { ActivityProvider, useActivity };
