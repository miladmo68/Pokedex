
import { useState, useEffect } from 'react'; //  React Hooks
import axios from 'axios'; // Import axios 
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import Box from '../components/Box';

const Launches = () => {
    // creat a state
    const [  launches, setLaunches ] = useState([]);

    // Loading state
    const [ loading, setLoading ] = useState(true);

    //Error state
    const [ error, setError ] = useState(undefined);

    useEffect( () => {
        console.log('launches works');
        // set min load time 
        // timeout to load 1.5 sec
        window.setTimeout( () => {
            //axios here
            //Call the API
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')

            .then((response) => {
                // handle success

                // console.log(response);

                // use the data
                const { data } = response;
                setLaunches(data.results);
                setLoading(false);


            })
            .catch((error) => {
                // handle error
                console.log(error.response);

                const [ status, data ] = error.response;
                //set error message
                setError(`${status} ${data}`);
                console(setError);

                //set loading even error
                setLoading(false);



            })
            .then( () => {
                // always executed
                console.log('Moreeeeeeeeeeeeeeee...')
            });

        }, 1600); 

    }, []);
    console.log(launches);


    return(

        <div>
            {/* if loading is true then show Loading */}
            {loading && (
                <Loading />
            )}

            {/* if loading is NOT true then show error */}
            {loading && error && (
                <p className='lead text-center'>{error}</p>
            )}

            {/* If no error and loading is Not true and launches.lenght = 0 then show No launches */}
            {!loading && !error && launches.length === 0 && (
                    <p className='lead text-center text-info'>No launches</p>
            )}

            {/* If no error and loading is Not true  and launches.lenght > 0 then show Table */}
            {!loading && !error && launches.length > 0 && (
                <div className='container'>
                    <br/>

                    <h1>Welcome to Milad Pokedex App</h1>

                    <div className="row ">
                        {launches.map( (launch , idx) => (

                            <div className='col-3 ' key= {idx}>
                                <Link style={{ textDecoration: 'none' }} to= {`launch/${idx+1} `  }>
                                    <Box >
                                        {launch.name}
                                    </Box>
                                </Link>


                            </div>
                             
                        ))}
                    </div>
                </div>
                )}


        </div>


        
    );
}

export default Launches;