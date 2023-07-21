import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";
import styles from "./ActivityChart.module.scss";
const xAxisTickFormat = (value) => {
  const valueDay = value.split("-");

  return Number(valueDay[2]);
};

const ActivityChart = ({ userActivityData }) => {
  console.log(
    "🚀 ~ file: ActivityChart.jsx:14 ~ ActivityChart ~ userActivityData:",
    userActivityData.data.sessions
  );
  const { sessions } = userActivityData.data;
  console.log(
    "🚀 ~ file: ActivityChart.jsx:19 ~ ActivityChart ~ sessions:",
    sessions
  );

  return (
    <div className={styles.activityChart}>
      <h1 className={styles.title}>Activité quotidienne </h1>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <div style={{ width: "100%", height: "100%" }}>
        <BarChart width={730} height={250} data={sessions}>
          {/* <CartesianGrid horizontal={false} vertical={false} /> */}
          <CartesianGrid
            vertical="false"
            strokeDasharray="3"
            height={1}
            horizontalPoints={[90, 185]}
          />
          <XAxis
            dataKey="day"
            tickFormatter={xAxisTickFormat}
            // tickSize="0"
            // interval="preserveStartEnd"
            // tickMargin="25"
            stroke="#9B9EAC"
          />
          <YAxis
            axisLine={false}
            orientation="right"
            type="number"
            tickSize="0"
            tickMargin="30"
            stroke="#9B9EAC"
            // width={50}
          />
          <Tooltip />
          <Legend
            className={styles.activityLegend}
            verticalAlign="top"
            align="right"
            height={80}
            iconType="circle"
            iconSize={8}
            formatter={(value, entry, index) => (
              <span className={styles.activityLegendColor}>{value}</span>
            )}
          />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            name="Poids (kg)"
            barSize={7}
            radius={[25, 25, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            name="Calories brûlées (kCal)"
            radius={[25, 25, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </div>
      {/* </ResponsiveContainer> */}
    </div>
  );
};

export default ActivityChart;
