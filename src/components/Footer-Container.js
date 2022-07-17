import React, { useState } from "react";
import styled from "styled-components";
import "../index.css";

const Email = {
color: "var(--light)",
fontSize:"var(--step--1)",
textAlign:"right",
margin:".2rem 0",
textDecoration:"none",
display:"block",
animation:'staggeredRight 1s 2.5s ease both'
};

const Message = styled.h2`
  color: var(--50);
  margin: .5rem 0;
  font-size: var(--step--2);
  animation: fadeIn 0.4s 1.9s ease-in both;
position: relative;
text-align:right;
`;

const Footer = () => {
  return (
    <div style={{position:'relative',bottom:'0',right:'0'}}>
      <Message>Fire me a line ✉️</Message>
      <a style={Email} href = "mailto: alan.alongo.gaf15@gmail.com">alan.alonso.gaf15@gmail.com</a>
      <a style={Email} href="https://www.linkedin.com/in/alangalonso/" target="_blank">LinkedIn</a>
    </div>
  );
};

export default Footer;
