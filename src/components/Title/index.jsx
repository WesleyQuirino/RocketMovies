import { Container } from './styles';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

export function Title({ title, btnTitle = null, linkTo, icon: Icon}){
    return (
        <Container>
            <h1>{ title }</h1>
            { btnTitle && 
                <Link to={ linkTo } >
                    <Button title={ btnTitle } icon={Icon}/>
                </Link>
            }
        </Container>
    )
}