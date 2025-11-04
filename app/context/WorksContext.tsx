"use client";

import React, { createContext, useContext, useState } from "react";
import { Work } from "../types/work";
import { worksData } from "../data/worksData";

export interface WorksContextType {
  works: Work[];
  refreshWorks: () => Promise<void>;
  setWorks: React.Dispatch<React.SetStateAction<Work[]>>;
}

const WorksContext = createContext<WorksContextType | undefined>(undefined);

export const WorksProvider = ({ children }: { children: React.ReactNode }) => {
  // Use the imported static data as initial state
  const [works, setWorks] = useState<Work[]>(worksData);

  // Hardcoded, so refreshWorks just resolves immediately
  const refreshWorks = async () => Promise.resolve();

  return (
    <WorksContext.Provider value={{ works, refreshWorks, setWorks }}>
      {children}
    </WorksContext.Provider>
  );
};

export const useWorks = () => {
  const context = useContext(WorksContext);
  if (!context) {
    throw new Error("useWorks must be used within a WorksProvider");
  }
  return context;
};
