import { FiStar, FiClock } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { Container, Rating } from './styles';
import { Tags } from '../Tags';

export function Movie({ movie, ...rest }){
    const { user } = useAuth();
    const avatarUrl = user.avatar ? `${ api.defaults.baseURL }/files/${ user.avatar }` : userImgPlaceholder;

    function handleRating(){
        const arrRating = [];

        for ( let i = 1; i <= 5; i++) {
           arrRating.push(<FiStar key={ String(i)} className={i <= movie.rating ? 'fill' : 'fill-transparent' }/>)
        }
        
        return(arrRating);
    }
    console.log("movie.rating", movie.rating, handleRating());
    return (
            <Container { ...rest } key={ movie.id }>
                <div>
                    <a>{ movie.title }
                        <Rating>
                            {
                                handleRating()
                            }
                        </Rating>
                    </a>
                    <span><img src={ avatarUrl } alt={ user.name } />Por { user.name } <FiClock /> { movie.created_at }</span>
                </div>
                {
                    movie.tags &&
                    <footer>
                        {
                            movie.tags.map( tag => <Tags key={ tag.id } title={ tag.name } pink />)
                        }
                    </footer>
                }
                <p>{movie.description}</p>
            </Container>
    )
}