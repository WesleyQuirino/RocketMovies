import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { api } from '../../services/api';

import { Container } from './styles';
import { Header } from '../../components/Header';
import { BackLink } from '../../components/BackLink';
import { Movie } from '../../components/Movie';

export function MoviePreview(){
    const [ movie, setMovie ] = useState([]);
    const params = useParams();

    useEffect(()=>{
        async function fetchMovie(){
            try {
                const response = await api.get(`/movieNotes/${ params.id }`);
                setMovie( response.data );
                console.log(response.data);
            } catch ( error ){
                if( error ){
                    alert( error.response.data.message );
                } else{
                    alert("Filme não encontrado!");
                }
            }
        }
        fetchMovie();
    },[])
    return (
        <Container>
            <Header />
            <main>
                <BackLink title="voltar"/>
                {   
                    movie && 
                    <Movie movie={ movie } />
                }
            </main>
        </Container>
    )
}