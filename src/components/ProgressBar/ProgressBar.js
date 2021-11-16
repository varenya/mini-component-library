/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const Progress = styled.div`
  width: 320px;
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  background-color: ${COLORS.transparentGray15};
`;

const ProgressBarSlider = styled.div`
  width: var(--value);
  border-radius: 4px;
  height: 100%;
  background-color: ${COLORS.primary};
`;

const Sizes = {
  small: {
    "--borderRadius": "4px",
    "--padding": "0px",
    "--height": "8px",
  },
  medium: {
    "--borderRadius": "4px",
    "--padding": "0px",
    "--height": "12px",
  },
  large: {
    "--borderRadius": "8px",
    "--padding": "4px",
    "--height": "24px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = Sizes[size];
  return (
    <>
      <VisuallyHidden>
        <label htmlFor="progress-bar">Progress Bar</label>
      </VisuallyHidden>
      <Progress style={styles}>
        <ProgressBarSlider style={{ "--value": `${value}%` }} />
      </Progress>
    </>
  );
};

export default ProgressBar;
