import React from "react";


export default function Cuerpo(){


    let memeTemplate = {
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    } //primer meme


    let [meme,setMeme] = React.useState(memeTemplate);

    function cambiar(event){
        let {name,value} = event.target;
        setMeme((anterior)=>{
            return {
                ...anterior,
                [name]:value
            }
        })
    }

    


    let [todosLosMemes,setTodoLosMemes] = React.useState();

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then((datos)=>setTodoLosMemes(()=>datos.data.memes))
    },[])

    function mostrarMeme(){
        let memesLista = todosLosMemes;
        let numeroRandom = Math.round(Math.random()*(memesLista.length-1))
        let url = memesLista[numeroRandom].url
        setMeme((Objecto)=>{
            return {
                ...Objecto,
                randomImage:url
            }
        })
    }

    return(
        <main className="cuerpo">
            <form name="formularios" className="forms" action="#">

                <input 
                    type="text"
                    name="topText"
                    value={meme.topText}
                    onChange={cambiar}
                    placeholder="Shut Up"
                    className="boton input-text shut-up"
                />
                
                <input 
                    type="text" 
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={cambiar}
                    placeholder="and take my money"
                    className="boton input-text takem-money"
                />
                
                <button 
                    onClick={mostrarMeme} 
                    id="bot" 
                    className="boton get-img-but" 
                    name="get-img-but">

                        Get a new meme image 
                        <img 
                            className="boton-icono" 
                            src="https://cdn-icons-png.flaticon.com/128/595/595628.png" 
                            alt="icono"
                        />
                </button>

            </form>
            <div className="caja">
                
                <img className="imagen-random" src={meme.randomImage} id="meme" alt="imagen"/>

                <h2 className="texto">{meme.topText}</h2>
                <h2 className="textoDos">{meme.bottomText}</h2>

            </div>
        </main>
    )
};


