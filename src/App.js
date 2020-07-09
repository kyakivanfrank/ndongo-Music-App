import React from 'react';
import './styles/App.css';
import databaseJson from "./components/databaseJson";
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import ArtistPage from './components/ClickedPages/ArtistPage';
import SongPage from './components/ClickedPages/SongPage';
import {  Route, Switch } from "react-router-dom";
import MainComponent from './components/MainComponent';
import PlayBar from './components/ClickedPages/PlayBar';


class App extends React.Component {

  constructor( props ){
    super( props );
    this.state = { data : databaseJson.Music }
  }

render(){
  const { data } = this.state;


  return <div >
  <Header/> 
    <div className="replacerDiv"></div>
<PlayBar />

  <Switch>
      <Route exact={true} path="/" render={() => <MainComponent data={data} />}/>
      <Route exact={true} path={`/:artistName/:albumTitle/:title`} render={ ({match}) => <SongPage {...match} data={data} /> }/>
      <Route exact={true} path={`/:artistName`} render={ ({match}) => <ArtistPage {...match} data={data} />}/>
  </Switch>
  <Footer/>

</div>

}}
  export default App;