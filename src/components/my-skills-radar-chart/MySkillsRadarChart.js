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
import { oldSkillsData } from "../../utils/skillsData";
import { Grid, Cell } from "react-mdl";

// nice charts!
const MySkillsRadarChart = () => (
  <div>
    <div style={{ width: "100%", margin: "auto" }}>
      {/* the duplication in the 2 grids suggests to us that everything within a single Grid should be refactored into a single component. This would halve the size of this component. */}
      <Grid className="skills-grid">
        <Cell col={6}>
          <h3>My Past Skills</h3>
          <RadarChart
            cx={300}
            cy={250}
            outerRadius={150}
            width={600}
            height={430}
            data={oldSkillsData}
          >
            <Radar
              name="Old Skills"
              dataKey="A"
              stroke="#ff8811"
              fill="#ff8811"
              fillOpacity={1.0}
            />
            <PolarGrid gridType="polygon" />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis scale="linear" angle={30} domain={[0, 10]} />
          </RadarChart>
        </Cell>
        <Cell col={6}>
          <h3>My New Skills</h3>
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
            <PolarRadiusAxis scale="linear" angle={30} domain={[0, 10.0]} />
          </RadarChart>
        </Cell>
      </Grid>
    </div>
  </div>
);

export default MySkillsRadarChart;
