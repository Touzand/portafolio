import React, { useState } from "react";
import styled from "styled-components";
import WorkCard from "./Work-Card";
import '../index.css'

const Message = styled.h2`
  color: var(--50);
  margin-top: 1rem;
  font-size: var(--step--2);
  animation: fadeIn 0.4s 3s ease-in both;
  position: relative;
`;

const CardsContent = [
  {
    id: 1,
    bgimg: "http://imgfz.com/i/nw1gLqN.png",
    title: "Earthline",
    resume: "Earthline is a space company landingpage demo",
    pageUrl: "https://touzand.github.io/space-company/",
    codeUrl: "https://github.com/Touzand/space-company/tree/master",
    pseudoClass: "pseudoReact",
  },
  {
    id: 2,
    bgimg: "http://imgfz.com/i/X7TDAUC.png",
    title: "NoteNow",
    resume: "A notes app web application where you can save, edit and write notes using MarkDown",
    pageUrl: "https://touzand.github.io/notes-app/",
    codeUrl: "https://github.com/Touzand/notes-app",
    pseudoClass: "pseudoReact",
  },
  {
    id: 3,
    bgimg: "http://imgfz.com/i/O9fkGrU.png",
    title: "About hiking",
    resume: "A landing-page about hiking and things in that orbit",
    pageUrl: "https://touzand.github.io/about-hiking/",
    codeUrl: "https://github.com/Touzand/about-hiking",
    pseudoClass: "pseudoCss",
  },
  {
    id: 4,
    bgimg: "http://imgfz.com/i/zo7vRWP.png",
    title: "Border radius generator",
    resume: "Ease to use CSS border radius generator",
    pageUrl: "https://touzand.github.io/border-radius-generator/",
    codeUrl: "https://github.com/Touzand/border-radius-generator",
    pseudoClass: "pseudoReact",
  },
  {
    id: 5,
    bgimg: "http://imgfz.com/i/tR6ocKM.png",
    title: "Tool",
    resume: "Landingpage demo",
    pageUrl: "https://touzand.github.io/tool/",
    codeUrl: "https://github.com/Touzand/tool",
    pseudoClass: "pseudoCss",
  },
];

const Container = styled.div`
display: flex;
  flex-direction: column;
margin: 3rem 0;
`;

const startStaggered = 1;

const WorkContainer = () => {
  return (
    <Container className="flex-item">
      <Message>&#60; Work / &#62;</Message>
      {CardsContent.map((card) => (
        <WorkCard
          pseudoClass={card.pseudoClass}
          title={card.title}
          resume={card.resume}
          bgimg={card.bgimg}
          key={card.id}
          pageUrl={card.pageUrl}
          codeUrl={card.codeUrl}
          secondAnimation={startStaggered + `.${card.id}`}
        />
      ))}
    </Container>
  );
};

export default WorkContainer;
