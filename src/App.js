import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';

class App extends Component{
  render = () => {
    return (
        <div className="App">
          <div className="pictures">
            <div>
              <h2>My List</h2>
              <ul>
                {this.props.mylist.map((item) => {
                    return <li key={item.id}>
                      <img src={item.img} alt=""/>
                      <br></br>
                      <button onClick={() => this.props.removeMyList(item.id, item)}>Remove</button>
                      <br/>
                    {item.title}
                  </li>
                  }
                )}
              </ul>
            </div>
          </div>

          <div className="pictures">
            <br></br>
            <h2>Recommendations</h2>
            <ul>
              {this.props.recommendations.map((item)=>
                  <li key={item.id}>
                    <img src={item.img} alt="" />
                    <br></br>
                    <button onClick={() => this.props.addMyList(item.id, item)}>add</button>
                    <br />
                    {item.title}
                  </li>
              )
              }
            </ul>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    mylist:state.Mylistred,
    recommendations:state.Recommendationred
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    addMyList:(id, item)=>{
      dispatch({type:"addList", payload:id});
      dispatch({type:"addList", payload:item});
    },
    removeMyList:(id, item)=>{
      dispatch({type:"removeList", payload:id});
      dispatch({type:"removeList", payload:item});
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
