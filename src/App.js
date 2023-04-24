import Header from './components/Header';
import News from './components/News';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let pageSize = 12;
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* <Route exact path='/' element={<News country="in" category="business" pageSize={pageSize} />}/> */}
          <Route exact path='/' element={<News key="business"  country="in" category="business" pageSize={pageSize} />} />
          <Route exact path='/business' element={<News key="business" country="in" category="business" pageSize={pageSize} />} />
          <Route exact path='/entertainment' element={<News key="entertainment" country="in" category="entertainment" pageSize={pageSize} />} />
          <Route exact path='/general' element={<News key="general" country="in" category="general" pageSize={pageSize} />} />
          <Route exact path='/health' element={<News key="health" country="in" category="health" pageSize={pageSize} />} />
          <Route exact path='/science' element={<News key="science" country="in" category="science" pageSize={pageSize} />} />
          <Route exact path='/sports' element={<News key="sports" country="in" category="sports" pageSize={pageSize} />} />
          <Route exact path='/technology' element={<News key="technology" country="in" category="technology" pageSize={pageSize} />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
