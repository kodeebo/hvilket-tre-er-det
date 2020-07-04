import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SpinnerDiv = styled.div`
  border: calc(15px solid rgba(0, 0, 0, 0.1));
  border-radius: 50%;
  animation: spinnerAnimation 0.7s linear infinite;
  height: 50px;
  width: 50px;
  display: block;
  margin: 10px;
  @keyframes spinnerAnimation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = ({ size, margin, inverted }) => <SpinnerDiv size={size} margin={margin} inverted={inverted} />;

export default Spinner;
