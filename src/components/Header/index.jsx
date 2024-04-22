import { Container, Profile } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { Input } from '../Input';
export function Header({ searched }){
    const { signOut, user } = new useAuth();
    const avatarUrl = user.avatar ? `${ api.defaults.baseURL }/files/${ user.avatar }` : userImgPlaceholder;
    const navigate = useNavigate();

    function handleSignOut(){
        navigate("/");
        signOut();
    }

    return(
        <Container>
            <h2>RocketMovies</h2>
            <Input
                placeholder="Pesquisar pelo título"
                type="text"
                onChange={ (e) => searched( e.target.value ) }
            />
            <Profile>
                <p>
                    <Link to="/profile">
                        { user.name }
                    </Link>
                    <button type="button" onClick={ handleSignOut }>
                        <span>Sair</span>
                    </button>
                </p>
                <img src={avatarUrl} alt={ user.name } />
            </Profile>
        </Container>
    )
}