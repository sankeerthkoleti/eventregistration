// Write your code here
import './index.css'
let ActiveEventRegistrationDetails = props => {
  let {eventText, stateStatus} = props

  let noActive = () => {
    return (
      <div className="d">
        <p>Click on an event, to view its registration details</p>
      </div>
    )
  }

  let closed = () => {
    return (
      <div className="n">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          alt="registrations closed"
          className="k"
        />
        <h1>Registrations Are Closed Now!</h1>
        <p>Stay tuned. We will reopen</p>
      </div>
    )
  }

  let notregistered = () => {
    return (
      <div className="n">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
          className="k"
        />
        <p>
          A live performance brings so much to your relationship with
          dance.Seeing dance live can often make you fall totally with this
          buaetiful art form
        </p>
        <button className="btn">Register Here</button>
      </div>
    )
  }

  let registered = () => {
    return (
      <div className="c">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="registered"
          className="j"
        />
        <h1>You have already registered for the event</h1>
      </div>
    )
  }
  switch (eventText) {
    case stateStatus.initial:
      return noActive()
    case stateStatus.completed:
      return closed()
    case stateStatus.registered:
      return registered()
    case stateStatus.notregistered:
      return notregistered()
    default:
      return null
  }
}
export default ActiveEventRegistrationDetails
