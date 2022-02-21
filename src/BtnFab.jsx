import './BtnFab.scss';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function BtnFab(props){
    return (
        <div className='BtnFab'>        
            <Fab color="primary">
                <AddIcon />
            </Fab>
        </div>
    );
}