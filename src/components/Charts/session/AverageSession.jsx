import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import styles from "./AverageSession.module.scss";

const xAxisFormatter = (day) => {
  switch (day) {
    case 1:
      return "L";
    case 2:
      return "M";
    case 3:
      return "M";
    case 4:
      return "J";
    case 5:
      return "V";
    case 6:
      return "S";
    case 7:
      return "D";
    default:
      return "";
  }
};
const AverageSession = ({ userAverageSession }) => {
  const { sessions } = userAverageSession;
  return (
    // <div className={styles.averageSession}>
    <>
      {/* <h1 className={styles.title}>Durée moyenne des sessions</h1> */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={730}
          height={250}
          data={sessions}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid horizontal={false} vertical={false} />

          <YAxis
            // dataKey="sessionLength"
            hide="true"
            domain={["dataMin", "dataMax"]}
          />
          <XAxis
            dataKey="day"
            type="category"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fontWeight: 500 }}
            tickFormatter={xAxisFormatter}
            stroke="rgba(255, 255, 255, 0.5)"
            tickMargin={40}
          />
          <Tooltip />
          <Legend />
          <Line
            dataKey="sessionLength"
            type="natural"
            stroke="#FFFFFF"
            dot={false}
            strokeWidth={2}
          />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default AverageSession;

AverageSession.prototype = {
  userAverageSession: PropTypes.object.isRequired,
};
