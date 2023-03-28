import React from 'react';

const AnimeCard = ({anime}) => {
    return (
        <article className="anime-card">
            <a href= {anime.url} target="_blank" rel="noreferrer">
                <figure>
                    <img 
                        src={anime.images.webp.image_url}
                        alt="Anime Images" />
                </figure>
                <h3>{anime.title}</h3>
                <p>Year: {anime.year} Episodes: {anime.episodes}</p>
            </a>
        </article>
    );
}

export default AnimeCard