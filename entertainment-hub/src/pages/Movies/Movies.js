import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/Pagination/CustomPagination'; 
import Genres from '../../components/Genres';

const Movies = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [selectGenres,setSelectGenres]=useState([]);
  const [genres,setGenres]=useState([]);

  const fetchMovies = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=6bbe14848b369adfbceaef58a146ffae&page=${page}`)
    // console.log(data)
    setContent(data.results)
    setNumOfPages(data.total_pages)
  }

  useEffect(() => {
    fetchMovies();
  }, [page]);
  return (
    <div>
      <span className='pageTitle'>Discover Movies</span>
      <Genres type="movie" selectGenres={selectGenres} setSelectGenres={setSelectGenres} genres={genres} setGenres={setGenres} setPage={setPage}/>
      <div className='trending'>
        {
          content && content.map((c) => <SingleContent
            key={c.id}
            id={c.id}
            poster={c.poster_path}
            title={c.title || c.name}
            date={c.first_air_date || c.release_date}
            media_type={"movie"}
            vote_average={c.vote_average}
          />)
        }
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  )
}

export default Movies
