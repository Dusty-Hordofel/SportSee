import PropTypes from "prop-types";
// import { Icons } from "../../Icons";
import styles from "./nutritionCard.module.scss";

function NutritionCard({ id, Icon, keyDataSwitch, keyDataType }) {
  return (
    <div className={styles.nutritionCard} key={id}>
      <Icon />
      <div className={styles.nutritionCardText}>
        <div className={styles.nutritionCardKeyData}>{keyDataSwitch}</div>
        <div className={styles.nutritionCardKeyType}>{keyDataType}</div>
      </div>
    </div>
  );
}

NutritionCard.propTypes = {
  icon: PropTypes.string.isRequired,
  keyDataSwitch: PropTypes.array.isRequired,
  keyDataType: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default NutritionCard;
