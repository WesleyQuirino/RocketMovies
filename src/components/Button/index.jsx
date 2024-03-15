import { Container } from './styles';

export function Button({ title, del, icon: Icon, ...rest }) {
    return (
        <Container 
            type="button"
            $del = { del }
            { ...rest }
        >
            { Icon && <Icon size={20} /> }
            { title }
        </Container>
    )
}