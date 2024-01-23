import React, { useState } from 'react';
import './ToastStyles.css';

const Toast = ({
  showSuccess, setShowSuccess
}) => {
  const showToast = (type) => {
    switch (type) {
      case 'success':
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
        break;
    }
  };
  return (
    <div>
      {showSuccess && (
        <div className="toast success">
          <p>Checkout <br />
            Successfully </p>
        </div>
      )}
    </div>
  );
};

export default Toast;
