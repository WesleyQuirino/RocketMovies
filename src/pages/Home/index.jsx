import { FiPlus } from 'react-icons/fi';
import { Container } from './styles';
import { Header } from '../../components/Header';
import { Title } from '../../components/Title';
import { Movies } from '../../components/Movies';

export function Home(){
    return (
        <Container>
            <Header />
            <main>
                <Title title="Meus Filmes" btnTitle="Adicionar filme" linkTo="/createMovie" icon={ FiPlus } />
                <section>
                    <Movies
                        data={[{
                            id:0,
                            title: "Interestellar",
                            description:"Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se ",
                            tags: [
                                {
                                    id: 0,
                                    name: "Ficção Cientifica"
                                },
                                {
                                    id: 1,
                                    name: "Drama"
                                },
                                {
                                    id: 2,
                                    name: "Familia"
                                }
                            ]
                        },
                        {
                            id:1,
                            title: "Rambo",
                            description:"Rambo um lutador",
                            tags: [
                                {
                                    id: 0,
                                    name: "Ação"
                                },
                                {
                                    id: 1,
                                    name: "Drama"
                                },
                                {
                                    id: 2,
                                    name: "Familia"
                                }
                            ]
                        },
                        {
                            id:2,
                            title: "Toy Story",
                            description:"Ah uma missão num espaço não explorado, VAMOS LA!",
                            tags: [
                                {
                                    id: 0,
                                    name: "Familia"
                                }
                            ]
                        }
                    ]}
                    />
                </section>
            </main>
        </Container>
    )
}