import { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Container, Form, Background } from './styles';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignIn(){
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const { signIn } = useAuth();

    async function handleSignIn(){
        signIn({ email, password });
    }
    
    return (
        <Container>
            <Form>
                <h1>RockeMovies</h1>
                
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça Login</h2>

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={ FiMail }
                    onChange={ e => setEmail( e.target.value )}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={ FiLock }
                    onChange={ e => setPassword( e.target.value )}
                />
                <Button title="Entrar" onClick={ handleSignIn }/>
                <Link to="/register">
                    Criar conta
                </Link>
            </Form>
            <Background />
        </Container>
    );
}