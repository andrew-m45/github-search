import spinner from './assets/spinner.gif'

export default function Spinner() {
  return (
    <div className='w-full' style={{"width": "800px"}}>
        <img 
            src={spinner} 
            width={90} 
            alt="spinner"
            className='mx-auto' 
        />
    </div>
  )
}
