import { Link } from "react-scroll"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-green-900/70 to-black-900 bg-black shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold">Aydan Eng</h1>
        <div className="space-x-6">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer text-white font-bold hover:text-green-900"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer text-white font-bold hover:text-green-900"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer text-white font-bold hover:text-green-900"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer text-white font-bold hover:text-green-900"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
