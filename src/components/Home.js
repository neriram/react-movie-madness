import React, { useState, useEffect } from 'react';
//API 
import Api from '../Api'

//Imports from config file
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'

//Components

//Hook
import { useHomeFetch } from '../hooks/useHomeFetch'
//Image
import NoImage from '../images/no_image.jpg';

const Home = () => {
    const { state, loading, error } = useHomeFetch();
   


    return <div>Home Page</div>
}

export default Home;