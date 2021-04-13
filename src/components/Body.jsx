import React, { Component } from 'react'
import {Card, CardColumns, Col} from 'react-bootstrap'


export default class Body extends Component {
    constructor(props){
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            movies: [],
            link: "https://api.themoviedb.org/3/trending/movie/week?api_key=1304eb73177f6db734ad08f218c547c0"
        }
        
    }
    componentDidMount(){
        fetch(this.state.link)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        movies: result.results
                    })
                },
                (error) => {
                    this.setState({
                      isLoaded: true,
                      error
                    });
                  }
            )
    }
    render() {
        const { error, isLoaded, movies } = this.state;
        if(error){
            return <div>Error: {error.message}</div>;
        }else if(!isLoaded){
            return <div>Loading...</div>;
        }else{
            return (
                <div>
                    <div>
                        <h1 id="demo">hallo</h1>
                    </div>
                    <Col className="container-fluid mt-4">
                        <CardColumns>
                        {movies.map(movie => (
                            <Card key={movie.id} id={movie.title} >
                                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original/"+movie.poster_path}/>
                                <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Relased date {movie.release_date}</small>
                                </Card.Footer>
                            </Card>
                        ))}
                        </CardColumns> 
                    </Col>
                </div>
            )
        }
    }
}
