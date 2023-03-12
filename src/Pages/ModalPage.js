import Modal from "../Components/Modal";
import Button from "../Components/Button";
import { useState} from "react";




function ModalPage(){
    const [showModal,setShowModal]=useState(false);

    const handleClick=()=>{
        setShowModal(!showModal);
    }

    const handleClose=()=>{
        setShowModal(!showModal);
    }
   
    
    const modal= <Modal handleClose={handleClose} buttonAccept={<Button primary onClick={handleClick}>Accept</Button>} buttonReject={<Button danger onClick={handleClick}>Reject</Button>}> 
        <p>This is important agreement you must need to accept it or reject it.</p>
    </Modal>;




    return (
        <div >
            {showModal && modal}
<Button onClick={handleClick} primary>Open Modal</Button>
            
            

            


        </div>
    )
}

export default ModalPage;