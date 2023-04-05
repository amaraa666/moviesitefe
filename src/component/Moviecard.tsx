
import { IMovie } from "./Movie"

interface myProps {
    elem: IMovie;
    key?: number;
}

export const Moviecard = ({ elem }: myProps): JSX.Element => {
    if (elem.poster) {
        return (
            <div className="w-full flex justify-center items-center flex-col">
                <img src={elem.poster} width={200} alt={elem.title} />
                <span>{elem.title}</span>
            </div>
        )
    } else {
        return <></>
    }
}
