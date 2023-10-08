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
import PropTypes from "prop-types";

const xAxisTickFormat = (value) => {
  return new Date(value).getDate();
};

const ActivityChart = ({ userActivityData }) => {
  const { sessions } = userActivityData;

  return (
    <div className={styles.activityChart}>
      <h1 className={styles.title}>Activité quotidienne </h1>
      <div className={styles.activityContent}>
        <BarChart width={890} height={320} data={sessions}>
          <CartesianGrid strokeDasharray="3" vertical={false} />
          <XAxis
            dataKey="day"
            tickFormatter={(day) => xAxisTickFormat(day)}
            tickLine={false} //contrôle l'affichage des lignes de repère pour chaque valeur
            tick={{ fill: "#9B9EAC" }} //personnaliser l'apparence des repères
            stroke="#DEDEDE"
            strokeWidth={2}
            tickMargin={16}
            interval="preserveStartEnd" //contrôle la manière dont les repères sont espacés sur l'axe des X
          />
          {/* <YAxis
            dataKey="kilogram"
            axisLine={false}
            orientation="right"
            type="number"
            tickSize="0"
            tickMargin="30"
            stroke="#9B9EAC"
            allowDataOverflow={true}
          /> */}
          <YAxis
            dataKey="calories"
            axisLine={false}
            // orientation="left"
            orientation="right"
            type="number"
            tickSize="0"
            tickMargin="30"
            stroke="#9B9EAC"
            allowDataOverflow={true}
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
    </div>
  );
};

export default ActivityChart;

ActivityChart.propTypes = {
  userActivityData: PropTypes.object.isRequired,
};
