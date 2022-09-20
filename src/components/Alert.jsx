import {MdError} from 'react-icons/md'
import { useContext } from "react"
import AlertContext from "../context/alert/AlertContext"

export default function Alert() {
  const { alert } = useContext(AlertContext)

  return (
    <div>
        {alert && (
            <p className="flex items-start mb-4 space-x-2 text-xl">
                {alert.type === "error" && (
                    <MdError className='mt-1'/>
                )} 
                <p className="flex-1 text-base font-semibold leading-7">
                    <strong>{alert.message}</strong>
                </p> 
            </p>
        )}
    </div>
  )
}
