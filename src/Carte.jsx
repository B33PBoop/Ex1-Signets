import './Carte.scss';
import InfoCarte from './InfoCarte';
import SortIcon from '@mui/icons-material/Sort';

export default function Carte(props){
    return (
        <div className='Carte' style={{backgroundColor: props.couleur}}>
            <img src={"images-cartes/" + props.id + ".png"} alt={props.key} className='Carte__image'/>
            <InfoCarte titre={props.titre} dateMod={props.dateMod} />
            <div className='Carte__sort'>
                <SortIcon />
            </div>
        </div>
    );
}