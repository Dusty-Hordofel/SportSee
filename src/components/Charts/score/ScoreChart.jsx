import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
  Tooltip,
  Legend,
} from "recharts";
import PropTypes from "prop-types";
import styles from "./scoreChart.module.scss";

function ScoreChart({ userData }) {
  console.log(
    "🚀 ~ file: ScoreChart.jsx:10 ~ ScoreChart ~ dataScore:",
    userData
  );

  function formatScore(data) {
    if (data.todayScore) {
      data.score = data.todayScore;
      delete data.todayScore;
      return data;
    }
  }
  // formatScore(userData);

  formatScore(userData);
  // console.log(userData);

  function calculatePercentage(data) {
    const score = Number(data.score);

    return Math.round(score * 100);
  }

  const scorePercentage = calculatePercentage(userData);
  console.log(
    "🚀 ~ file: ScoreChart.jsx:34 ~ ScoreChart ~ scorePercentage:",
    scorePercentage
  );

  const radialData = [{ name: "Score", score: userData.score }];

  return (
    <>
      <div className={styles.scoreChart}>
        {/* <div className={styles.scoreWrapper}> */}
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="90%"
            startAngle={180}
            endAngle={-180}
            // innerRadius="20%"
            // outerRadius="80%"
            barSize={10}
            data={radialData}
          >
            <RadialBar
              minAngle={15}
              fill="#FF0000"
              dataKey="score"
              cornerRadius={25}
              barSize={10}
            />
            <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
            <circle cx="50%" cy="50%" fill="white" r="85"></circle>
          </RadialBarChart>
        </ResponsiveContainer>

        {/* </div> */}
        <div className={styles.score}>
          <p className={styles.scoreResult}>{scorePercentage}%</p>
          <p className="scoreText">
            de votre
            <br />
            objectif
          </p>
        </div>
      </div>
    </>
  );
}

ScoreChart.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default ScoreChart;
