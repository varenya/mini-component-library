import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Input = styled.input`
  border: 0;
  border-bottom: var(--borderSize) solid black;
  outline-offset: 2px;
  padding: 4px;
  padding-left: var(--iconGap);
  width: var(--width);
  font-size: var(--fontSize);
  color: ${COLORS.gray700};
  &::placeholder {
    color: ${COLORS.gray500};
  }

  &:hover {
    color: black;
    &::placeholder {
      color: ${COLORS.gray500};
    }
  }
`;

const variants = {
  small: {
    "--borderSize": "1px",
    "--fontSize": "14px",
    "--iconGap": "18px",
    iconSize: "12px",
    strokeWidth: "1px",
  },
  large: {
    "--borderSize": "2px",
    "--fontSize": "18px",
    "--iconGap": "24px",
    iconSize: "16px",
    strokeWidth: "2px",
  },
};

const InputWrapper = styled.div`
  position: relative;
`;

const IconWrapper = styled.span`
  position: absolute;
  bottom: 7px;
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const variantStyle = variants[size];
  return (
    <>
      <VisuallyHidden>
        <label>{label}</label>
      </VisuallyHidden>
      <InputWrapper>
        <IconWrapper>
          <Icon
            id={icon}
            size={variantStyle.iconSize}
            strokeWidth={variantStyle.strokeWidth}
          />
        </IconWrapper>
        <Input
          placeholder={placeholder}
          style={{ "--width": `${width}px`, ...variantStyle }}
        />
      </InputWrapper>
    </>
  );
};

export default IconInput;
