import { useContext } from "react"

// components
import UserItem from "./UserItem"
import Spinner from "./Spinner"

// import GithubContext
import GithubContext from "../context/github/GithubContext"

export default function UserList() {
  // extract fetchUsers, loading, users data from GithubContext
  const { loading, users } = useContext(GithubContext)  
  
  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {loading && <Spinner />}
        {users && users.map((user) => (
            <UserItem key={user.id} userData={user}/>
        ))}
    </div>
  )
}
