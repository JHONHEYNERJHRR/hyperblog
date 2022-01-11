import React, {Component} from 'react'

const API_KEY = "6ae8c274"

export class SearchForm extends Component{
    state = {
        inputMovie: ''
    }

    _hanleChange = (e) => {
        this.setState({ inputMovie: e.target.value})
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        const { inputMovie } = this.state

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(results => {

                console.log(results)
                const { Search = [], totalResults = "0" } = results
                
                this.props.onResults(Search, totalResults)
                // this.props.onResults((Search == undefined)? []:Search, (totalResults == undefined)? 0:totalResults)

                console.log({Search, totalResults})
        })

    }

    render(){
        return(
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input 
                            className="input" 
                            type="text" 
                            onChange={this._hanleChange}
                            placeholder="Movie to search..." /> 
                    </div>
                    <div className="control">
                        <button className="button is-info">
                        Search Movie
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

