import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import './filme.css';
import { toast } from 'react-toastify';

function Filme(){
    const { id } = useParams();
    const  navigate  = useNavigate();
    const [filme, setFilme] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilme(){
            await api.get(`movie/${id}`,{
                params:{
                    api_key: process.env.REACT_APP_TMDB_API_KEY,
                    language:'pt-BR'
                }
            }).then(response =>{
                setFilme(response.data);
                setLoading(false);
            }).catch((err) =>{
                console.log("FILME NÃO ENCONTRADO");
                navigate('/',{replace:true});
            })
        }
        loadFilme();

        return () =>{}
    },[id,navigate]);
    
    if(loading){
        return(
            <div className='loading'>
                <h2>Carregando detalhes...</h2>
            </div>
        )
    }

    function salvarFilme(){
        const minhaLista = localStorage.getItem('@primeflix');
        const filmeSalvo = JSON.parse(minhaLista) || [];

        const hasFilme = filmeSalvo.some((filmeStorage) => filmeStorage.id === filme.id);

        if(hasFilme){
            toast.warn("Filme já está na sua lista");
            return;
        }
        filmeSalvo.push(filme);
        localStorage.setItem('@primeflix',JSON.stringify(filmeSalvo));
        toast.success("Filme salvo com sucesso");
    }
    return (
        <div className='filme-info'>
            <h1>{filme?.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme?.backdrop_path}`} alt={filme?.title}/>

            <h3>Sinopse</h3>
            <span>{filme?.overview}</span>
            <strong>Avaliação: {filme?.vote_average} / 10</strong>
            <div className='area-buttons'>
                <button onClick={salvarFilme}>Salvar</button>
                <a target="_blank" rel="noreferrer" href={`https://www.youtube.com/results?search_query=${filme.title} trailer`} >Trailer</a>
            </div>
        </div>
    )
}

export default Filme;