import styled from "styled-components";
import IntroContainer from "./components/Intro-Container";
import WorkContainer from "./components/Work-Container";
import Footer from "./components/Footer-Container";
import './index.css'

const Container = styled.div``;

function App() {
return (
<Container>
  <div className="flex">
      <IntroContainer className="flex-item"/>
      <WorkContainer className="flex-item"/>
  </div>
      <Footer/>
    </Container>
  );
}

export default App;
