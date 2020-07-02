import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import "./logo.css";

const Logo = ({ icon, description, height, extraClasses }) => {
  return (
    <div className="about__icon-box" tabIndex={0} role="tab">
      <Icon
        className={`about__icon ${extraClasses}`}
        height={height || "3em"}
        align="center, middle, meet"
        icon={icon}
        alt={description}
      />
      <p className="icon__description">{description}</p>
    </div>
  );
};

Logo.propTypes = {
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  height: PropTypes.string,
  extraClasses: PropTypes.string,
};

Logo.defaultProps = {
  height: null,
  extraClasses: null,
};

export default Logo;
