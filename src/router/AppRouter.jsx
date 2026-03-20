import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import Loader from "../Components/Loader";
import withAuth from "../context/AuthHOC";
import Login from "../pages/Login";

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
    <>
      <Navbar />
      <Routes>
        <Route
          path="/login"
          element={
            <SuspenseWrapper>
              <Login />
            </SuspenseWrapper>
          }
        />
        <Route
          path="/"
          element={
            <SuspenseWrapper>
              {withAuth(Dashboard)()}
            </SuspenseWrapper>
          }
        />
        <Route
          path="/trending"
          element={
            <SuspenseWrapper>
              {withAuth(Trending)()}
            </SuspenseWrapper>
          }
        />
        <Route
          path="/upcoming"
          element={
            <SuspenseWrapper>
              {withAuth(Upcoming)()}
            </SuspenseWrapper>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <SuspenseWrapper>
              {withAuth(Movie)()}
            </SuspenseWrapper>
          }
        />
        <Route
          path="/person/:id"
          element={
            <SuspenseWrapper>
              {withAuth(Person)()}
            </SuspenseWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <SuspenseWrapper>
              {withAuth(Contact)()}
            </SuspenseWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <SuspenseWrapper>
              {withAuth(About)()}
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
    </>
  );
};

export default AppRouter;