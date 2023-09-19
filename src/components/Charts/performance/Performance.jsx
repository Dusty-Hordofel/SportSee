import PropTypes from "prop-types";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import styles from "./performanace.module.scss";
const xAxisFormatter = (kind) => {
  switch (kind) {
    case 1:
      return "Intensité";
    case 2:
      return "Vitesse";
    case 3:
      return "Force";
    case 4:
      return "Endurance";
    case 5:
      return "Energie";
    case 6:
      return "Cardio";
    default:
      return null;
  }
};

const Performance = ({ userPerformance }) => {
  const { data, kind } = userPerformance;

  return (
    <div className={styles.performance}>
      <ResponsiveContainer>
        <RadarChart outerRadius={90} width={258} height={200} data={data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickLine={false}
            tick={{ fontSize: 12, fontWeight: 500, dy: 4 }}
            stroke="#FFFFFF"
            tickFormatter={xAxisFormatter}
          />
          <Radar dataKey="value" fill="#FF0101B2" stroke="#FF0101" />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Performance;

Performance.propTypes = {
  userPerformance: PropTypes.object.isRequired,
};
