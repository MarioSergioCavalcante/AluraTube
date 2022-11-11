
import styled from "styled-components";

const StyledFav = styled.div`
img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
}
.user-info{
  display: block;
  align-items: center;
  width: 100%;
  padding: 16px 32px;    
}
`;
export default function Favoritos(props) {
  const fav_devs = Object.keys(props.favoritos);
  return (
      <StyledFav>

          <section key = {props.favoritos}>
              <h2>Favoritos</h2>
              <div>
                  {fav_devs.map((devs) => {
                      const pessoa = props.favoritos[devs]
                      // console.log(pessoa)

                      return (<a key = {pessoa.url} href={pessoa.url}>
                          <section className="user-info">
                              <div>
                                  <img src={pessoa.github} />
                                  <div>
                                      <h2>
                                          {pessoa.name}
                                      </h2>
                                      <p>
                                          {pessoa.job}
                                      </p>
                                  </div>
                              </div>
                          </section>
                      </a>)
                  })};
              </div>
          </section>

      </StyledFav>
  )
}