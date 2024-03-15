import { FiStar } from 'react-icons/fi';
import { Container, Rating } from './styles';
import { Tags } from '../Tags';

export function Movies({ data, ...rest }){
    return (
        data.map( data =>
            <Container { ...rest } key={ data.id }>
                <div>
                    <h2>{ data.title }</h2>
                    <Rating>
                        <FiStar />
                        <FiStar />
                        <FiStar />
                        <FiStar />
                        <FiStar />
                    </Rating>
                </div>
                <p>{ data.description }</p>
                {
                    data.tags &&
                    <footer>
                        {
                            data.tags.map( tag => <Tags key={ tag.id } title={ tag.name } />)
                        }
                    </footer>
                }
            </Container>
        )
    )
}