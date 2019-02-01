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
           
        //    let x = {...this.props}
          
        //    console.log(x)
        //     let resultat
        //     (this.props.time() > 3000) ? resultat = <WrappedComponent {...this.props} />  : resultat = <img src="https://i.gifer.com/1amw.gif" />
        //     
        return(
                <React.Fragment>
                    {/* {resultat} */}

                    <WrappedComponent {...this.props} /> 
                </React.Fragment>

            )
        }
    }
    return Hoc
}
export default hoc