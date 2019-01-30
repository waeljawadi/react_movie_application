import React, { Component } from 'react';
import Filter from './component/filter/Filter'
import List from './component/list/List'
import './App.css';

class App extends Component {
  constructor(props)
  {
    super(props)
    this.state= { search: '', rate: 0, added_rate: 0, film_name: '',clicked: 0}
  }
  from_filter_keyword = (keyword,rate) =>
  {
    this.setState({search : keyword, rate :rate},() => console.log(this.state.rate))
  }
  starclick = (nextValue) => 
    {    
    this.setState({rate : nextValue})
    }
  // receive_to_add = (rate,film_name,clicked) =>
  // {
  //   this.setState({added_rate:rate,film_name:film_name,clicked:1})
  // }
  yousra = () =>
  {
    this.setState({
      film_name :'',
      added_rate : 0
    })
  }
  
  
  render() {
    return (
      <div className="App">
          <Filter to_filter={this.from_filter_keyword} starclick={this.starclick} />
          <List 
            keyword={this.state.search}
            rate={this.state.rate}
            sendtolist={this.receive_to_add}
            added_rate= {this.state.added_rate}
            film_name={this.state.film_name}
            yousra ={this.yousra}
          
             />
      </div>
    );
  }
}
export default App;
