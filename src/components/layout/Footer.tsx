const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between">
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm text-navy">
            &copy; {currentYear} Kengo Ikeuchi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
