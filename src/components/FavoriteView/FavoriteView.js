import React, { Component } from 'react';
import { connect } from 'react-redux';

class FavoriteView extends Component {

    state = {
        favorite: '',
    }

    componentDidMount(){
        this.getFavorites();
    }


    getFavorites = () => {
        this.props.dispatch({
            type: 'GET_FAVORITES'
        })
    }

    handleChange = (event) => {
        this.setState({
            favorite: event.target.value
        })
    }

    updateCategory = (event) => {
        this.props.dispatch({
            type: 'ADD_CATEGORY',
            payload: {
                category: this.state.favorite,
                id: event.target.value
            }
        })
    }
    
    render() {
        return (
            <div>
                <h2>Favorites List</h2>
                <div>
                    <ul>
                {this.props.reduxState.favoriteReducer.map(item => (
                    <li>
                        <img src = {item.gif_url} alt = "I'm a gif!" />
                        <select onChange = {this.handleChange}>
                            <option value="1">Funny</option>
                            <option value="2">Cohort</option>
                            <option value="3">Cartoon</option>
                            <option value="4">NSFW</option>
                            <option value="5">Meme</option>
                        </select>
                        <button value = {item.id} onClick = {this.updateCategory} >updateCategory</button>
                    </li>
                ))}
                    </ul>
                </div>
            </div>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(FavoriteView);