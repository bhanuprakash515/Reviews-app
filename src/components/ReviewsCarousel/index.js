// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    index: 0,
  }

  onLeftDetails = () => {
    const {index} = this.state

    if (index <= 0) {
      this.setState(prevState => ({index: prevState.index}))
    } else {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  onRightDetails = () => {
    const {index} = this.state
    if (index >= 3) {
      this.setState(prevState => ({index: prevState.index}))
    } else {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[index]

    return (
      <div className="container">
        <h1 className="heading">Reviews</h1>
        <div className="card-container">
          <button
            className="button"
            type="button"
            onClick={this.onLeftDetails}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
              alt="left arrow"
            />
          </button>
          <div className="image-card-container">
            <img src={imgUrl} alt={username} />
            <p className="heading-2">{username}</p>
            <p className="para">{companyName}</p>
            <p className="para">{description}</p>
          </div>
          <button
            className="button"
            type="button"
            onClick={this.onRightDetails}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
