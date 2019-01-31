import React from "react"
import { Component } from "react"
import withcounter from './WithCounter'

class Hover extends Component {
  render() {
    const {handleevent,count} = this.props
    return (
      <React.Fragment>
        <p onMouseOver={handleevent}>Hover {count}</p>
      </React.Fragment>
    )
  }
}
export default withcounter(Hover)