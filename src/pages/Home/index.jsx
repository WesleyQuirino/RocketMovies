import { FiPlus } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';
import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import { Movies } from '../../components/Movies';

export function Home(){
    const [ tagSelected, setTagSelected ] = useState("");
    const [ search, setSearch ] = useState("");
    const [ movies, setMovies ] = useState([]);

    function selectTag( e, isSelected ){
        if( tagSelected == "" ){
            setTagSelected(e)
        } else{
            setTagSelected("")
        }
    }

    useEffect(() => {
        async function getMovies(){
            const response = await api.get(`/movieNotes?title=${ search }&tags=${ tagSelected }`);
            setMovies(response.data);
        }
        console.log(tagSelected, search);
        getMovies();
    }, [ tagSelected, search ])

    return (
        <Container>
            <Header searched={ setSearch } />
            <main>
                <Title title="Meus Filmes" btnTitle="Adicionar filme" linkTo="/createMovie" icon={ FiPlus } />
                <section>
                    {
                        movies.map( movie =>(
                            <Movies data={ movie } key={ String(movie.id) } tagToSearch={ selectTag }/>
                        ))
                    }
                </section>
            </main>
        </Container>
    )
}