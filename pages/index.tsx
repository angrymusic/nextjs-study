import Seo from "@/components/Seo";
import { useEffect, useState } from "react";

const API_KEY = "19a25cabd9d79c306165678f6a258be2";

interface Movie {
    id: number;
    original_title: string;
}
export default function Home() {
    const [movies, setMovies] = useState<Movie[]>();
    useEffect(() => {
        (async () => {
            const { results } = await (
                await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
            ).json();
            setMovies(results);
        })();
    }, []);
    return (
        <>
            <Seo title="Home"></Seo>
            {!movies && <h4>Loading...</h4>}
            {movies?.map((movie) => (
                <div key={movie.id}>
                    <h4>{movie.original_title}</h4>
                </div>
            ))}
        </>
    );
}
