import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/Menu";
import { StyledTimeline } from "../src/Timeline"
import React from "react";
import Banner from "../src/Banner";
import Favoritos from "../src/Favoritos";
import Timeline from "../src/Timeline";
import Header from "../src/Header"
function HomePage() {
    /*   const mensagem = "Bem vindo, AluraTube";  */
    const EstiloPagina = {
        //   backgroundColor: "red" 
    };
    const [valorDoFiltro, setValorDoFiltro] = React.useState("a");



   // console.log("Dentro da Home: ", valorDoFiltro)
    return (
        <>
            <CSSReset />
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
