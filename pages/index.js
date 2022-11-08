import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import {StyledTimeline} from "../src/components/Timeline"
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
            <Menu></Menu>
            <Header></Header>
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