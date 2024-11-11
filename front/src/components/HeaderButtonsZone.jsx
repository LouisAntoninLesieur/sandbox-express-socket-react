import "../styles/header.css";
import { useState } from "react";
import axiosInstance from "../utils/axios";
import useAuth from "../hooks/useAuth.js";

export default function HeaderButtonsZone() {
  // Use the useAuth hook to access the isAuthenticated, login, and logout functions
  const { isAuthenticated, login, logout } = useAuth();
  // Initialize the isModalOpen state variable to false
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const handleModalOpen = () => {
    // Check if the user is not authenticated
    // If the user is not authenticated, set the isModalOpen state variable to true (means the modal is openable diplaying the login and signup forms)
    if (!isAuthenticated) {
      setIsModalOpen(true);
    }
  };

  // Function to handle the signup form submission
  const handleSignup = async (event) => {
    event.preventDefault();
    // Get the form data
    const formData = new FormData(event.currentTarget);
    // Get the username, email, and password from the form data
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      // Send a POST request to the /auth/signup endpoint with the username, email, and password
      await axiosInstance.post("auth/signup", { username, email, password });
      // Close the modal
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle the login form submission
  const handleLogin = async (event) => {
    event.preventDefault();
    // Get the form data
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      // Send a POST request to the /auth/login endpoint with the email and password
      const response = await axiosInstance.post("auth/login", {
        email,
        password,
      });
      // Get the token, userId, and username from the response data
      const { token, userId, username } = response.data;
      // Call the login function with the token, username, and userId
      login(token, username, userId);
      // Close the modal
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="header-buttons-area">
      {isAuthenticated ? (
        // If the user is authenticated, display the disconnect button
        // When the disconnect button is clicked, call the logout function (the method comes from the useAuth hook)
        <button className="disconnect-button" onClick={logout}>
          .disconnect
        </button>
      ) : (
        // If the user is not authenticated, display the connect button
        <button className="profile-button" onClick={handleModalOpen}>
          .connect
        </button>
      )}

      {/* If the modal is open and the user is not authenticated, display the modal */}
      {isModalOpen && !isAuthenticated && (
        <div>
          <div className="modal" hidden={!isModalOpen}>
            <div className="modal-content">
              <span className="close" onClick={() => setIsModalOpen(false)}>
                &times;
              </span>
              <div className="modal-body">
                <div className="modal-signup">
                  <h2>.join now</h2>
                  <form
                    className="signup-form"
                    action="POST"
                    onSubmit={handleSignup}
                  >
                    <input type="text" placeholder="Username" name="username" />
                    <input type="email" placeholder="Email" name="email" />
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                    />
                    <button type="submit">Sign Up</button>
                  </form>
                </div>
                <div className="modal-login">
                  <h2>.connect</h2>
                  <form
                    className="login-form"
                    action="POST"
                    onSubmit={handleLogin}
                  >
                    <input type="email" placeholder="Email" name="email" />
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                    />
                    <button type="submit">Log In</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
