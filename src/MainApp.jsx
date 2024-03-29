import './App.css';
import Row from './Row';
import request from './requests';
import Banner from './Banner';

function MainApp() {
  return (
    <div className="App">
      <Banner fetchURL={request.fetchNetflixOriginals} />

      <Row title="Netflix Originals" fetchURL={request.fetchNetflixOriginals} isPoster={true} />
      <Row title="Trending Now" fetchURL={request.fetchTrendingNow} />
      <Row title="Top Rated" fetchURL={request.fetchTopRated} />
      <Row title="Action" fetchURL={request.fetchAction} />
      <Row title="Comedy" fetchURL={request.fetchComedy} />
      <Row title="Horror" fetchURL={request.fetchHorror} />
      <Row title="Documentaries" fetchURL={request.fetchDocumentaries} />
    </div>
  );
}

export default MainApp;
