// Write your code here
import './index.css'
let EventItem = props => {
  let {details, change} = props
  let c = () => {
    change(details.registrationStatus)
  }
  return (
    <li>
      
        <button onClick={c}>
          <img src={details.imageUrl} alt="event" className="i" />
        </button>
        <p className="h1">{details.name}</p>
        <p className="p">{details.location}</p>
      
    </li>
  )
}
export default EventItem
