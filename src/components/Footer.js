import React, { Component } from 'react'
import './Footer.css'

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="links">
          <a href="https://nichesnowboards.com/warranty-returns/">Warranty & Returns</a>
          <a href="https://nichesnowboards.com/privacy-policy/">Privacy Policy</a>
        </div>
        <div className="copyright">
          <p>&copy; Niche Snowboards {(new Date()).getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

export default Footer
