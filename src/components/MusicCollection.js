import React from "react";
import SongComponent from "./SongComponent";


export default (props) => 
{
    const {music} = props;

        return <div className="collectionPanel">
        <h2>Popular Music</h2>
        { music.map(artist => 
            artist.albums.map( album => 
                album.songs.map( (song, index) =>  
            
            <SongComponent key={index} songName={song.title} songArtist={artist.artistName} albumTitle={album.albumTitle} albumArt={album.coverimage} />
            ))) }
        </div> 



}