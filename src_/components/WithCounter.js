import React from 'react'
import {Component} from 'react'

const withCounter = WrappedCounter =>
{
    class WithCounter extends Component
    {
        constructor(props)
        {
            super(props)
            this.state = {counter:0}
        }
        handleevent = () =>
        {
            this.setState((prev) => ({counter: prev.counter + 1}))
        }
        render()
        {
            return(
                <WrappedCounter handleevent={this.handleevent} count={this.state.counter} />
            )
        }
    }
    return WithCounter
}

export default withCounter