import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  box-shadow: rgb(0 0 0 / 10%) 0px 20px 25px, rgb(0 0 0 / 4%) 0px 10px 10px;
  margin-bottom: 80px;
  padding: 0 20px;
`;

const Title = styled.h1``;

const Header = () => {
  return (
    <Wrapper>
      <Title>Design a cup</Title>
    </Wrapper>
  );
};

export default Header;
