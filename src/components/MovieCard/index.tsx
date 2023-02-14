import { movie } from "../../App"


function MovieCard({name, ratings, duration}:movie){
    return (
        <div className="w-full rounded-xl bg-slate-200 flex justify-between p-2">
            <div>
                <h3 className="font-semibold">{name}</h3>
                <span className="italic">ratings: {ratings}</span>
            </div>
            <span>duration: {duration}</span>
        </div>
    )
}

export default MovieCard