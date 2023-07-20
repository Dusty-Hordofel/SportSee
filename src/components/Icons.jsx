import logo from "../assets/logo.svg";
import calories from "../assets/calories-icon.svg";
import carbs from "../assets/carbs-icon.svg";
import fat from "../assets/fat-icon.svg";
import bike from "../assets/iconBike.svg";
import fitness from "../assets/iconFitness.svg";
import swim from "../assets/iconSwim.svg";
import yoga from "../assets/iconYoga.svg";
import protein from "../assets/protein-icon.svg";

export const Icons = {
  calories: (props) => <img src={calories} {...props} alt="calories icon" />,
  carbs: (props) => <img src={carbs} {...props} alt="carbs icon" />,
  fat: (props) => <img src={fat} {...props} alt="fat icon" />,
  swim: (props) => <img src={swim} {...props} alt="swim icon" />,
  yoga: (props) => <img src={yoga} {...props} alt="yoga icon" />,
  fitness: (props) => <img src={fitness} {...props} alt="fitness icon" />,
  bike: (props) => <img src={bike} {...props} alt="bike icon" />,
  logo: (props) => <img src={logo} alt="SportSee Logo" {...props} />,
  protein: (props) => <img src={protein} {...props} alt="protein" />,
};
