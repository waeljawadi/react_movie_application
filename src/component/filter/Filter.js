import React from 'react'
import {Component} from 'react'
import StarRatingComponent from 'react-star-rating-component';
import css from './style/style.module.css'
class Filter extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            rating: 0,
            value_saisie : '',
          };
          this.ref = React.createRef()
    }
    change_search = (event) => 
    {
        this.setState({value_saisie : event.target.value})
        this.props.to_filter(event.target.value,this.state.rating)
    }
    onStarClick = (nextValue) => 
    {    
    this.setState({rating: nextValue})
    this.props.starclick(nextValue)
    }
    componentDidMount()
    {
        this.ref.current.focus()
    }
    
    render()
    {
        return(
            <React.Fragment>
                <div className={`container ${css.starrate}`}>
                    <div className="row">
                        <div className="col-xl-6">
                            <input 
                            className={`form-control ${css.search}`} 
                            type="text" 
                            placeholder="Search" 
                            placeholder="Type movie name to search"
                            aria-label="Search"
                            value = {this.state.value_saisie}
                            onChange={this.change_search}
                            onClick={this.change_search}
                            ref={this.ref}
                             />
                        </div>
                <div className="col-xl-6">
                <p className={`${css.min_rate}`}>Minimum rating</p>
                   
                    <StarRatingComponent 
                            name="rate1" 
                            starCount={5}
                            value={this.state.rating}
                            onStarClick={this.onStarClick}  
                            
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Filter