import { Container } from './styles';

export function Tags({ title, pink = false,...rest }){
    return (
        <Container 
            $pink ={ pink }
            { ...rest }
        >
            { title }
        </Container>
    )
}