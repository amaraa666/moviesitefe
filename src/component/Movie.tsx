import React from "react";
import { useState, useEffect } from "react";
import { Moviecard } from "./Moviecard";
import axios from "axios";
import { MySearchText } from "./useContext";
import { useContext } from "react";
import Pagination from './Pagination';
import { useRouter } from "next/router";


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

interface IProp {
    pageSize: number;
    totalRows: number | string;
}

const Movies = (): JSX.Element => {
    const [movies, setMovies] = useState<Array<IMovie>>([]);
    const [myRow, setMyRow] = useState<IProp>();
    const { myVal } = useContext(MySearchText);


    const route = useRouter();
    const { page } = route.query;


    useEffect(() => {
        getData();
    }, [myVal, page]);

    const getData = () => {
        console.log(myVal)
        const myPage = page ? page : 1
        console.log(myPage)
        axios
            .post('http://localhost:6060/api/movies', { myVal, myPage })
            .then((res) => {
                console.log(res.data.result);
                setMovies(res.data.result);
                const { totalRows } = res.data;
                const myProp: any = {
                    pageSize: Math.floor(totalRows / 30),
                    pageNumber: myPage
                }
                console.log(myProp)
                setMyRow(myProp);
            })
            .catch((err) => console.log(err))
    };

    console.log(myVal.isFiltered)
    return (
        <>
            <div className={`${myVal.isFiltered ? "block" : "hidden"}`}>
                <span className="text-2xl">Result: {movies?.length}</span>
            </div>
            <div className="grid grid-cols-4">
                {movies?.map((elem, index): JSX.Element => (
                    <Moviecard key={index} elem={elem} />
                ))}
            </div>
            <div className="flex justify-center p-10">
                <Pagination myRow={myRow} />
            </div>
        </>
    )
};

export default Movies;