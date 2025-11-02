"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Work } from "../types/work";

export interface WorksContextType {
  works: Work[];
  refreshWorks: () => Promise<void>;
  setWorks: React.Dispatch<React.SetStateAction<Work[]>>; // ✅ required
}

const WorksContext = createContext<WorksContextType | undefined>(undefined);

export const WorksProvider = ({ children }: { children: React.ReactNode }) => {
  const [works, setWorks] = useState<Work[]>([]);

  const refreshWorks = async () => {
    try {
      const res = await axios.get("/api/works");
      setWorks(res.data);
    } catch (err) {
      console.error("Failed to fetch works:", err);
    }
  };

  useEffect(() => {
    refreshWorks();
  }, []);

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
