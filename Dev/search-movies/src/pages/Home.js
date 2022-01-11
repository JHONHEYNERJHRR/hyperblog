import React, {Component} from 'react';
import {Title} from '../Component/Title'
import { SearchForm } from '../Component/SearchForm'
import { MoviesList } from '../Component/MovieList'


export class Home extends Component{
    state = { results: [], totalMovies:0, usedSearch:false }
  
    _handleResults = (results, totalMovies) =>{
      this.setState({results, totalMovies, usedSearch:true})
    }
  
    _renderResults  () {
      // this.setState({ })
      return (
          this.state.results.length === 0 
           ? <p>Sorry!😟 Result nofound! </p> 
           :  <MoviesList movies={this.state.results}/>
        )
    }

    render (){
        return(
            <div>
                <Title>Search Movie</Title>
                <div className="SearchForm-wrapper ">
                    <SearchForm  onResults={this._handleResults}/>
                </div>
                
                {this.state.usedSearch 
                        ? this._renderResults()
                        : <small> Use the form to seaech a movie</small>
                    }
            </div>
        )
    }
}