import React from "react"

//componente = props
const TextoEstilizado = ({texto, cor}) => {
    const estilo = {
        color : cor,
        textTransform: "uppercase",

        fontSize: "200px",
        fontWeight: "bold",

        display: "flex",
        textAlign: "center",
        justifyContent: "center",
    }

    return (
        <div className="texto">
            <p style={estilo}>
                {texto}
            </p>
        </div> 
    )
}

export default TextoEstilizado