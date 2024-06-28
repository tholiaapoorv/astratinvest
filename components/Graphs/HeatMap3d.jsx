// Heatmap3d.js using Plotly for 3D Surface Graph
"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import Plotly to avoid SSR issues
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

const Heatmap3D = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your data fetching logic
        const X = [
          "2014-1",
          "2014-2",
          "2014-3",
          "2014-4",
          "2014-5",
          "2014-6",
          "2014-7",
        ];

        const Y = [
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

        const Z = [
          [0, 0, 0, 4, 4, 4, 4],
          [0, 0, 0, 4, 5, 6, 5],
          [0, 0, 0, 5, 5, 5, 5],
          [0, 0, 0, 5, 6, 6, 6],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 2, -1, -5, -5],
          [0, 0, 0, -1, -4, -5, -6],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 4, 4, 5, 5],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 1, 2, 5, 5],
          [0, 0, 0, 4, 5, 6, 6],
          [0, 0, 0, 5, 6, 6, 6],
          [0, 0, 0, -1, -3, -1, 2],
          [0, 0, 0, 1, 2, 5, 5],
          [0, 0, 0, 1, 1, 4, 5],
          [0, 0, 0, 1, 1, 4, 5],
          [0, 0, 0, 1, -2, -5, -5],
          [0, 0, 0, -1, -1, 1, 1],
          [0, 0, 0, -1, -3, -1, 2],
        ];

        // Format data for Plotly
        const plotlyData = [
          {
            type: "surface",
            x: X,
            y: Y,
            z: Z,
            colorscale: "Viridis", // Example colorscale
            showscale: true,
            colorbar: {
              title: "Average Sector Value",
            },
          },
        ];

        setData(plotlyData);
      } catch (error) {
        console.error("Error fetching or parsing data:", error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error loading data: {error}</div>;
  }

  return (
    <div className="aspect-square">
      <h1>3D Heat Map</h1>
      <Plot
        className=""
        data={data}
        layout={{
          title: "3D Heat Map of Sector Data",
          scene: {
            xaxis: { title: "Month" },
            yaxis: { title: "Year" },
            zaxis: { title: "Average Value" },
            camera: {
              eye: { x: 1.6, y: 1.6, z: 0.8 },
            },
          },
          font: {
            family: "Poppins, sans-serif",
            size: 10,
          },
          margin: {
            l: 50,
            r: 50,
            b: 100,
            t: 100,
            pad: 4,
          },
          paper_bgcolor: "#f9f9f9",
          plot_bgcolor: "#f9f9f9",
          title: {
            text: "3D Heat Map of Sector Data",
            font: {
              size: 24,
              color: "#333",
              family: "Arial, sans-serif",
            },
            x: 0.5,
            xanchor: "center",
          },
        }}
        config={{ responsive: true, displayModeBar: false }}
      />
    </div>
  );
};

export default Heatmap3D;
