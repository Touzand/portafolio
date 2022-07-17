import styled, { keyframes } from "styled-components";
import React, { useState } from "react";
import "../textFluid.css";
import "../index.css";

const Container = styled.div`
  text-align: left;
  position: relative;
`;

const Message = styled.h2`
  color: var(--50);
  margin: 1rem 0;
  font-size: var(--step--2);
  animation: fadeIn 0.4s 2.9s ease-in both;
  position: relative;
`;

const Title = styled.h2`
  color: var(--light);
  font-size: var(--step-4);
  position: relative;
`;

const Text = styled.h4`
  color: var(--light);
  font-size: var(--step--1);
  position: relative;
`;

const Tag = styled.span`
padding:.5rem;
margin:.25rem;
border-radius:.25rem;
background-color:var(--20);
color:var(--50);
font-size:var(--step--2)
font-Weidht:900;
position:relative;

&::after{
content:"";
position:absolute;
width:4px;
height:4px;
top:0;
left:0;
}
`;

const IntroContainer = () => {
  return (
    <Container>
      <Message>- - Temporary website</Message>
      <div style={{ margin: "3rem 0"}}>
      <Text style={{animation:"staggeredUp .5s .5s ease both"}}>Hi, mi name is</Text>
      <Title style={{animation:"staggeredUp .5s .8s ease both"}}>Alan G. Alonso</Title>
      <Text style={{animation:"staggeredUp .5s 1s ease both"}}>Im a fron-end developer</Text>
      <Text style={{animation:"staggeredUp .5s 1.5s ease both"}}>based in Brasil</Text>
      </div>

      <div style={{ margin: "3rem 0",display:"flex",flexWrap:"wrap"}}>
        <Tag className="pseudoJs" style={{animation:"staggeredRight .5s 1s ease both"}}>Javascript</Tag>
        <Tag className="pseudoReact" style={{animation:"staggeredRight .5s 1.4s ease both"}}>React</Tag>
        <Tag className="pseudoHtml" style={{animation:"staggeredRight .5s 1.6s ease both"}}>Html</Tag>
        <Tag className="pseudoCss" style={{animation:"staggeredRight .5s 2s ease both"}}>Css</Tag>
      </div>

      <div style={{ margin: "3rem 0"}}>
      <Message style={{ marginBottom: 0 }}>&#60; About me / &#62;</Message>
      <Text style={{animation:"staggeredUp .5s .6s ease both"}}>
        I am a self-taught student currently <br/> focused on technologies like
        React.js
      </Text>
      </div>
    </Container>
  );
};

export default IntroContainer;
