import React from "react";
import styled from "styled-components";

const StyledBanner = styled.div`
  img {
       width: 1350px;
       height: 230px;
       position: relative;
       background-size: 100% 100%;
       object-fit:cover;

  }
`

export default function Banner(props) {
 //   console.log(props.imags[0].url); 
    const [ImagemAtual, setImagemAtual] = React.useState(props.imags[0].url );

    React.useEffect(() => {
      //  console.log("Use Effects: ", props)
        const Intervalo = setInterval(() => {;
            
            setImagemAtual(props.imags[Math.floor(Math.random() * props.imags.length)].url);
        }, 2000)

        return () => clearInterval(Intervalo);
    }, [])

    return (
        <StyledBanner>
            <img src={ImagemAtual}  />
        </StyledBanner>
    );
}
