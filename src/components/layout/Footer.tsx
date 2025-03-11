const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between">
        <div className="md:order-1 md:mt-0">
          <p className="text-sm">&copy; {currentYear} Kengo Ikeuchi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
