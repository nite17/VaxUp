import React, { useState, useEffect, useRef } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Label } from "recharts";
import "./BarGraph.css";

const data = [
  { country: "India", value: 80 },
  { country: "USA", value: 75 },
  { country: "Germany", value: 80 },
  { country: "Japan", value: 85 },
  { country: "Brazil", value: 78 },
  { country: "Egypt", value: 38 },
  { country: "DR Congo", value: 38 },
];

const BarGraph = () => {
  const [inView, setInView] = useState(false);
  const graphRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    if (graphRef.current) {
      observer.observe(graphRef.current);
    }

    return () => {
      if (graphRef.current) {
        observer.unobserve(graphRef.current);
      }
    };
  }, []);

  return (
    <div ref={graphRef} id="bar-graph" className="bar-graph-container">
      <h2 className="graph-title">Vaccination Progress by Countries</h2>
      <ResponsiveContainer width="70%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 60, bottom: 60 }}>
          <XAxis 
            dataKey="country" 
            tick={{ fill: "#fff", fontSize: 14 }}
            height={60}
          >
            <Label 
              value="Country" 
              position="bottom" 
              offset={0} 
              fill="#383838" 
              fontSize={24}
              dy={20}
            />
          </XAxis>
          <YAxis 
            tick={{ fill: "#fff", fontSize: 14 }}
            width={60}
          >
            <Label 
              value="Vaccination Rate (%)" 
              angle={-90} 
              position="left" 
              offset={-10} 
              fill="#383838" 
              fontSize={24}
              dx={-30}
              dy={-100}
            />
          </YAxis>
          <Tooltip cursor={{ fill: "rgba(0, 0, 0, 0.1)" }} contentStyle={{ background: "#222", color: "#fff" }} />
          <Bar
            dataKey="value"
            fill="#41D6EF"
            radius={[10, 10, 0, 0]}
            animationBegin={0}
            animationDuration={1500}
            animationEasing="ease"
            isAnimationActive={inView}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarGraph;