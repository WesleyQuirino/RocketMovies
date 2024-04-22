import { Container, Form, Markers, MarkersList } from './styles';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Marker } from '../../components/Marker';
import { BackLink } from '../../components/BackLink';
import { Button } from '../../components/Button';

export function CreateMovie(){
    const navigate = useNavigate();
    
    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ rating, setRating ] = useState("");
    const [ tags, setTags ] = useState([]);
    const [ newTag, setNewTag ] = useState("");

    async function handleAddMovie(){
        if(!title){
            return alert("Digite o titulo!")
        }
        try {
            await api.post("/movieNotes", {
                title,
                description,
                rating,
                tags
            });
        } catch( error ){
            if( error ){
                error.response.data.message;
            } else {
                alert("Não foi possivel salvar");
            }
        }

        navigate(-1);
    }

    function handleAddTags(){
        console.log("Estou nas tags", newTag);
        setTags(prev => [ ...prev, newTag ]);
        console.log("tags", tags);
        setNewTag("");
    }

    function handleDelete(){

        setTitle("");
        setDescription("");
        setRating("");
        setTags([]);

        navigate(-1);
    }

    return (
        <Container>
            <Header />
            <main>
                <BackLink title="Voltar" />
                <Title title="Novo filme"/>
                <Form>
                    <div>
                        <Input placeholder="Título" type="text" onChange={ e => setTitle( e.target.value )} />
                        <Input placeholder="Sua nota (de 0 a 5)" type="number" onChange={ e => setRating( e.target.value )} />
                    </div>
                    <TextArea placeholder="Observações:" onChange={ e => setDescription( e.target.value )} />
                    <Markers>
                        <h3>Marcadores</h3>
                        <MarkersList>
                            {
                                tags && 
                                tags.map( ( tag, index) => (
                                    <Marker 
                                        key={String(index)} 
                                        value={tag} 
                                    />
                                ))
                            }
                            <Marker isNew placeholder="Novo marcador" value={ newTag } onChange={ e => setNewTag( e.target.value )} onClick={ handleAddTags }/>
                        </MarkersList>
                    </Markers>
                    <div>
                        <Button title="Excluir filme!" del onClick={ handleDelete }/>
                        <Button title="Salvar filme!" onClick={ handleAddMovie }/>
                    </div>
                </Form>
            </main>
        </Container>
    )
}