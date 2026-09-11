import WithDataFetching from "./hoc/WithDataFetching";
import MovieAnalytics from "./movies/MovieAnalytics";
import MovieList from "./movies/MovieList";


const MovieListWithData = WithDataFetching(MovieList);
const MovieAnalyticsWithData = WithDataFetching(MovieAnalytics);

const MovieWithHoc = () => {
    return (
        <div className="mx-w-lg mx-auto mt-10 space-y-6">
            <MovieListWithData />
            <MovieAnalyticsWithData />
        </div>
    );
}

export default MovieWithHoc;