
import { IMovie } from "./Movie"

interface myProps {
    elem: IMovie;
    key?: number;
}


export const Moviecard = ({ elem }: myProps): JSX.Element => {
    if (elem.poster) {
        return (
            <div className="w-full flex justify-center items-center flex-col py-2">
                <img src={elem.poster} width={300} alt={elem.title} />
                <span className="text-2xl font-medium p-1">{elem.title}</span>
            </div>
        )
    } else {
        return <></>
    }
}
