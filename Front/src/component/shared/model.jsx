import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';


const Model = ({ title, handleClose, open, children }) => {

    return (
        <div>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{title}</DialogTitle>
                {children}
            </Dialog>
        </div>
    );
}
export default Model;