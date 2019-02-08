import React from 'react'
import {Component} from 'react'

const hoc = WrappedComponent =>
{
    class Hoc extends Component
    {
        constructor(props)
        {
            super(props)
        }
       
        render()
        {
           
       
            let resultat
            (this.props.time() > 50) ?
             resultat = <WrappedComponent {...this.props} />  :
             resultat = <img src="https://cdn.dribbble.com/users/52627/screenshots/2200411/___-2.gif" />
            
        return(
                <React.Fragment>
                    

                   
                    {resultat}
                </React.Fragment>

            )
        }
    }
    return Hoc
}
export default hoc