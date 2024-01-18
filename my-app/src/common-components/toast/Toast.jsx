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

  const handleShowToast = (type) => {
    showToast(type);
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
        <button onClick={() => handleShowToast('success')}>Show Success Toast</button>
        <button onClick={() => handleShowToast('warning')}>Show Warning Toast</button>
        <button onClick={() => handleShowToast('danger')}>Show Danger Toast</button>
      </div>
    </div>
  );
};

export default Toast;
