import React from "react";
import Header from "../src/components/Header"
import config from "../config.json"
import { CSSReset } from "../src/components/CSSReset";
import styled from "styled-components";
export default function Video(props) {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <Header Pessoal={config}></Header>
                <Player></Player>
                <InfoVideo info="Apesar de Você - Francisco, el Hombre"></InfoVideo>

            </div>
        </>

    );
};
export const StyledTitulo = styled.p`
margin-top: 2rem;
margin-left: 2rem;
text-overflow: ellipsis;
display: -webkit-box;
white-space: normal;
font-family: Helvetica, sans-serif;
font-size: 1.5rem;
word-break: break-word;
max-height: 2.8rem;
line-height:2.8rem;


`;
export const StyledButton = styled.button`

`;

function activateLasers() {
    console.log("Teste");
    return (
        history.back()
    )
}

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: "white";
  color:  "black";
  font-size: 1em;
  margin: 1em;
  margin-top: 2.4rem;
  padding: 0.25em 1em;
  border-radius: 14px;
  width: 7rem;
  height:2em;
  transition: 0.4s;
  :hover{
    background-color: "gray"; /* Green */
    color: "white";
  }
`;
const Lado = styled.div`
display: flex;
`;

function InfoVideo(props) {
    return (
        <>
            
                <Lado>
                    <StyledTitulo>
                        {props.info}
                    </StyledTitulo>
                    <Button onClick={() => activateLasers()}>Voltar</Button>
                </Lado>




        </>

    )
};
const StyledVideo = styled.div`
 margin-left: 2rem;
 margin-top:2rem;
`;
function Player() {
    return (
        <StyledVideo>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/TTfOt-B25cA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>

            </iframe>
        </StyledVideo>
    )
};
