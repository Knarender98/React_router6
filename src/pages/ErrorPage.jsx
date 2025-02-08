import { Link, useNavigate } from "react-router-dom";
import "./ErrorPage.css"; // Import the CSS file

export const ErrorPage = () => {

  const navigate = useNavigate();
  const handleGoBack = ()=> {
    navigate("/");
  }

  return (
    <div className="error-container">
      <img 
        src="https://cdn.dribbble.com/users/2703713/screenshots/8408984/media/b7879109a3e889396451c4cd7555804b.gif" 
        alt="Error" 
        className="error-image" 
      />
      <h1>Oops! Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="home-button">Go Back Home</Link>
      <div>
        <button className="home-button" onClick={handleGoBack}>Go Back</button>
      </div>
    </div>
  );
};
