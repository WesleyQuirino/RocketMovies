import { Container } from './styles';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export function BackLink({ title }){
    const navigate = useNavigate();

    function handleBack(){
        navigate(-1);
    }
    
    return (
        <Container>
            <FiArrowLeft />
            <button type="button" onClick={ handleBack }>{ title }</button>
        </Container>
    )
}