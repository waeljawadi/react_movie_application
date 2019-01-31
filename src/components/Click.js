import React from "react"
import { Component } from "react"
import withcounter from './WithCounter'


class Click extends Component {
  render() {
    const {handleevent,count} = this.props

    return (
      <React.Fragment>
        <button onClick={handleevent}>Click {count}</button>
      </React.Fragment>
    )
  }
}
export default withcounter(Click)
