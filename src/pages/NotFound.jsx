import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='hero'>
        <div className="text-center hero-content">
            <div className="max-w-lg">
                <h1 className="text-8xl font-bold mb-10">Oops!</h1>
                <p className='text-4xl mb-4 '>404 - Page not Found</p>
                <p className='text-1xl mb-8'>The page you are looking for might have been removed or is temporarily unavailable</p>
                <Link to="/" className='btn btn-primary btn-lg rounded-xl bg-sky-800'>GO TO HOMEPAGE</Link>
            </div>
        </div>
    </div>
  )
}
