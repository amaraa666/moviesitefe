
import axios from "axios";
import Link from "next/link"
import { useContext } from "react";
import { MySearchText } from "./useContext";

export const Navbar = (): JSX.Element => {
    const { setMyVal } = useContext(MySearchText);

    function filteredData(e: any): void {
        const newObj = {
                isFiltered: true,
                searchText: e
        }
        setMyVal(newObj);
    };

    return (
        <>
            <div className="h-20 flex items-center" style={{ background: "#fa320a" }}>
                <div className="w-64">
                    <img
                        style={{ height: "50px" }}
                        alt="Rotten Tomatoes"
                        src="https://images.fandango.com/cms/assets/2d5a3340-be84-11ed-9d20-83ee649e98bd--rt25-logo-mainnav-161x50.svg"
                    />
                </div>
                <div className="w-64">
                    <input
                        className="w-full rounded-md border pt-2 border-black "
                        placeholder="Search ..."
                        onChange={(e) => filteredData(e.target.value)}
                    />
                </div>
                <div className="w-96 pl-4 items-center">
                    <nav>
                        <ul className="list-none flex justify-between text-white">
                            <li>
                                <Link href={"/movie"}>MOVIES</Link>
                            </li>
                            <li>TV SHOWS</li>
                            <li>MOVIE TRIVIA</li>
                            <li>NEWS</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}