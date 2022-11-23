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
import { createClient } from "@supabase/supabase-js";
import { videoService } from "../src/services/videoService";


function HomePage() {
    /*   const mensagem = "Bem vindo, AluraTube";  */
    const service = videoService();
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    const [playlists,setPlaylists] = React.useState({});

    React.useEffect(() => {
        service
        .getAllVideos()
        .then((dados) => {
            console.log(dados.data);
            const novaPlaylist = { ...playlists};
            dados.data.forEach((video) => {
                if (!novaPlaylist[video.playlist]) {
                    novaPlaylist[video.playlist] = [];
                }
                novaPlaylist[video.playlist].push(video);
            })
            setPlaylists(novaPlaylist);
        })
        .catch((err) => {
            console.log("Deu erro:", err);
        });
;
    },[]);
   console.log("Playlist prontos: ", playlists);


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
                <Timeline searchValue={valorDoFiltro} playlist={playlists}>
                    Conteúdo
                </Timeline>
                <Favoritos favoritos={config.favoritos}></Favoritos>
            </div>
        </>
    )
};

export default HomePage
