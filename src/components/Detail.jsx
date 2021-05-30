import React, { useEffect, useState } from 'react'
import { Button,Image } from 'react-bootstrap'
import ModalVideo from 'react-modal-video'




const Detail = props => {
    const [movieId] = useState(window.location.href.slice(29))
    const DETAIL_API = `https://api.themoviedb.org/3/movie/${movieId}?api_key=1304eb73177f6db734ad08f218c547c0`
    const TRAILER_API = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=1304eb73177f6db734ad08f218c547c0`
    const [isLoaded, setIsLoaded] = useState(true)
    const [movie, setMovie] = useState()
    const [video, setVideo] = useState()
    const [isError, setIsError] = useState(false)
    const [isOpen, setOpen] = useState(false)

    useEffect(() => {
        handleVideo()
        handleFilter()
    }, [movie, video])

    const handleFilter = (link = DETAIL_API) => {
        fetch(link)
            .then(res => res.json())
            .then((res) => {
                setMovie(res)
                console.log(movie)
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
    const handleVideo = (link = TRAILER_API) => {
        fetch(link)
            .then(res => res.json())
            .then((res) => {
                setVideo(res.results[0])
                console.log(video)
                if(Number.isInteger(res.id)){
                    console.log(res.id)
                }else{
                    console.log("notfound")
                }
            }).catch(() => {
                console.log("error bruh")
            })
    }
    return (
        <div>
            <div style = {{marginTop : "6%" }}>
            </div>

            {!isLoaded ? (
                [(isError ? (<p>Movie Not Found</p>):
                    (
                    <div className="body">
                        <h2>{movie.title}</h2>
                        <div className="overview">
                            <Image className="posterImage float"  src={"https://image.tmdb.org/t/p/original/" + movie.poster_path} fluid />
                            <h5 style = {{marginLeft : "5%" }}>Overview : </h5>
                            <p>{movie.overview}</p>
                            <p><b>Adult : </b>{movie.adult.toString()}</p>
                            <p><b>Genres :</b> {movie.genres.map(genre => (
                                genre.name+" "
                            ))}</p>
                            <p><b>Popularity : </b>{movie.popularity}</p>
                            <p><b>Runtime : </b>{movie.runtime} minute</p>
                            <p><b>Vote Average : </b>{movie.vote_average}</p>
                            <p><b>Vote Count : </b>{movie.vote_count}</p>
                            <Button className="btn-primary" onClick={()=> setOpen(true)}>View Trailer</Button>
                            <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId={video.key} onClose={() => setOpen(false)} />
                        </div>
                    </div>
                    )
                )]
            ) : <p>isLoading ...</p>
            }
            
            <br/><br/><br/><br/><br/>
        </div>
    )
}
export default Detail
