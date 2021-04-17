import React, { useContext, useEffect, useState } from 'react'
import { Card, CardColumns, Col, Button, Image } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import { MovieContext } from '../contexts/MovieContext';

const Body = props => {
    const [query, setQuery] = useContext(MovieContext)
    const BASE_API = `https://api.themoviedb.org/3/search/movie?api_key=1304eb73177f6db734ad08f218c547c0&language=en-US&query=${query}`
    const [error, setError] = useState(false)
    const [isLoaded, setIsLoaded] = useState(true)
    const [movies, setMovies] = useState()
    const [moviet, setMoviet] = useState({id:0, title:'null', overview:'null', poster_path:'null', popularity:'null'})
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleFilter()
    }, [BASE_API])

    const handleFilter = (link = BASE_API) => {
        fetch(link)
            .then(res => res.json())
            .then((res) => {
                setMovies(res.results)
                setIsLoaded(false)
            }).catch(() => {
                setIsLoaded(true)
                setError(true)
            })
    }

    return (
        <>
            <Col className="container-fluid mt-4">
                <CardColumns>
                    {!isLoaded ? movies.map(movie => (
                            <Card key={movie.id} id={movie.id} >
                                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original/" + movie.poster_path} />
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Text>
                                        <Button variant="primary" onClick={()=>{ 
                                            setMoviet(movie)
                                            console.log(movie)
                                            setShow(true)
                                            }}>Detail</Button>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Relased date {movie.release_date}</small>
                                </Card.Footer>
                            </Card>
                    )) : <p>Loading...</p>}
                </CardColumns>
            </Col>
            <Modal show={show} onHide={handleClose} 
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
                <Modal.Header closeButton>
                <Modal.Title>{moviet.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image className="img-fluid" src={"https://image.tmdb.org/t/p/original/" + moviet.poster_path} style={{width: "20%", height:"20%"}} />
                    <b> Popularity </b>{moviet.popularity}
                    <br/>
                    <b> Overview :  </b>
                    <br/>
                    {moviet.overview}
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" href={"https://www.themoviedb.org/movie/"+moviet.id} target="_blank" >
                    Link
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};


export default Body;