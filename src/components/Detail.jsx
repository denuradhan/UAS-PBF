import React, { useContext, useEffect, useState } from 'react'
import { MovieContext } from '../contexts/MovieContext'



const Detail = props => {

    const { value, value2 } = useContext(MovieContext)
    const [movie, setMovie] = value2

    return (
        <div>
            <div style = {{marginTop : "8%" }}>
            </div>  
            <h1>{movie.title}</h1>
            <h1>{movie.id}</h1>
        </div>
    )
}

export default Detail
