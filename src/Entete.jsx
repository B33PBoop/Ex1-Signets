import './Entete.scss';
import Utilisateur from './Utilisateur';

export default function Entete(props){
    return(
        <header className='Entete'>
            <h1>Signets</h1>
            <Utilisateur />
        </header>
    );
}