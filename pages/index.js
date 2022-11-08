import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline"
import { useState,useEffect } from "react";
function HomePage() {
    /*   const mensagem = "Bem vindo, AluraTube";  */
    const EstiloPagina = {
        //   backgroundColor: "red" 
    };
    // console.log(config.playlists)
    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <Banner></Banner>
                <Menu></Menu>
                <Header ></Header>
                <Timeline playlist={config.playlists}></Timeline>

            </div>
        </>
    )
};

export default HomePage

const StyledHeader = styled.div`
  img {
        margin-top:50px;    
        width: 80px;
        height: 80px;
        border-radius: 50%;
  }
  .user-info{
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;
function Header() {
    return (

        <StyledHeader>
            <section className="user-info">
                {/*<img src="Banner" />*/}
                <img src={config.github} />
                <div>
                    <h2>
                        {config.name}
                    </h2>

                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
};
function Timeline(props) {
    //  console.log("Dentro do componente", props);
    const playlistName = Object.keys(props.playlist);
    return (
        <StyledTimeline>
            {playlistName.map((playlistName) => { //É um mapeamento de cada um dos itens,, funciona como um foreach
                const videos = props.playlist[playlistName]; //Pega cada valor através do índice do nome           return playlistName;
                console.log(videos)
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.thumb}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                );
                            })
                            }
                        </div>
                    </section>
                );
            })}
        </StyledTimeline>
    );
};
const StyledBanner = styled.div`
  img {
       margin-top:50px;    
       width: 1350px;
       height: 230px;
       object-fit: cover;

  }
`
const imgs =  ["https://images.unsplash.com/photo-1557463008-9e9f17d00bd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
"https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
"https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80",
"https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
"https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
"https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGNvZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
];

function Banner() {
    const [ImagemAtual, setImagemAtual] = useState(null);

    useEffect(() => {
        const Intervalo = setInterval(() => {
            setImagemAtual(imgs[Math.floor(Math.random() * imgs.length)]);
        }, 2000)
        
        return () => clearInterval(Intervalo);
    }, [])

    return (
        <StyledBanner>
            <img src={ImagemAtual} />
        </StyledBanner>
    );
}