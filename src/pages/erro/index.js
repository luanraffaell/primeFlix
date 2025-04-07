import { Link } from "react-router-dom"
import './erro.css'

export function Erro(){
    return(
        <div className="page-error">
            <h1>404</h1>
            <h2>Página não encontrada!</h2>
            <Link to="/">Veja todos os filmes!</Link>
        </div>
    )
}