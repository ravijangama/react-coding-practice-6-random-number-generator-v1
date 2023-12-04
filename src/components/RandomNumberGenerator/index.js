// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  clickOnGenerate = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState({count: randomNum})
  }

  render() {
    const {count} = this.state
    const jsxElement = (
      <div className="bg-container">
        <div className="sub-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.clickOnGenerate}
          >
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
    return jsxElement
  }
}
export default RandomNumberGenerator
