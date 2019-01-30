import React from 'react'
import {Component} from 'react'
import Item from './Item'
import Allfilms from '../../Allfilms'
import Additem from './Additem'

class List extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            lesfilm_brute : Allfilms,
            lesfilm_traite :Allfilms
         }
    }
    
    receive_to_add=()=>
    {
        
    }

    render()
    {

         
        let resultat
 
        
        if (this.props.rate > 0) 
            {
                resultat =  this.state.lesfilm_traite
                .concat({image:'dfgd',title:this.props.film_name,rate:this.props.added_rate})
                .filter((item,index) => ((item.title.indexOf(this.props.keyword) > -1) && (item.rate == this.props.rate)))
                .map((item,index) => <Item key={index} item={item} />)
            }
        else if (this.props.rate == 0)
            {
                resultat = this.state.lesfilm_traite
                .concat({image:'dfgd',title:this.props.film_name,rate:this.props.added_rate})
                .filter((item,index) => ((item.title.indexOf(this.props.keyword) > -1) ))
                .map((item,index) => <Item key={index} item={item} />)
            }
        
       
        return(
            <React.Fragment>
             <div className="container">
                <div className="row">   
                 {resultat}  
                <Additem receive_new = {this.props.sendtolist} yousra={this.props.yousra} />
                </div>
            </div>
            </React.Fragment>
        )
    }
}
export default List