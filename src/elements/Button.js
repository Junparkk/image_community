import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    text,
    _onClick,
    is_float,
    children,
    margin,
    width,
    padding,
    disabled,
  } = props;
  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
      </React.Fragment>
    );
  }

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
  };
  return (
    <React.Fragment>
      <ElButton disabled={disabled} {...styles} onClick={_onClick}>
        {text ? text : children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: "100%",
  padding: "12px 0px",
  disabled: false,
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  background-color: #212121;
  color: #ffffff;
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: none;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  font-size: 40px;
  background-color: #77ddab;
  color: #fff;
  box-sizing: 36px;
  font-weight: 800;
  position: fixed;
  bottom: 50px;
  right: 16px;
  text-align: center;
  border: none;
  border-radius: 50%;
  vertical-align: middle;
`;

export default Button;
