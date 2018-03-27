import React from "react";
import "./MySkillsRadarChart.css";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

const data = [
  { subject: "A", A: 120, B: 110, fullMark: 150 },
  { subject: "B", A: 98, B: 130, fullMark: 150 },
  { subject: "C", A: 86, B: 130, fullMark: 150 },
  { subject: "D", A: 99, B: 100, fullMark: 150 },
  { subject: "E", A: 85, B: 90, fullMark: 150 },
  { subject: "F", A: 65, B: 85, fullMark: 150 }
];

const MySkillsRadarChart = () => {
  return (
    <div>
      <RadarChart
        cx={300}
        cy={250}
        outerRadius={150}
        width={600}
        height={500}
        data={data}
      >
        <Radar
          name="Previous skills"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Radar
          name="New Skills"
          dataKey="B"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
        <PolarGrid />
        <Legend />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
      </RadarChart>
    </div>
  );
};

export default MySkillsRadarChart;
