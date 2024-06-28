"use client";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  HeatMapComponent,
  Inject,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-react-heatmap";

export default function Heatmap3d() {
  let heatmapData = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 4, 5, 5, 0, 2, -1, 0, 4, 0, 1, 4, 5, -1, 1, 1, 1, 1, -1, -1],
    [4, 5, 5, 6, 0, -1, -4, 0, 4, 0, 2, 5, 6, -3, 2, 1, 1, -2, -1, -3],
    [4, 6, 5, 6, 0, -5, -5, 0, 5, 0, 5, 6, 6, -1, 5, 4, 4, -5, 1, -1],
    [4, 5, 5, 6, 0, -5, -6, 0, 5, 0, 5, 6, 6, 2, 5, 5, 5, -5, 1, 2],
  ];
  const yLabels = [
    "AUTO",
    "BANKEX",
    "BSE_CD",
    "BSE_CG",
    "BSE_HC",
    "BSE_IT",
    "BSEFMC",
    "BSESER",
    "CDGS",
    "COMDTY",
    "ENERGY",
    "FIN",
    "INDSTR",
    "METAL",
    "OILGAS",
    "POWER",
    "REALTY",
    "TECK",
    "TELCOM",
    "UTILS",
  ];
  return (
    <HeatMapComponent
      className="aspect-video h-auto w-auto"
      titleSettings={{
        text: "Heatmap",
        textStyle: {
          size: "15px",
          fontWeight: "500",
          fontStyle: "Normal",
          fontFamily: "Segoe UI",
        },
      }}
      xAxis={{
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July"],
      }}
      yAxis={{
        labels: yLabels,
      }}
      cellSettings={{
        showLabel: true,
        border: { width: 0 },
      }}
      paletteSettings={{
        palette: [
          { value: -6, color: "#b91c1c " }, // Green
          { value: -5, color: "#dc2626" }, // Light green
          { value: -4, color: "#ef4444" }, // Yellow
          { value: -3, color: "#f87171" }, // Orange
          { value: -2, color: "#fca5a5" }, // Red
          { value: -1, color: "#fecaca" }, // Red
          { value: 0, color: "#fdba74" }, // Purple
          { value: 6, color: "#166534" },
          { value: 5, color: "#15803d" },
          { value: 4, color: "#16a34a" },
          { value: 3, color: "#22c55e" },
          { value: 2, color: "#4ade80" },
          { value: 1, color: "#86efac" },
        ],
        type: "Gradient",
      }}
      dataSource={heatmapData}
      showTooltip={true}
      legendSettings={{
        visible: true,
        position: "Right",
        showLabel: true,
        height: "150",
      }}
    >
      <Inject services={[Legend, Tooltip]} />
    </HeatMapComponent>
  );
}
