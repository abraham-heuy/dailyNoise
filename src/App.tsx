import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Newspaper from './components/Newspaper';
import ShowsReviews from './components/shows/showpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Newspaper />} />
        <Route path="/shows-reviews" element={<ShowsReviews />} />
      </Routes>
    </Router>
  );
}

export default App;