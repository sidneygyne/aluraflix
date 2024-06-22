import Inicio from "pages/Inicio";

const { default: Cabecalho } = require("componentes/Cabecalho");

function PaginaBase() {
    return (
        <main>
            <Cabecalho/>
            <Inicio/>
        </main>
    )
}

export default PaginaBase