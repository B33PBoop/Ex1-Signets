import './InfoCarte.scss';

export default function InfoCarte(props){
    return (
        <div className="InfoCarte">
            <h1>{props.titre}</h1>
            <h3>Modifié: {props.dateMod}</h3>
        </div>
    );
}