import React, { Component } from 'react';
import img from 'react-image';
import './pokemonlist.css';

class PokemonsList extends Component {
   constructor(props) {
       super(props);
   };

   render() {
       const pokes = this.props.pokemons;
       return (
          <table className="table table-striped table-bordered">
            <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {
                    pokes.map((poke) => {
                        return <tr key={poke.id}>
                            <td>{ poke.id}</td>
                            <td>{ poke.login}</td>
                            <td><img src={poke.avatar_url}  className="avatar_image"/></td>
                        </tr>
                    })
                }
            </tbody>
          </table>
       );
   }
}


export default PokemonsList;
