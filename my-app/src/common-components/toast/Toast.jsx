import React, { useState } from 'react';
import './ToastStyles.css';

const Toast = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [showDanger, setShowDanger] = useState(false);
   const showToast = (type) => {
    switch (type) {
      case 'success':
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
        break;
      case 'warning':
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 3000);
        break;
      case 'danger':
        setShowDanger(true);
        setTimeout(() => setShowDanger(false), 3000);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      {showSuccess && (
        <div className="toast success">
          <p>Success <br />
            Message </p>
        </div>
      )}
      {showWarning && (
        <div className="toast warning">
          <p>Warning <br /> Message</p>
        </div>
      )}
      {showDanger && (
        <div className="toast danger">
          <p>Danger <br /> Message</p>
        </div>
      )}

      <div className="buttons-div">
        <button onClick={() => showToast('success')}>Show Success Toast</button>
        <button onClick={() => showToast('warning')}>Show Warning Toast</button>
        <button onClick={() => showToast('danger')}>Show Danger Toast</button>
      </div>
    </div>
  );
};

export default Toast;
// import React, { useState } from 'react';
// import './ToastStyles.css';

//   const Toast = ({ showToastType, onClose }) => {
//   const [showToast, setShowToast] = useState(true);

//   const handleClose = () => {
//     setShowToast(false);
//     onClose(); 
//   };

//   return (
//     <div className={`toast ${showToastType} ${showToast ? 'show' : ''}`} onClick={handleClose}>
//       <p>{showToastType.charAt(0).toUpperCase() + showToastType.slice(1)} <br />
//         Message</p>
//     </div>
//   );
// };

// export const showToast = (type, onClose) => {
//   return <Toast showToastType={type} onClose={onClose} />;
// };

// export default Toast
