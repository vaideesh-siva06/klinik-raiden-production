import React from "react";
import WorksClient from "../components/WorkClient";
import { worksData } from "../data/worksData";

export const runtime = "edge";

const WorksPage = () => {
  return <WorksClient works={worksData} />;
};

export default WorksPage;
