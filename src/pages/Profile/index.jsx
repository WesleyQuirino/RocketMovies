import { Container, Form, Avatar, Section } from './styles';
import { FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { useState } from 'react';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api'; 

import userImgPlaceholder from '../../assets/avatar_placeholder.svg';
import { BackLink } from '../../components/BackLink';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile(){
    const { user, updateUser } = useAuth();

    const avatarUrl = user.avatar ? `${ api.defaults.baseURL }/files/${ user.avatar }` : userImgPlaceholder;

    const [ avatar, setAvatar ] = useState(avatarUrl);
    const [ avatarFile, setAvatarFile ] = useState( null );
    
    const [ name, setName ] = useState(user.name);
    const [ email, setEmail ] = useState(user.email);
    const [ oldPassword, setOldPassword ] = useState("");
    const [ newPassword, setNewPassword ] = useState("");

    async function handleUpdate(){
        const updated = {
            name: name,
            email: email,
            password: newPassword,
            oldPassword: oldPassword
        }

        const userUpdated = Object.assign( user, updated );

        await updateUser({ user: userUpdated, avatarFile })
    }

    function handleChangeAvatar(event){
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }
    
    return (
        <Container>
            <header>
                <BackLink title="voltar" />
            </header>
            <main>
                <Form>
                    <Avatar>
                        <img src={ avatar } alt={ name } />
                        <label htmlFor="userImg">
                            <FiCamera />
                            <input id="userImg" type="file" onChange={ handleChangeAvatar }/>
                        </label>
                    </Avatar>
                    <Section>
                        <Input icon={ FiUser } placeholder="Digite seu nome:" value={ name } onChange={ e => setName( e.target.value )}/>
                        <Input icon={ FiMail } placeholder="Digite seu email:" value={ email } onChange={ e => setEmail( e.target.value )}/>
                    </Section>
                    <Section>
                        <Input icon={ FiLock } placeholder="Senha:" onChange={ e => setOldPassword( e.target.value )}/>
                        <Input icon={ FiLock } placeholder="Repita sua senha:" onChange={ e => setNewPassword( e.target.value )}/>
                    </Section>
                    <Button title="Salvar" onClick={ handleUpdate }/>
                </Form>
            </main>
        </Container>
    )
}