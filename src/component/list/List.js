import React from 'react'
import {Component} from 'react'
import Item from './Item'
import Additem from './Additem'
import hoc from '../Hoc'

class List extends Component
{
    constructor(props)
    {
        super(props)

    }
    render()
    {
         
        let resultat
        if (this.props.rate > 0) 
            {
                resultat =  this.props.allfilms
                .filter((item,index) => ((item.title.toUpperCase().trim().indexOf(this.props.keyword.toUpperCase().trim()) > -1) && (item.rate >= this.props.rate)))
                .map((item,index) => <Item key={index} item={item} />)
            }
        else if (this.props.rate == 0)
            {
                resultat = this.props.allfilms
                .filter((item,index) => ((item.title.toUpperCase().trim().indexOf(this.props.keyword.toUpperCase().trim()) > -1) ))
                .map((item,index) => <Item key={index} item={item} />)
            }
        
       
        return(
            <React.Fragment>

             <div className="container">
                <div className="row">   
                 {resultat}  
                <Additem newfilm ={this.props.newfilm}  />
                </div>
            </div>
            </React.Fragment>
        )
    }
}
export default hoc(List)