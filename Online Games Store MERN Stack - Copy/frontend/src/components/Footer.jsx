

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 p-4">
      <div className="container mx-auto">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Digital Dreams</p>
          <p>Contact us at: contact@digitaldreams.com</p>
          <p>Designed by: Rushell Ranjeev Dodangoda</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
