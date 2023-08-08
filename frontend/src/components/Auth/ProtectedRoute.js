// ProtectedElement.js
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('access_token');
  const navigate = useNavigate();
  console.log("the token", token)
  useEffect(() => {
        if (!token) {
            navigate('/login');
        }
        }, [token, navigate]);

    if (!token) {
    return null; // This will render nothing until the useEffect above runs
    }

    return children;
}


export default ProtectedRoute;
