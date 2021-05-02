import React, { useContext, useEffect, useState } from 'react'
import { MovieContext } from '../contexts/MovieContext'
import { Table, Container, Row, Col, Image } from 'react-bootstrap'




const Detail = props => {
    const [movieId, setMovieId] = useState(window.location.href.slice(29))
    const DETAIL_API = `https://api.themoviedb.org/3/movie/${movieId}?api_key=1304eb73177f6db734ad08f218c547c0`
    const [isLoaded, setIsLoaded] = useState(true)
    const [movie, setMovie] = useState()
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        handleFilter()
    }, [DETAIL_API])

    const handleFilter = (link = DETAIL_API) => {
        fetch(link)
            .then(res => res.json())
            .then((res) => {
                setMovie(res)
                console.log(res)
                if(Number.isInteger(res.id)){
                    console.log(res.id)
                }else{
                    setIsError(true)
                }
                setIsLoaded(false)
            }).catch(() => {
                setIsLoaded(true)
            })
    }

    return (
        <div>
            <div style = {{marginTop : "5%" }}>
            </div>

            {!isLoaded ? (
                [(isError ? (<p>Movie Not Found</p>):
                    (
                    <div className="body">
                        <h2>{movie.title}</h2>
                        <div className="overview">
                            <Image className="posterImage float"  src={"https://image.tmdb.org/t/p/original/" + movie.poster_path} fluid />
                            <h5>Overview : </h5>
                            <p>{movie.overview}</p>
                            <p><b>Adult : </b>{movie.adult.toString()}</p>
                            <p><b>Genres :</b> {movie.genres.map(genre => (
                                genre.name+" "
                            ))}</p>
                            <p><b>Popularity : </b>{movie.popularity}</p>
                            <p><b>Runtime : </b>{movie.runtime} minute</p>
                            <p><b>Vote Average : </b>{movie.vote_average}</p>
                            <p><b>Vote Count : </b>{movie.vote_count}</p>
                        </div>
                    </div>    
                    )
                )]
            ) : <p>isLoading ...</p>
            }
        </div>
    )
}
export default Detail
