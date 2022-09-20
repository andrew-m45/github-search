import { useState, useContext } from "react"

// contexts
import AlertContext from "../context/alert/AlertContext"
import GithubContext from "../context/github/GithubContext"

export default function UserSearch() {
  const [searchTerm, setSearchTerm] = useState('')

  // extract state/methods from contexts
  const { users, searchUsers, resetSearch } = useContext(GithubContext)
  const { setAlert } = useContext(AlertContext)

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    if (searchTerm === '') {
      setAlert('Please enter a username', 'error')
    } else {
      // pass search term to searchUsers in context
      searchUsers(searchTerm)
      setSearchTerm('')
    }
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input 
                className="w-full pr-40 bg-gray-200 input input-lg text-black" 
                type="text"
                placeholder="Search User..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg text-white">Search</button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (<div>
        <button className="btn btn-ghost btn-lg" onClick={resetSearch}>Clear</button>
      </div>) }
    </div>
  )
}
