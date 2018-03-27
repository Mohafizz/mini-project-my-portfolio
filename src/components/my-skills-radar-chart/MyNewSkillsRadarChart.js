import React from "react";
import "./MySkillsRadarChart.css";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";
import { newSkillsData } from "../../utils/skillsData";

const MyNewSkillsRadarChart = () => (
  <div>
    <h1>My New Skills</h1>
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={600}
      height={500}
      data={newSkillsData}
    >
      <Radar
        name="New Skills"
        dataKey="B"
        stroke="#8d02ff"
        fill="#8d02ff"
        fillOpacity={0.8}
      />
      <PolarGrid gridType="polygon" />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 10]} />
    </RadarChart>
  </div>
);

export default MyNewSkillsRadarChart;
