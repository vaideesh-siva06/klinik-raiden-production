"use client";

import React, { createContext, useContext, useState } from "react";
import { Work } from "../types/work";

export interface WorksContextType {
  works: Work[];
  refreshWorks: () => Promise<void>;
  setWorks: React.Dispatch<React.SetStateAction<Work[]>>;
}

const WorksContext = createContext<WorksContextType | undefined>(undefined);

export const WorksProvider = ({ children }: { children: React.ReactNode }) => {
  const [works, setWorks] = useState<Work[]>([
    {
      _id: "6907da1ec86c85af12c81457",
      newRelease: true,
      title: "Tending Humanity's Flame",
      img: "https://res.cloudinary.com/dsspy8fjw/image/upload/v1762108484/TendingHumanitysFlameBookCover_gidffm.png",
      bookCoverImg: "https://res.cloudinary.com/dsspy8fjw/image/upload/v1762108484/tending-humanitys-flame_ljoywa.png",
      quote: "“The tragedy is not that we will die, but that we have forgotten we must.”",
      description:
        "This book was written because the universe will end—not now, but trillions of years into the future, according to science. If everything inevitably dissolves, what is the point of our existence?\n\nHere we will place humanity’s scientific discoveries of existence, space, and physics under a philosophical lens to find the truth to our existence and light the flame.",
      downloadLink:
        "https://www.dropbox.com/scl/fi/7feuz9oq6thoj87y9cdyi/Tending-Humanity-s-Flame-Klinik-Raiden.pdf?rlkey=f6q8c7jnrwj9linfr92p4o05r&st=vq0glmz0&dl=1",
    },
  ]);

  // Hardcoded, so refreshWorks just resolves immediately
  const refreshWorks = async () => {
    return;
  };

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
