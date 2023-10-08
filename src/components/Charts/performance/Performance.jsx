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
          {/* PolarGrid pour afficher les lignes radiales de grille (celles-ci sont désactivées avec `radialLines={false}*/}
          <PolarAngleAxis
            dataKey="kind"
            tickLine={false} // contrôle l'affichage des lignes de repère pour chaque valeur
            tick={{ fontSize: 12, fontWeight: 500, dy: 4 }} //personnalise l'apparence des repères
            stroke="#FFFFFF"
            tickFormatter={xAxisFormatter}
          />
          {/* PolarAngleAxis Il configure l'axe des X (`PolarAngleAxis`) de l'axe radial */}

          <Radar dataKey="value" fill="#FF0101B2" stroke="#FF0101" />
          {/*ajoute une série radar (`Radar`) pour représenter les valeurs de performance */}
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Performance;

Performance.propTypes = {
  userPerformance: PropTypes.object.isRequired,
};
