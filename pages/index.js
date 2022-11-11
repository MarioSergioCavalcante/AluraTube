import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline"
import React from "react";
import Banner from "../src/components/Banner";
import Favoritos from "../src/components/Favoritos";
import Timeline from "../src/components/Timeline";
import Header from "../src/components/Header"
function HomePage() {
    /*   const mensagem = "Bem vindo, AluraTube";  */
    const EstiloPagina = {
        //   backgroundColor: "red" 
    };
    const [valorDoFiltro, setValorDoFiltro] = React.useState("a");



   // console.log("Dentro da Home: ", valorDoFiltro)
    return (
        <>
           
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <Banner imags = {config.bg}></Banner>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}></Menu>
                <Header Pessoal = {config}></Header>
                <Timeline searchValue={valorDoFiltro} playlist={config.playlists}>
                    Conteúdo
                </Timeline>
                <Favoritos favoritos={config.favoritos}></Favoritos>
            </div>
        </>
    )
};

export default HomePage
