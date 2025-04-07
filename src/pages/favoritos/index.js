import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import './favoritos.css'
import { toast } from "react-toastify"

export default function Favoritos(){
    const [filmes, setFilmes] = useState([])

    useEffect(() =>{
        const movies = localStorage.getItem('@primeflix');
        setFilmes(JSON.parse(movies) || [])
    },[])


    function excluirFilme(id){
        let filtroFilmes = filmes.filter((item) =>{
            return(item.id !== id)
        })
        setFilmes(filtroFilmes);
        localStorage.setItem('@primeflix', JSON.stringify(filtroFilmes))
        toast.success("Filme removido com sucesso")
    }
    return(
        <div className="meus-filmes">
            <h1>Meus Filmes</h1>
            <ul>
                {filmes.map((filme) =>{
                    return(
                        <li key={filme.id}>
                            <span>{filme.title}</span>

                            <div>
                                <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                                <button onClick={() => excluirFilme(filme.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                } )}
            </ul>
        </div>
    )
}