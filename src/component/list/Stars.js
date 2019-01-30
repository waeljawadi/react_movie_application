import React from 'react'
import css from './style/style.module.css'

const Stars = (props) =>
{
    const stars = Array.from({length: 5}, (x, i) => '<span>★</span>');
    return(
        <React.Fragment>
        {stars.map((e,index) => (index < props.rate) ? <span  className={`${css.mystar}`}>★</span> : <span>★</span>)}
        </React.Fragment>
    )
}
export default Stars