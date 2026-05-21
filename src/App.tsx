import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Festival } from './pages/Festival';
import { Baltimore4th } from './pages/Baltimore4th';
import { OurStory } from './pages/OurStory';
import { StandStrong } from './pages/StandStrong';
import { Partners } from './pages/Partners';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="festival" element={<Festival />} />
          <Route path="baltimore4th" element={<Baltimore4th />} />
          <Route path="our-story" element={<OurStory />} />
          <Route path="stand-strong" element={<StandStrong />} />
          <Route path="partners" element={<Partners />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
