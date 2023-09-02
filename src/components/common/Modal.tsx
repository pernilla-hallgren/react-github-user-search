import { FC, ReactNode }from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}
 
const Modal: FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className='modal-overlay'>
        <div className='modal-content'>
          <FontAwesomeIcon    
              icon={faXmark}
              className='modal-close'
              onClick={onClose}
              size='lg' 
            />
          {children}
        </div>
    </div>
  );
};

export default Modal;