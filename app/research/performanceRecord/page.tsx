import Graph1 from "@/components/Graphs/Graph1";
import Graph2 from "@/components/Graphs/Graph2";
import React from "react";
import Heatmap3d from "@/components/Graphs/Heatmap";
import fs from "fs";
import path from "path";
import Heatmap3D from "@/components/Graphs/HeatMap3d.jsx";
const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Graph1 />
      {/* <Graph2 /> */}
      {/* <Heatmap3d />
      <Heatmap3D /> */}
    </div>
  );
};

export default Page;
