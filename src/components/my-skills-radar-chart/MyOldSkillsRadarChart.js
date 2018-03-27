import React from "react";
import "./MySkillsRadarChart.css";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";
import { oldSkillsData } from "../../utils/skillsData";

const MyOldSkillsRadarChart = () => (
  <div>
    <h1>My Old Skills</h1>
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={600}
      height={500}
      data={oldSkillsData}
    >
      <Radar
        name="Old Skills"
        dataKey="A"
        stroke="#ffc802"
        fill="#ffc802"
        fillOpacity={0.8}
      />
      <PolarGrid gridType="polygon" />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 10]} />
    </RadarChart>
  </div>
);

export default MyOldSkillsRadarChart;
