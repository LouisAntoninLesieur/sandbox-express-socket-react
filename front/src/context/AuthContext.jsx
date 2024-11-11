import { createContext, useState, useEffect } from "react";

// Create a new context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  // Initialize the state variables
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState('');

  // Use the useEffect hook to listen for changes in the isAuthenticated state variable
  useEffect(() => {
    // Check if the user is authenticated

    // Get the token, username, and userId from localStorage
    const storedToken = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('username');
    const storedUserId = localStorage.getItem('userId');
    // If the token, username, and userId exist in localStorage, set the isAuthenticated state variable to true
    if (storedToken && storedUsername && storedUserId) {
      // Set the isAuthenticated state variable to true
      setIsAuthenticated(true);
      // Set the username and userId state variables
      setUsername(storedUsername);
      // Set the userId state variable
      setUserId(storedUserId);
    }
  }, []);

  const login = (token, username, userId) => {
    // Set the token, username, and userId in localStorage
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    localStorage.setItem('userId', userId);
    // Set the isAuthenticated state variable to true
    setIsAuthenticated(true);
    // Set the username and userId state variables
    setUsername(username);
    setUserId(userId);
  };

  const logout = () => {
    // Remove the token, username, and userId from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    // Set the isAuthenticated state variable to false
    setIsAuthenticated(false);
    // Set the username and userId state variables to empty strings
    setUsername('');
    setUserId('');
  };

  return (
    // Provide the AuthContext.Provider component with all the state variables and functions
    // children is a special prop that holds all the child components that are passed to the AuthProvider component
    // These child components will have access to the state variables and functions provided by the AuthContext.Provider component
    <AuthContext.Provider value={{ isAuthenticated, username, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;