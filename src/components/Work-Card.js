import React, { useState } from "react";
import styled from "styled-components";
import { Github, CodeSlash } from "@styled-icons/bootstrap";
import "../index.css";

const GitHub = styled(Github)`
  colo: red;
`;

const Message = styled.h2`
  color: var(--50);
  margin: 0.2rem 0;
  font-size: var(--step--2);
  position: relative;
`;

const ImgContainer = styled.div`
  margin-top: 0.4rem;
  height: 4px;
  width: 100%;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;

  img {
    width: 100%;
    height: auto;
    transition: all 5s ease-in-out;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 1;
    transition: all 0.5s ease;
  }
`;
const A = styled.a`
  display: inline-block;
  text-align: center;
  margin-top: 0.4rem;
  width: 50%;
  padding: 0.2rem;
  background-color: var(--20);
  text-transform: uppercase;
  font-weight: bold;
  color: var(--50);
  border: thin solid #2222;
  cursor: pointer;
`;

const Figure = styled.figure`
  background-color: var(--20);
  color: var(--light);
  padding: 0.5rem;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
  overflow: hidden;
margin: 0.25rem 0;
position:relative;

  &:hover ${ImgContainer} {
    height: 16rem;
  }

  &:hover ${ImgContainer}::after {
    opacity: 0;
  }

  &:hover img {
    margin-top: -30%;
  }
`;
function WorkCard({
  bgimg,
  title,
  resume,
  pageUrl,
  codeUrl,
  pseudoClass,
  secondAnimation,
}) {
  return (
    <Figure
      style={{ animation: `staggeredRight 1s ${secondAnimation}s ease both` }}>
      <h2>{title}</h2>
      <Message>{resume}</Message>
      <ImgContainer className={pseudoClass}>
        <img src={bgimg} alt="Image" />
      </ImgContainer>
      <A href={codeUrl} target="_blank">
        <GitHub size="16" />
      </A>
      <A href={pageUrl} target="_blank">
        <CodeSlash size="16" />
      </A>
    </Figure>
  );
}

export default WorkCard;
