import React, { Component } from 'react';
import Filter from './component/filter/Filter'
import List from './component/list/List'
import Allfilms from './Allfilms'
import './App.css';
class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        search: '',
        rate: 0,
        allfilms : Allfilms,
        time : 0
      }
    }
    from_filter_keyword = (keyword, rate) => {
      this.setState({
        search: keyword,
        rate: rate
      })
    }
    starclick = (nextValue) => {
      this.setState({
        rate: nextValue
      })
    }
    newfilm = (stars,title) => {
      this.setState
      ({
        added_stars : stars,
        added_title: title
      })
    this.setState
    ({
      allfilms: this.state.allfilms.concat
      ({image:'dfgd',title: title,rate:stars}
      )
    })
    }
time = () =>
setTimeout(() => {
  this.setState((prevState) => ({time :prevState.time +1}))
}, 1);

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
            newfilm ={this.newfilm} 
            allfilms={this.state.allfilms}
            time = {this.time}
             />
      </div>
    );
  }
}
export default App;
