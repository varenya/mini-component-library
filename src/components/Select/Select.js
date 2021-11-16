import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { getDisplayedValue } from "./Select.helpers";

const Wrapper = styled.div`
  position: relative;
  /* width: 100px; */
`;

const SelectWrapper = styled.select`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const DisplayValueWrapper = styled.div`
  position: relative;
  background-color: ${COLORS.transparentGray15};
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  border-radius: 8px;
  color: ${COLORS.gray700};
  padding: 16px 12px;
  display: flex;
  justify-content: space-around;
  width: fit-content;
  align-items: center;
  &:hover {
    color: black;
  }
`;

const DisplayValue = styled.span`
  margin-right: 24px;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <DisplayValueWrapper>
        <SelectWrapper onChange={onChange}>{children}</SelectWrapper>
        <DisplayValue>{displayedValue}</DisplayValue>{" "}
        <Icon id="chevron-down" size="18" />
      </DisplayValueWrapper>
    </Wrapper>
  );
};

export default Select;
