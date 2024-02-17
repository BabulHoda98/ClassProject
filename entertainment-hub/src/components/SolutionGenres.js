import React, { useEffect } from 'react'
import axios from 'axios';
import { Chip } from '@mui/material';

const Genres = ({
    selectGenres,
    setSelectGenres,
    genre,
    genres,
    setGenres,
    type,
    setPage
}) => {
    // const handleAdd = (genre) => {
    //     setSelectGenres([...selectGenres, genre]);
    //     setGenres(genres.filter((g) => g.id !== genre.id));
    //     setPage(1);
    // }
    // const handleRemove = (genre) => {
    //     setGenres(selectGenres.filter((g) => g.id !== genre.id)
    //     );
    //     setSelectGenres([...selectGenres, genre]);
    //     setPage(1);
    // }
// ---------------------new Employe------------------
    console.log(selectGenres)
    const handleAddRemove = (id) => {
        console.log(id, 'id')
        const newData = selectGenres?.filter((kuchBhi) => kuchBhi.id !==id);
        console.log(newData, 'newData')
        setSelectGenres(newData)
    }
    // -----------Pranjal------------------
        //   const checkIfPresent = selectGenres.findIndex((item)=>item.id == id);
        //   if(checkIfPresent == -1) {
        //     setSelectGenres([...selectGenres, id]);
        //   } else {
        //        setSelectGenres((prev)=>{
        //         const indexes = [...prev];
        //         indexes.splice(checkIfPresent , 1);
        //         return indexes;
        //        })    
        //   }

    const fetchGenres = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=6bbe14848b369adfbceaef58a146ffae&with_gen`
        );
        setSelectGenres(data.genres)
    };
    useEffect(() => {
        fetchGenres();
        return () => {
            setGenres({});
        };
    }, []);
    return (
        <div style={{ padding: "6px 0" }}>
            {selectGenres.map((genre) => (
                <Chip label={genre.name}
                    style={{ margin: 2 }}
                    size='small' key={genre.id}
                    color='primary'
                    clickable
                onDelete={() => handleAddRemove(genre?.id)} 
                />

            ))}
        

        </div>

    )
}

export default Genres
