import PropTypes from "prop-types";
import {
  PolarAngleAxis,
  PolarRadiusAxis,
  PolarGrid,
  Radar,
  RadarChart,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "./performanace.module.scss";
const xAxisFormatter = (kind) => {
  switch (kind) {
    case 1:
      return "Cardio";
    case 2:
      return "Energie";
    case 3:
      return "Endurance";
    case 4:
      return "Force";
    case 5:
      return "Vitesse";
    case 6:
      return "Intensité";
    default:
      return null;
  }
};

const Performance = ({ userPerformance }) => {
  const { data, kind } = userPerformance;

  return (
    <div className={styles.performance}>
      <RadarChart outerRadius={90} width={730} height={250} data={data}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          tickLine={false}
          tick={{ fontSize: 12, fontWeight: 500 }}
          stroke="#FFFFFF"
          tickFormatter={xAxisFormatter}
        />
        <Radar dataKey="value" fill="#FF0101B2" />
        <Legend />
      </RadarChart>
    </div>
  );
};

export default Performance;

Performance.propTypes = {
  userPerformance: PropTypes.object.isRequired,
};

// {/* <ResponsiveContainer width="100%" height="100%"> */}
// <RadarChart data={data} outerRadius={80}>
// <PolarGrid radialLines={false} />
// <PolarAngleAxis
//   dataKey="kind"
//   tickLine={false}
//   tick={{ fontSize: 12, fontWeight: 500 }}
//   stroke="#FFFFFF"
//   tickFormatter={xAxisFormatter}
// />
// <Radar dataKey="value" fill="#FF0101B2" />
// </RadarChart>
// {/* </ResponsiveContainer> */}
