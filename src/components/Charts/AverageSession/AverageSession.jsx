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

  console.log(
    "🚀 ~ file: AverageSession.jsx:36 ~ AverageSession ~ sessions:",
    sessions
  );

  const CustomToolTypeSessionDuration = ({ payload, active }) => {
    if (active) {
      return (
        <div className={styles.tooltip}>
          <div>{`${payload[0].value}`}min</div>
        </div>
      );
    }
    return null;
  };

  const COLOR = "#ffffffa4";

  function customMouseMove(e) {
    let sessionWrap = document.querySelector(".sessionDurationWrap");

    if (e.isTooltipActive) {
      let windowWidth = sessionWrap.offsetWidth;
      let mouseXpercent = Math.floor(
        (e.activeCoordinate.x / windowWidth) * 100
      );

      sessionWrap.style.background = `linear-gradient(90deg, rgba(255,0,0, 1) ${mouseXpercent}%, rgba(0,0,0,0.1) ${mouseXpercent}%, rgba(0,0,0,0.1) 100%)`;
    } else {
      sessionWrap.style.background = "transparent";
    }
  }

  function customOnMouseOut() {
    let sessionWrap = document.querySelector(".sessionDurationWrap");
    sessionWrap.style.background = "transparent";
  }

  return (
    // <div className={styles.averageSession}>
    <div className={styles.averageSession}>
      {/* <h1 className={styles.title}>Durée moyenne des sessions</h1> */}
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <LineChart
        width={258}
        height={263}
        data={sessions}
        margin={{
          top: 80,
          right: 8,
          left: 8,
          bottom: 40,
        }}
        onMouseMove={(e) => customMouseMove(e)}
        onMouseOut={() => customOnMouseOut()}
        // margin={{
        //   top: 5,
        //   right: 30,
        //   left: 20,
        //   bottom: 5,
        // }}
      >
        <text
          x="15%"
          y="15%"
          fontSize={14}
          fontWeight={500}
          width={100}
          fill={COLOR}
        >
          Durée moyenne des sessions
          {/* <tspan x="15%" y="27%"> */}
          {/* </tspan> */}
        </text>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <CartesianGrid horizontal={false} vertical={false} />
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
        <YAxis hide="true" domain={["dataMin", "dataMax"]} />
        <Tooltip content={<CustomToolTypeSessionDuration />} cursor={false} />
        {/* <YAxis /> */}
        {/* <Tooltip /> */}
        {/* <Legend /> */}
        {/* <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        /> */}
        <YAxis hide="true" domain={["dataMin", "dataMax"]} />
        {/* <YAxis hide domain={["dataMin - 15", "dataMax + 10"]} /> */}
        {/* <Line type="monotone" dataKey="day" stroke="#82ca9d" /> */}

        <Line
          dataKey="sessionLength"
          type="natural"
          stroke="#FFFFFF"
          dot={false}
          strokeWidth={2}
        />
      </LineChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
};

export default AverageSession;

AverageSession.prototype = {
  userAverageSession: PropTypes.object.isRequired,
};

{
  /* <ResponsiveContainer width="100%" height="100%">
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
          // <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> 
        </LineChart>
      </ResponsiveContainer> 
    */
}
