import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import Loader from "../Components/Loader";
import Pagination from "../Components/Pagination";

const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const Trending = React.lazy(() => import("../pages/Trending"));
const Upcoming = React.lazy(() => import("../pages/Upcoming"));
const Movie = React.lazy(() => import("../Layout/Movie"));
const ErrorPage = React.lazy(() => import("../Layout/404Error"));
const Contact = React.lazy(() => import("../pages/Contact"));
const About= React.lazy(() => import("../pages/About"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="/trending"
          element={
            <Suspense fallback={<Loader />}>
              <Trending />
            </Suspense>
          }
        />
        <Route
          path="/upcoming"
          element={
            <Suspense fallback={<Loader />}>
              <Upcoming />
            </Suspense>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <Suspense fallback={<Loader />}>
              <Movie />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<Loader />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<Loader />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <ErrorPage />
            </Suspense>
          }
        />
      </Routes>
      <Pagination />
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;