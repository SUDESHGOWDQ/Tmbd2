import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import Loader from "../Components/Loader";

const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const Trending = React.lazy(() => import("../pages/Trending"));
const Upcoming = React.lazy(() => import("../pages/Upcoming"));
const Movie = React.lazy(() => import("../Layout/Movie"));
const ErrorPage = React.lazy(() => import("../Layout/404Error"));
const Contact = React.lazy(() => import("../pages/Contact"));
const About = React.lazy(() => import("../pages/About"));
const Person = React.lazy(() => import("../Layout/Movie/Person/index"));

const SuspenseWrapper = ({ children }) => {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <SuspenseWrapper>
              <Dashboard />
            </SuspenseWrapper>
          }
        />
        <Route
          path="/trending"
          element={
            <SuspenseWrapper>
              <Trending />
            </SuspenseWrapper>
          }
        />
        <Route
          path="/upcoming"
          element={
            <SuspenseWrapper>
              <Upcoming />
            </SuspenseWrapper>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <SuspenseWrapper>
              <Movie />
            </SuspenseWrapper>
          }
        />
        <Route
          path="/person/:id"
          element={
            <SuspenseWrapper>
              <Person />
            </SuspenseWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <SuspenseWrapper>
              <Contact />
            </SuspenseWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <SuspenseWrapper>
              <About />
            </SuspenseWrapper>
          }
        />
        <Route
          path="*"
          element={
            <SuspenseWrapper>
              <ErrorPage />
            </SuspenseWrapper>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;