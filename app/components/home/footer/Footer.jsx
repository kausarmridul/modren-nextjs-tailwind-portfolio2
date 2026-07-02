const Footer = () => {
  return (
    <div className="text-center bg-blue-900/20 p-5">
      <p className="sm:text-lg text-sm text-white/70">
        &copy; {new Date().getFullYear()} Sajal Portfolio. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
