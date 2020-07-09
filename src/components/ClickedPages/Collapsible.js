import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import SongTile from './SongTile';

const Collapsible = props => {
  const {selectedArtist } =props;


// const ToggleCollapsible ()=>{
// } to be continued from some research on ReactStrap accordions


  return <div>
  
  {selectedArtist.albums.map((album, index) => { return <div key={index} > 
<button id={album.albumTitle} className="accordion"><h3>{album.albumTitle}</h3></button>
<div className="panel">{album.songs.map((song, index) => <SongTile key={index} {...song} {...selectedArtist} album={album} />)}</div>
    </div> } )}
  
  
  
  
  {selectedArtist.albums.map((album, index) => { return <div key={index} className="albumDiv">  
    <Button id="toggler" >
      <h3>{album.albumTitle}</h3>
    </Button>
    <UncontrolledCollapse toggler="toggler">
      <Card>
        <CardBody>{album.songs.map((song, index) => <SongTile key={index} {...song} {...selectedArtist} album={album} />)}</CardBody>
      </Card>
    </UncontrolledCollapse>
    </div> } )}

  </div>
};
export default Collapsible;
