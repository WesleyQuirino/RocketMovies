import { Container, Form, Markers, MarkersList } from './styles';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Marker } from '../../components/Marker';
import { BackLink } from '../../components/BackLink';
import { Button } from '../../components/Button';

export function CreateMovie(){
    return (
        <Container>
            <Header />
            <main>
                <BackLink title="Voltar" />
                <Title title="Novo filme"/>
                <Form>
                    <div>
                        <Input placeholder="Título" type="text" />
                        <Input placeholder="Sua nota (de 0 a 5)" type="number" />
                    </div>
                    <TextArea placeholder="Observações:"/>
                    <Markers>
                        <h3>Marcadores</h3>
                        <MarkersList>
                            <Marker value="React"/>
                            <Marker isNew placeholder="Novo marcador"/>
                        </MarkersList>
                    </Markers>
                    <div>
                        <Button title="Excluir filme" del />
                        <Button title="Salvar alterações"/>
                    </div>
                </Form>
            </main>
        </Container>
    )
}