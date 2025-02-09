import "./Footer.css"; // Import the separate CSS file

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} NK. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
