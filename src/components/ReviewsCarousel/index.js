// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="heading">Reviews</h1>
        <div className="card-container">
          <button className="button" type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              alt="right arrow"
            />
          </button>
          <div className="image-card-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/wade-warren-img.png"
              alt="Wade Warren"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
