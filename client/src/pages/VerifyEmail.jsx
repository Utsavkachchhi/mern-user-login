import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const VerifyEmail = () => {
  const [message, setMessage] = useState('');
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');

    if (token) {
      axios
        .post(`http://localhost:8000/api/verify-email?token=${token}`)
        .then((response) => {            
          setMessage(response?.data?.message ||'Email verified successfully!');
        })
        .catch((error) => {
            console.log('error',error?.response?.data?.message);
            
          setMessage(error?.response?.data?.message ||'Email verification failed. The link may have expired or is invalid.');
        });
    } else {
      setMessage('No verification token provided.');
    }
  }, [location.search]);

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};

export default VerifyEmail;
