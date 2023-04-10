import React from "react";
import { useState, useEffect } from "react";
import { Moviecard } from "./Moviecard";
import axios from "axios";
import { MySearchText } from "./useContext";
import { useContext } from "react";


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

    const { myVal } = useContext(MySearchText);

    useEffect(() => {
        getData();
    }, [myVal]);

    const getData = async () => {
        console.log(myVal)
        const res = await axios
            .post('http://localhost:6060/api/movies', myVal)
            .then((res) => {
                console.log(res.data.result);
                setMovies(res.data.result);
                const { totalRows } = res.data;
                console.log(totalRows)

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