import { Component, React } from 'react'
import PropTypes from 'prop-types'
import { ButtonBackToHome } from '../Component/ButtonBackToHome'

const API_KEY = "6ae8c274"

export class Detail extends Component{

    static propTypes = {
        id: PropTypes.string
    }
    state = { movie: {}}

    _fetchMovie ({ id }) {

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res => res.json())
        .then( movie => {

            console.log({movie})
            this.setState({ movie })
            
        })
    }

    componentDidMount () {
        console.log(this.props)
        const { id } = this.props.match.params
        console.log(id)
        this._fetchMovie( {id} )
    }

    // _goBack (){
    //     window.history.back();
    // }

    render () {
        const { Title, Poster, Actors, Metascore, Plot } = this.state.movie
        return (
            <div>
                {/* <button onClick={this._goBack}>Volver</button> */}
                <ButtonBackToHome />
                <h1>{Title}</h1>
                <img>
                    src={Poster}
                </img>
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        )
    }
}