import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>
          Blog Web Application
        </h1>
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage/>}> </Route>
            <Route path="/about" element={<AboutPage/>}> </Route>
            <Route path="/articles" element={<ArticlesListPage/>}> </Route>
            <Route path="/articles/:articleId" element={<ArticlePage/>}> </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
