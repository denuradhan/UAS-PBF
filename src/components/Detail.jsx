import React, { useContext, useEffect, useState } from 'react'
import { MovieContext } from '../contexts/MovieContext'



const Detail = props => {

    const { value, value2 } = useContext(MovieContext)
    const [movie, setMovie] = value2

    return (
        <div>
            <div style = {{marginTop : "8%" }}>
                <h1>{movie.title}</h1>
            </div>  
        </div>
    )
}

export default Detail
