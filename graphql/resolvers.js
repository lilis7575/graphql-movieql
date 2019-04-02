import { getMovies, getByImdbID, addMovie, deleteMovie} from "./db";

const resolvers = {
    Query: {
        movies: (_, { title }) => getMovies( title ),
        movie:(_, { imdbID }) => getByImdbID( imdbID )
    }
    // ,
    // Mutation: {
    //     addMovie: (_, { name, score }) => addMovie(name, score),
    //     deleteMovie: (_, { id }) => deleteMovie(id)
    // }
};

export default resolvers;