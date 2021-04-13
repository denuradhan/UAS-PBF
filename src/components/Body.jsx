import React, { Component, useContext, useEffect, useState } from 'react'
import { Card, CardColumns, Col } from 'react-bootstrap'
import { MovieContext } from '../contexts/MovieContext';

const Body = props => {

    // const BASE_API = `https://api.themoviedb.org/3/trending/movie/week?api_key=1304eb73177f6db734ad08f218c547c0`
    const BASE_API = `https://api.themoviedb.org/3/search/movie?api_key=1304eb73177f6db734ad08f218c547c0&language=en-US&query=${props.query}`

    const [error, setError] = useState(false)
    const [isLoaded, setIsLoaded] = useState(true)
    const [movies, setMovies] = useState()

    useEffect(() => {
        handleFilter()
    }, [BASE_API])

    const handleFilter = (link = BASE_API) => {
        fetch(link)
            .then(res => res.json())
            .then((res) => {
                console.log(res)
                setMovies(res.results)
                setIsLoaded(false)
            }).catch(() => {
                setIsLoaded(true)
                setError(true)
            })
    }

    return (
        <>
            <div>
                <h1 id="demo">hallo</h1>
            </div>
            <Col className="container-fluid mt-4">
                <CardColumns>
                    {!isLoaded ? movies.map(movie => (
                        <Card key={movie.id} id={movie.title} >
                            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original/" + movie.poster_path} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Relased date {movie.release_date}</small>
                            </Card.Footer>
                        </Card>
                    )) : <p>Loading...</p>}
                </CardColumns>
            </Col>
        </>
    );
};


export default Body;