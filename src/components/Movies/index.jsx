import { FiStar } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Rating } from './styles';
import { Tags } from '../Tags';
import { useState } from 'react';

export function Movies({ data, tagToSearch, ...rest }){
    const [ tagSelected, setTagSelected] = useState("");
    function handleRating(){
        const arrRating = [];

        for ( let i = 1; i <= 5; i++) {
           arrRating.push(<FiStar key={ String(i)} className={i <= data.rating ? 'fill' : 'fill-transparent' }/>)
        }
        
        return(arrRating);
    }

    function selectTag( tag ){
        tagSelected == tag ? setTagSelected("") : setTagSelected(tag);
    }
    
    return (
            <Container { ...rest } key={ data.id }>
                <div>
                    <h2><Link to={`/moviePreview/${ data.id }`}>{ data.title }</Link></h2>
                    <Rating>
                        {
                            handleRating()
                        }
                    </Rating>
                </div>
                <p>{ data.description }</p>
                {
                    data.tags &&
                    <footer>
                        {   
                            data.tags.map( tag => <Tags key={ tag.id } title={ tag.name } pink={ tag.name == tagSelected ? true : false } onClick={ e => {
                                tagToSearch( e.target.value );
                                selectTag( e.target.value );
                            }}/>)
                        }
                    </footer>
                }
            </Container>
    )
}