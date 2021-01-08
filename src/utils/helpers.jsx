import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


export const notify = (reason, message, id, autoClose = false) => {
    toast.configure(); 
    if (!toast.isActive(id)) {
        (toast)[reason](message, { toastId: id, autoClose: autoClose ? autoClose : toastautoClose,  hideProgressBar: true, });
    }
};

export const toastautoClose = '4500';