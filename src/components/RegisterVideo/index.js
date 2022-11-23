import { useState } from "react";
import { StyledRegisterVideo } from "./styles";
import { createClient } from '@supabase/supabase-js'

//Whiteboard
//Custom Hook
function getThumb(value) {
    let element = document.getElementById("Image");
    let hiden = element.getAttribute("hidden");
    element.removeAttribute("hidden");
    return `https://img.youtube.com/vi/${value.split("=")[1]}/hqdefault.jpg`
}
function useForm(propsDoForm) {
    const [values, setValues] = useState(propsDoForm.InitialValues);


    return {
        values,
        handleChange: (evento) => {
            const value = evento.target.value;
            const name = evento.target.name;
            if ([name] == "url") {
                setValues({
                    ...values,
                    url: value,
                    thumb: getThumb(value),
                });

            } else {
                setValues({
                    ...values,
                    [name]: value,
                });
            }

        },
        clearForm() {
            setValues({});
        }
    };

}
const PROJECT_URL = "https://jadyvwvbmetyplpzycgn.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphZHl2d3ZibWV0eXBscHp5Y2duIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkxNzk4MTMsImV4cCI6MTk4NDc1NTgxM30.C1vSRi2zoXH6veOaLCALF_T4MiEAM2nKfGO6WqtvDNU"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export default function RegisterVideo() {
    const [formVisivel, setVisivel] = useState(false);
    const formCadastro = useForm({ InitialValues: { titulo: "", url: "", thumb: "", playlist: "" } });

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setVisivel(true)} >
                +
            </button>
            {formVisivel ? (
                <form onSubmit={(evento) => {
                    evento.preventDefault();
                    formCadastro.clearForm();
                    supabase.from("video").insert({
                        title: formCadastro.values.titulo,
                        url: formCadastro.values.url,
                        thumb: formCadastro.values.thumb,
                        playlist: formCadastro.values.playlist,
                    }).then((res) => {
                        console.log(res);
                    }).catch((err) => {
                        console.log("Deu erro:", err,);
                    });
                    console.log(formCadastro.values);
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
                        <input
                            placeholder="Playlist"
                            name="playlist"
                            value={formCadastro.values.playlist}
                            onChange={formCadastro.handleChange}
                        />
                        <img src={formCadastro.values.thumb} alt="Thumb do vídeo" id="Image" hidden="hidden" />
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