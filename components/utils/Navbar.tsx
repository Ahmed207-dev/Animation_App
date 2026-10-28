import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed flex justify-between top-0 left-0 w-full bg-blue-600/50 backdrop-blur-md border-b border-white/10 z-50">
      <h1 className="text-xl font-bold text-yellow-400 mx-6 my-2">Ahmed</h1>
      <ul className="flex items-center justify-between gap-2">
        <Link href={`#Contact`} className="text-xl text-yellow-400 mx-5 my-2">
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
