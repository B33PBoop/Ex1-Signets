import './Utilisateur.scss';
import Avatar from '@mui/material/Avatar';

export default function Utilisateur(props){
    return (
        <div className='Utilisateur'>
            <h2>Jean-Romain Roy</h2>
            <Avatar>JR</Avatar>
        </div>
    );
}