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
          <p>Success Message</p>
        </div>
      )}
      {showWarning && (
        <div className="toast warning">
          <p>Warning Message</p>
        </div>
      )}
      {showDanger && (
        <div className="toast danger">
          <p>Danger Message</p>
        </div>
      )}

      <div className="buttons-bottom">
        <button onClick={() => showToast('success')}>Show Success Toast</button>
        <button onClick={() => showToast('warning')}>Show Warning Toast</button>
        <button onClick={() => showToast('danger')}>Show Danger Toast</button>
      </div>
    </div>
  );
};

export default Toast;
