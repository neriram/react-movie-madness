import React, { useState, useEffect } from 'react';
import Api from '../Api';

export const useMovieFetch = movieId => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchMovie = async() => {
            try {
                setLoading(true);
                setError(false);

                const movie = await Api.fetchMovie(movieId);
                const credits = await Api.fetchCredits(movieId);

                //Get director to display
                const directors = credits.crew.filter(
                    member => member.job === 'Director'
                );
                setState({
                    ...movie,
                    actors: credits.cast,
                    directors
                })
                setLoading(false);
            } catch (error) {
                setError(true);
            }
        }
        fetchMovie();
    }, [movieId])
    return { state, loading, error }
};