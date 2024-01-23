import React from 'react';
import './ToastStyles.css';

const Toast = ({ showSuccess, setshowSuccess }) => {
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
