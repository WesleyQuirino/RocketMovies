import { Container } from './styles';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export function BackLink({ title }){
    return (
        <Container>
            <FiArrowLeft />
            <Link to="/" >{ title }</Link>
        </Container>
    )
}