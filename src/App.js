import React, { Component } from 'react'
import NewsHeading from './components/NewsHeading'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './components/About'


export default class App extends Component {
  pageSize = 6
  apikey = "79f6f0e9470d4109b1ea9b6ba5c33742"
  country= "us"
  render() {
    return (
      <div>
        <Router>
          <NewsHeading/>
          <Routes>
            {/* <Route exact path='/' element={<News key="general" pageSize={this.pageSize} country={this.country} category="general"/>}></Route> */}
            <Route exact path='/general' element={<News  key="general" apikey={this.apikey} pageSize={this.pageSize} country={this.country} category="general"/>}></Route>
            <Route exact path='/business' element={<News key="business" apikey={this.apikey} pageSize={this.pageSize} country={this.country} category="business"/>}></Route>
            <Route exact path='/entertainment' element={<News  key="entertainment" apikey={this.apikey} pageSize={this.pageSize} country={this.country} category="entertainment"/>}></Route>
            <Route exact path='/health' element={<News  key="health" apikey={this.apikey} pageSize={this.pageSize} country={this.country} category="health"/>}></Route>
            <Route exact path='/science' element={<News  key="Science" apikey={this.apikey} pageSize={this.pageSize} country={this.country} category="Science"/>}></Route>
            <Route exact path='/sports' element={<News  key="sports" apikey={this.apikey} pageSize={this.pageSize} country={this.country} category="sports"/>}></Route>
            <Route exact path='/technology' element={<News  key="technology" apikey={this.apikey} pageSize={this.pageSize} country={this.country} category="technology"/>}></Route>
            <Route exact path='/About' element={<About />} />

          </Routes>
        </Router>
      </div>
    )
  }
}



