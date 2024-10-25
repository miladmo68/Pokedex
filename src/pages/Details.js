


import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

import Loading from '../components/Loading';



const Details = () => {
    const { launchId } = useParams();
    console.log(launchId);


    // Setup states
    const [ loading, setLoading] = useState(true);
    const [ error, setError ] = useState(undefined);
    const [  details, setDetails ] = useState();
    const [  pokemon, setPokemon ] = useState({
        name:"",
        img: "",
        stats:{
            hp : "",
            attack : "",
            defense : "",
            specialAttack : "",
            specialDefense : "",
            speed : "",

        }
    });


    useEffect ( () =>{
        // set time to load page
        //axios start
        setTimeout( () => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${launchId}`)
            .then((response) => {
                const { data } = response;
                console.log(data);
                setDetails(data);
                setLoading(false);
                //////test
                setPokemon({
                    name: response.data.name,
                    img: response.data.sprites.front_default,
                    stats:{
                        hp : response.data.stats[0].base_stat,
                        attack : response.data.stats[1].base_stat,
                        defense : response.data.stats[2].base_stat,
                        specialAttack : response.data.stats[3].base_stat,
                        specialDefense : response.data.stats[4].base_stat,
                        speed : response.data.stats[5].base_stat,

                    }
                });


            })
            .catch((error) => {
                console.log(error.response.data);
                const [ status, data ] = error.response;
                setLoading(false);
                setError(`${status} ${data}`);

            });


        } ,1500)

    } , []);


    return (
        <div>
        <div>
            {/* If loading condition IS true,  show <Loading /> */}
            {loading && (
                <Loading />
            )}

            {/* If loading is NOT true, and error IS true, show the error */}
            {!loading && error && (
                <div className="text-center">
                    <p className="lead">{error}</p>
                    <Link to="/" className="btn btn-primary">Go Back</Link>
                </div>
            )}

            {/* If loading is NOT true, and error is NOT true and launch state has data , show the data */}
            {!loading && !error && details && (
                <div className="container mt-3">

                    {/*show the image */}
                    <img src={pokemon.img} />



                    <table className="table text-center table-striped table-hover">

                        <thead className='table-success '>
                            <tr >
                                <th ><h3 >Name </h3></th>
                                <th ><h3 >{pokemon.name}</h3></th>
                            </tr>

                            <tr>
                                <th>Stats</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Hp</td>
                                <td>{pokemon.stats.hp}</td>
                            </tr>
                            <tr>
                                <td>Attack</td>
                                <td>{pokemon.stats.attack}</td>
                            </tr>
                            <tr>
                                <td>Defense</td>
                                <td>{pokemon.stats.defense}</td>
                            </tr>
                            <tr>
                                <td>Special-Attack</td>
                                <td>{pokemon.stats.specialAttack}</td>
                            </tr>
                            <tr>
                                <td>Special-Defense</td>
                                <td>{pokemon.stats.specialDefense}</td>
                            </tr>
                            <tr>
                                <td>Speed</td>
                                <td>{pokemon.stats.speed}</td>
                            </tr>

                        </tbody>
                    </table>
                    {/* Button to go back to main page */}
                    <Link to="/" className="btn btn-success">Back</Link>
                </div>
            )}
        </div>        </div>
    );
}

export default Details;