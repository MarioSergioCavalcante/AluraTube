import { useState } from "react";
import { StyledRegisterVideo } from "./styles";
//Whiteboard
//Custom Hook
function useForm(propsDoForm) {
    const [values, setValues] = useState(propsDoForm.InitialValues);
    const [videoThumb, setThumb] = useState("");


    return {
        values,
        videoThumb,
        handleChange: (evento) => {
            const value = evento.target.value;
            const name = evento.target.name;
            setValues({
                ...values,
                [name]: value,
            });
            {
                [name] == "url" ?
                setThumb("https://img.youtube.com/vi/" + value.split("=")[1] + "/hqdefault.jpg")
              
                : console.log("Titulo");
            }
        },
        clearForm() {
            setValues({});
            setThumb({});
        }
    };

}
export default function RegisterVideo() {
    //Falta o botão para adicionar
    //Modal
    //Precisamos controlar o State
    //Formulário em si
    const [formVisivel, setVisivel] = useState(false);
    const formCadastro = useForm({ InitialValues: { titulo: "", url: "", thumb: "" } });
    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setVisivel(true)} >
                +
            </button>
            {formVisivel ? (
                <form onSubmit={(evento) => {
                    evento.preventDefault();
                    formCadastro.clearForm();
                    console.log(formCadastro.videoThumb);
                    setVisivel(false);
                }}>
                    <div>
                        <button type="button" className="close-modal" onClick={() => setVisivel(false)}>
                            X
                        </button>
                        <input
                            placeholder="Titulo do vídeo"
                            name="titulo"
                            value={formCadastro.values.titulo}
                            onChange={formCadastro.handleChange}
                        />
                        <input
                            placeholder="URL"
                            name="url"
                            value={formCadastro.values.url}
                            onChange={formCadastro.handleChange}
                        />
                        <img src={formCadastro.videoThumb}/>
                        <button type="submit">
                                Cadastrar
                            </button>
                        </div>
                    </form>
            )
                : false}

        </StyledRegisterVideo>
    );
}