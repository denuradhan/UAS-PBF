import React, { useContext, useEffect, useState } from 'react'
import { Card, CardColumns, Col, Button } from 'react-bootstrap'
import { MovieContext } from '../contexts/MovieContext'
import { Link } from 'react-router-dom'

const Body = props => {
    const [ linkAPI, setLinkAPI ] = useContext(MovieContext) 
    const [isLoaded, setIsLoaded] = useState(true)
    const [movies, setMovies] = useState()

    useEffect(() => {
        handleFilter()
    }, [linkAPI])

    const handleFilter = (link = linkAPI) => {
        fetch(link)
            .then(res => res.json())
            .then((res) => {
                setMovies(res.results)
                setIsLoaded(false)
            }).catch(() => {
                setIsLoaded(true)
            })
    }

    return (
        <>
            <div style = {{marginTop : "8%" }}>
            </div>
            <Col className="container-fluid mt-4">
                <CardColumns>
                    {!isLoaded ? movies.map(movie => (
                            <Card key={movie.id} id={movie.id} >
                                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original/" + movie.poster_path} style={{width: "60%", height:"60%"}} />
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Text>
                                        <Link to={"/detail/"+movie.id} target="_blank">
                                            <Button variant="primary">Detail</Button>
                                        </Link>
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