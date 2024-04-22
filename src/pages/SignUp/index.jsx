import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Container, Form, Background } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useState } from 'react';

export function SignUp(){
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const navigate = useNavigate();

    function handleSignUp(){
        if ( !name || !email || !password ){
            return alert("Nome , senha e email são obrigatórios!");
        }

        api.post("users", { name, email, password })
        .then(() => {
            alert("usuário cadastrado com sucesso!");
            navigate("/");
        }).catch( error => {
            if( error.response ){
                alert( error.reponse.data.message );
            } else {
                alert( "Não foi possível cadastrar!" );
            }
        })
    }
    return (
        <Container>
            <Form>
                <h1>RockeMovies</h1>
                
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={ FiUser }
                    required
                    onChange={ e => setName(e.target.value) }
                />
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={ FiMail }
                    required
                    onChange={ e => setEmail(e.target.value) }
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={ FiLock }
                    required
                    onChange={ e => setPassword(e.target.value) }
                />
                
                <Button title="Cadastrar" onClick={ handleSignUp }/>

                <Link to="/signIn">
                    <FiArrowLeft />
                     Voltar para o login
                </Link>
            </Form>
            <Background />
        </Container>
    );
}