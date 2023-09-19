import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Rectangle,
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

  // console.log(
  //   "🚀 ~ file: AverageSession.jsx:36 ~ AverageSession ~ sessions:",
  //   sessions
  // );

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

  const CustomCursor = ({ points }) => {
    return (
      <Rectangle
        fill="#000000"
        opacity={0.2}
        x={points[1].x}
        width={1000}
        height={300}
        className={styles.rectangle}
      />
    );
  };

  //   function CustomToolTypeSessionDuration({payload, active}){
  //     if(active){
  //         return (
  //             <div className='sessionDurationChartTooltip'>
  //                 <div>{`${payload[0].value}`}min</div>
  //             </div>
  //         )
  //     }
  //     return null
  // }

  return (
    <div className={styles.averageSession}>
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
        </text>
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
        <Tooltip
          content={<CustomToolTypeSessionDuration />}
          // cursor={false}
          cursor={<CustomCursor />}
        />
        <YAxis hide="true" domain={["dataMin", "dataMax"]} />
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
