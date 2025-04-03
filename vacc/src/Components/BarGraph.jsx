import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import "./BarGraph.css";

const data = [
  { country: "India", value: 80 },
  { country: "USA", value: 65 },
  { country: "Germany", value: 50 },
  { country: "Japan", value: 70 },
  { country: "Brazil", value: 55 },
];

const BarGraph = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("bar-graph");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.6) {
          setInView(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="bar-graph" className="bar-graph-container">
      <h2 className="graph-title">Vaccination Progress by Country</h2>
      <ResponsiveContainer width="70%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <XAxis dataKey="country" tick={{ fill: "#fff", fontSize: 14 }} />
          <YAxis tick={{ fill: "#fff", fontSize: 14 }} />
          <Tooltip cursor={{ fill: "rgba(255, 255, 255, 0.1)" }} contentStyle={{ background: "#222", color: "#fff" }} />
          <Bar
            dataKey="value"
            fill="#41D6EF"
            radius={[10, 10, 0, 0]}
            animationBegin={inView ? 0 : 10000} 
            animationDuration={1000}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarGraph;
