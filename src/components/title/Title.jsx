import PropTypes from "prop-types";
import { Icons } from "../Icons";

function Title({ id, firstname }) {
  return (
    <div className="titleWrap">
      <div className="nameWrap">
        Bonjour
        <div key={id} className="titleName">
          {firstname}
        </div>
      </div>
      <div className="titleCongrats">
        Félicitation ! Vous avez explosé vos objectifs hier <Icons.ClapIcon />
      </div>
    </div>
  );
}

Title.propTypes = {
  id: PropTypes.number.isRequired,
  firstname: PropTypes.string.isRequired,
};

export default Title;
