import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchPopularMovies, searchMovies } from "./api/index";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import Loader from "./Components/Loader";
import Movie from "./Layout/Movie";
import SidePanel from "./Layout/SidePanel";
import ErrorPage from "./Layout/404Error";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Trending from './pages/Trending'
import Upcoming from './pages/Upcoming'
import "./App.css";

const Home = React.lazy(() => import("./Layout/Home"));
const Pagination = React.lazy(() => import("./Components/Pagination"));

const App = () => {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (search) {
      searchMovies(search,currentPage).then((d) => {
        setMovie(d.results);
        setTotalPages(d.total_pages);
      });
    } else {
      fetchPopularMovies(currentPage).then((d) => {
        setMovie(d.results);
        setTotalPages(d.total_pages);
      });
    }
  }, [search, currentPage]);

  function handleNext() {
    if (currentPage < totalPages) {
		setCurrentPage((prev) => prev + 1);
	}
  }

  function handlePrev() {
    if(currentPage > 1){
		setCurrentPage((prev) => prev - 1);
	}
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar search={search} setSearch={setSearch} />

        <Routes>
          <Route
            path="/"
            element={
               <Suspense fallback={<Loader />}>
                   <div className="main">
                     <div className="main-left">
                       <SidePanel />
                     </div>
                     <div className="main-right">
                      <Home movie={movie} />
					   <Pagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                       />
                     </div>
                    </div>
                </Suspense>
            }
          />

          <Route path="/movie/:id" element={<Movie />} />
		  <Route path="/contact" element={<Contact/>}/>
		  <Route path="/about" element={<About/>}/>
		  <Route path="/trending" element={<Trending  />}/>
		  <Route path="/upcoming" element={<Upcoming/>}/>
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;