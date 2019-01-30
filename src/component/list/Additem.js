import React from 'react'
import {Component} from 'react'
import add_item from '../../images/add_item.png'
import css from './style/style.module.css'
import StarRatingComponent from 'react-star-rating-component';


class Additem extends Component
{
    constructor(props)
    {
        super(props)
        this.state = { rating : 0, film_name: ''}
    }
    onStarClick = (nextValue) => 
    {    
    this.setState({rating: nextValue})
    }
    updatevalue = (event) =>
    {
      this.setState({film_name:event.target.value})
    }
    render()
        {
         return(
             <React.Fragment>
             <div className="col-md-3">
                 <div className="card" >
                    <img className="card-img-top" src={add_item} alt="Card image cap" />
                    <div className={`card-body ${css.nopadds}`}>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" >Add a new film</button>

                    </div>
                </div>
                </div>
<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Add a new fillm</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form>
          <div className="form-group">
            <label htmlFor="recipient-name" className="col-form-label">Film name:</label>
            <input 
            type="text"
            value={this.state.film_name}
             className="form-control"
             id="recipient-name"
             onChange={this.updatevalue}
              />
          </div>
        <p> Rate your film :</p> 
          <StarRatingComponent 
                            name="rate1" 
                            starCount={5}
                            value={this.state.rating}
                            onStarClick={this.onStarClick}     
                            />
        </form>
      </div>
      <div className="modal-footer">
        <button 
        type="button" 
        className="btn btn-secondary" 
        data-dismiss="modal"  
        >Close</button>
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={() => this.props.newfilm(this.state.rating,this.state.film_name)}>Send message</button>
      </div>
    </div>
  </div>
</div>
              
             </React.Fragment>
         )   
        }
}
export default Additem