import './Main.scss';
import Carte from './Carte';
import listeCartes from './data/listeCartes.json';
import BtnFab from './BtnFab';


export default function Main(props){
    return (
        <div className='Main'>
            {
                listeCartes.map(c => <Carte key={c.id} id={c.id} titre={c.titre} couleur={c.couleur} dateMod={c.dateMod}/>)
            }

            <BtnFab />
        </div>
    );
}