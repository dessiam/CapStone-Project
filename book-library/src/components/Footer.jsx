function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyLibrary. Built with React & Tailwind CSS.
      </div>
    </footer>
  );
}

export default Footer;