import React, { useEffect } from 'react'
import axios from 'axios';
import { Chip } from '@mui/material';

const Genres = ({
    selectGenres,
    setSelectGenres,
    genres,
    setGenres,
    type,
    setPage
}) => {
    console.log(genres)
    const handleAdd = (genre) => {
        console.log(genre)
        setSelectGenres([...selectGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
    }
    const handleRemove = (genre) => {
        console.log("ahsan",genre)
        setSelectGenres(selectGenres.filter((g) => g.id !== genre.id));
        setGenres([...genres,genre]);
        setPage(1);
    }
    const fetchGenres = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=6bbe14848b369adfbceaef58a146ffae&with_gen`
        );
        setSelectGenres(data.genres)
    };
    useEffect(() => {
        fetchGenres();
        return () => {
            setGenres([]);
        };
    }, []);

    return (
        <div style={{ padding: "6px 0" }}>
            {selectGenres?.map((genre  ) => (
                <Chip label={genre.name}
                    style={{ margin: 2 }}
                    size='small' key={genre.id}
                    color='primary'
                    clickable
                    onDelete={() => handleRemove(genre)}
                />

            ))}
            {genres?.map((genre) => (
                <Chip label={genre.name}
                    style={{ margin: 2 }}
                    size='small' key={genre.id}
                    clickable
                    onClick={() => handleAdd(genre)}
                />

            ))}

        </div>

    )
}

export default Genres
