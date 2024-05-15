// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}
  
  buttonText=()=>{
    this.setState(prevState=>({isSubscribed:!prevState.isSubscribed}))
  }
  getButtonText=()=>{
      const {isSubscribed}=this.state;
      return isSubscribed? "Subscribed" : "Subscribe"
  }
  render() {
    const buttonText=this.getButtonText()
    return (
      <div className="main-container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        <button className="button-style" onClick={this.buttonText}>{buttonText}</button>
      </div>
    )
  }
}

export default Welcome
