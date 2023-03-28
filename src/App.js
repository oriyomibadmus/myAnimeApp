import React from "react";
import Header from './components/Header';
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const App = () => {

    const [animeList, setAnimeList] = useState([]);
    const [topAnime, setTopAnime] = useState([]);
    const [search, setSearch] = useState([]);

    // Get Top Anime List from Jikan API
    const GetTopAnimeList = async () => {
        const temp = await fetch ('https://api.jikan.moe/v4/top/anime')
        .then(res => res.json());

        setTopAnime(temp.data.slice(0, 10));

    }

    // Prevent reload and call function to fetch data for the search result
    const HandleSearch = e => {
        e.preventDefault();

        FetchAnime(search);
    }

    // Fetch list of anime related to the search query 
    const FetchAnime = async (query) => {
        const temp = await fetch (`https://api.jikan.moe/v4/anime?q=${query}&sfw`)
        .then(res => res.json());

        setAnimeList(temp.data);
        console.log('Need the image Url')
    
    }

    // Run function at page start up
    useEffect(() => {
        GetTopAnimeList();
    }, []);

    return (
        <div className="App">
            <Header/>
            <div className="content-wrap">
                <Sidebar topAnime={topAnime} />
                <MainContent
                    HandleSearch = {HandleSearch}
                    search = {search}
                    setSearch = {setSearch}
                    animeList = {animeList}
                />
            </div>
        </div>
    );
}

export default App;