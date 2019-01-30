import React from 'react'
import sample from '../../images/sample.jpg'
import css from './style/style.module.css'
import Stars from './Stars'
const Item = (props) =>
{
    return (
             <React.Fragment>
                                <div className="col-md-3">
                                    <div className="card" >
                                        <div className={`${css._rate_}`} >
                                            <Stars rate={props.item.rate} />
                                        </div>
                                        <img className="card-img-top" src={sample} alt="Card image cap" />
                                        <div className={`card-body  ${css.border_top}`}>
                                        <p className={`card-text`}>
                                            {props.item.title}
                                        </p>
                                        </div>
                                    </div>
                                    <p></p>
                                </div>
            </React.Fragment>
    )
}
export default Item