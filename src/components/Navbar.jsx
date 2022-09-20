import {FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-netural-content'>
        <div className="container mx-auto">
            <div className="flex-none px-2 mx-2">
                <FaGithub className='inline pr-2 text-4xl text-white'/>
                <Link to='/' className='text-lg font-bold align-middle text-white'>Github Finder</Link>
            </div>
            <div className="flex-1 px-2 mx-2">
                <div className="flex justify-end">
                    <Link to="/" className='btn btn-ghost btn-small rounded-btn text-white'>Home</Link>
                    <Link to="/about" className='btn btn-ghost btn-small rounded-btn text-white'>About</Link>
                </div>
            </div>
        </div>
    </nav>
  )
}
