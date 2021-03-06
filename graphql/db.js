import fetch from "node-fetch";
import axios from "axios";

const API_URL = "http://www.omdbapi.com/?apikey=c9635b4f";

export const getMovies = async (title) => {
    const result = await axios(API_URL, {
        params: {
            s: title
        }
    });
    return result.data.Search;
};

export const getByImdbID = async imdbID => {
    const result = await axios(API_URL, {
        params: {
            i: imdbID
        }
    });
    console.log(result);
    return result.data;
}
















// let movies = [
//     {
//         id:0,
//         name: "Star Wars",
//         score: 1
//     },
//     {
//         id:1,
//         name: "Avengers",
//         score: 8
//     },
//     {
//         id:2,
//         name: "The Godfather",
//         score: 99
//     },
//     {
//         id:3,
//         name: "Logan",
//         score: 2
//     }
// ];

// export const getMovies = () => movies;


// export const getById = id => {
//     const filteredMovie = movies.filter(movie => movie.id === id);
//     return filteredMovie[0];
// }

// export const deleteMovie = id => {
//     const cleanedMovies = movies.filter(movie => movie.id !== id)
//     if (movies.length > cleanedMovies.length) {
//         movies = cleanedMovies;
//         return true;
//     } else {
//         return false;
//     }
// }

// export const addMovie = (name, score) => {
//     const newMovie = {
//         id: movies.length,
//         name,
//         score
//     };
//     movies.push(newMovie);
//     return newMovie;
// }