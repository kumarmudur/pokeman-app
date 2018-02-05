import React, { Component } from 'react';
import PokemonsList from './PokemonsList';
import './search-box.css';

class SearchBox extends Component {
    constructor() {
        super();
        this.state = {
            pokemons: [],
            defaultPokes: []
        };
        this.searchPokeman = this.searchPokeman.bind(this);
    }

    componentWillMount() {
        const url = "https://api.github.com/users";
 
        fetch(url).then((res) => {
           return res.json()
        }).then((json) => {
           this.setState({
               pokemons: json,
               defaultPokes: json
           });
        });
    }

    searchPokeman(e) {
        let newPokes = this.state.pokemons;
        let searchvalue = e.target.value;
        if(searchvalue !== undefined && searchvalue !== "") {
            newPokes = this.state.pokemons.filter((e) => {
                console.log(e.login);
                return e.login.toLowerCase().indexOf(searchvalue.toLowerCase()) >= 0;  
            });
            this.setState({
                pokemons : [ ...newPokes]
            });
        } else {
            this.setState({
                pokemons: this.state.defaultPokes
            })
        }
    };

    render() {
        return (
            <div>
                <input type="text" name="search" className="form-control search-control" placeholder="search a pokeman" onChange={this.searchPokeman}/>
                <PokemonsList pokemons={ this.state.pokemons}/>
            </div>
        );
    }
}

export default SearchBox;