import { Container, Profile } from './styles';
import { Link } from 'react-router-dom';
import { SignIn } from '../../pages/SignIn';

import { Input } from '../Input';
export function Header(){
    return(
        <Container>
            <h2>RocketMovies</h2>
            <Input
                placeholder="Pesquisar pelo título"
                type="text"
            />
            <Profile>
                <p>
                    <Link to="/user">
                        Wesley Quirino
                    </Link>
                    <Link to="/signIn">
                        <span>Sair</span>
                    </Link>
                </p>
                <img src="https://github.com/WesleyQuirino.png" alt="" />
            </Profile>
        </Container>
    )
}