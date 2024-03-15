import { Container, Form, Avatar, Section } from './styles';
import { FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { BackLink } from '../../components/BackLink';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile(){
    return (
        <Container>
            <header>
                <BackLink to="/" title="voltar" />
            </header>
            <main>
                <Form>
                    <Avatar>
                        <img src="https://github.com/WesleyQuirino.png" alt="Imagem do usuário" />
                        <label htmlFor="userImg">
                            <FiCamera />
                            <input id="userImg" type="file" />
                        </label>
                    </Avatar>
                    <Section>
                        <Input icon={ FiUser } placeholder="Digite seu nome:" />
                        <Input icon={ FiMail } placeholder="Digite seu email:" />
                    </Section>
                    <Section>
                        <Input icon={ FiLock } placeholder="Senha:" />
                        <Input icon={ FiLock } placeholder="Repita sua senha:" />
                    </Section>
                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>
    )
}