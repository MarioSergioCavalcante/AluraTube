import styled from "styled-components";

export const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: show;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;

export default function Timeline({ searchValue, ...props }) {
    //  console.log("Dentro do componente", props);
 
    const playlistName = Object.keys(props.playlist);
    return (
        <StyledTimeline>
            {playlistName.map((playlistName) => { //É um mapeamento de cada um dos itens,, funciona como um foreach
                const videos = props.playlist[playlistName]; //Pega cada valor através do índice do nome           return playlistName;
            //    console.log(videos)
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.filter((video) => {
                                const videoNorm = video.title.toLowerCase();
                                const buscaNorm = searchValue.toLowerCase();
                                return (videoNorm.includes(buscaNorm)
                                )
                            }).map((video) => {
                                return (
                                    <a key={video.url} href={video.url}>
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