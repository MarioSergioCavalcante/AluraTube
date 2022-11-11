import styled from "styled-components";
const StyledHeader = styled.div`

  img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
  }
  .user-info{
    display: flex;
    align-items: center;
    width: 50%;
    padding: 16px 32px;
    gap: 16px;
  };
  background-color: ${({theme})=> theme.backgroundLevel1};
`;
export default function Header(props) {
    return (

        <StyledHeader>
            <section className="user-info">
                {/*<img src="Banner" />*/}
                <img src={props.Pessoal.github} />
                <div>
                    <h2>
                        {props.Pessoal.name}
                    </h2>

                    <p>
                        {props.Pessoal.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
};


