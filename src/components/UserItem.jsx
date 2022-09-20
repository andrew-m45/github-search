import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function UserItem({ userData }) {
  return (
    <div className='card shadow-md compact side bg-base-100'>
        <div className="flex-row items-center space-x-4 card-body">
            <div>
                <div className="avatar">
                    <div className="rounded-full shadow w-14 h-14">
                        <img src={userData.avatar_url} alt="user_img" />
                    </div>
                </div>
            </div>
            <div>
                <h2 className="card-title">{userData.login}</h2>
                <Link to={`/user/${userData.login}`} className='text-base-content text-opacity-40'>View Profile</Link>
            </div>
        </div>
    </div>
  )
}

// prop typecheck
UserItem.propTypes = {
    userData: PropTypes.object.isRequired
}
