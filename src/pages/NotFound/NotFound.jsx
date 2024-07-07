import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => navigate('/'), 3000);
  }, []);

  return (
    <div className='notfound'>
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>Redirecting to the home page...</p>
    </div>
  );
};

export default NotFound;