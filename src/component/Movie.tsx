import React from "react";
import { useState, useEffect } from "react";
import { getEnvironmentData } from "worker_threads";
import { Moviecard } from "./Moviecard";
import axios from "axios";



export interface IMovie {
    _id: string;
    plot: string;
    genres: [string];
    runtime: number;
    cast: string;
    poster: string;
    title: string;
    countries: [string];
    released: Date;
    type: string;
    imdb: {
        rating: number;
        votes: number;
        id: number;
    };
    num_mflix_comments: number;
    tomatoes: {
        viewer: {
            rating: number;
            numReviews: number;
            meter: number;
        };
        dvd: string;
        critic: {
            rating: number;
            numReviews: number;
            meter: number;
        };
        lastUpdated: Date;
        rotten: number;
        production: string;
        fresh: number;
    };
    theaterId: {
        type: number;
    };
}



const Movies = (): JSX.Element => {
    const [movies, setMovies] = useState<Array<IMovie>>([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios
            .get('http://localhost:6060/api/movies')
            .then((res) => {
                console.log(res.data.result);
                setMovies(res.data.result);
            })
            .catch((err) => console.log(err))
    };


    return (
        <>
            <div className="grid grid-cols-4">
                {movies?.map((elem, index): JSX.Element => (
                    <Moviecard key={index} elem={elem} />
                ))}
            </div>
        </>
    )
};

export default Movies;