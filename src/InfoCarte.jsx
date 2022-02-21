import './InfoCarte.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function InfoCarte(props){
    return (
        <div className="InfoCarte">
            <h1>{props.titre}</h1>
            <h3>Modifié: {props.dateMod}</h3>
            <div className='InfoCarte__more'>
                <MoreVertIcon fontSize="large" />
            </div>
        </div>
    );
}