// Write your code here
import './index.css'

import {Component} from 'react'

const tailImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
const headImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

class CoinToss extends Component {
  state = {
    image: headImage,
    tails: 0,
    heads: 0,
  }

  changeImage = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        image: headImage,
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        image: tailImage,
      }))
    }
  }

  render() {
    const {heads, tails, image} = this.state
    return (
      <div className="bg-container">
        <div className="second-container">
          <h1>Coin Toss Game</h1>
          <p className="h-t">Heads (or) Tails</p>
          <img src={image} alt="toss result" className="image" />
          <button type="button" onClick={this.changeImage}>
            Toss Coin
          </button>

          <div className="last">
            <p className="total">total:{heads + tails}</p>
            <p className="heads">Heads:{heads}</p>
            <p className="tails">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
