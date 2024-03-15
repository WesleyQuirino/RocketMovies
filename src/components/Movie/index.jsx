import { FiStar, FiClock } from 'react-icons/fi';
import { Container, Rating } from './styles';
import { Tags } from '../Tags';

export function Movie({ data, ...rest }){
    return (
        data.map( data =>
            <Container { ...rest } key={ data.id }>
                <div>
                    <h2>{ data.title }
                        <Rating>
                            <FiStar />
                            <FiStar />
                            <FiStar />
                            <FiStar />
                            <FiStar />
                        </Rating>
                    </h2>
                    <span><img src={ data.image } alt="Imagem do usúario" />Por { data.user } <FiClock /> { data.created_at }</span>
                </div>
                {
                    data.tags &&
                    <footer>
                        {
                            data.tags.map( tag => <Tags key={ tag.id } title={ tag.name } pink/>)
                        }
                    </footer>
                }
                {  
                    data.description.split(".\n").map((p, index) => (
                        <p key={index}>{p}</p>
                    ))
                }
            </Container>
        )
    )
}