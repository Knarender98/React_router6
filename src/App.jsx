import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact } from "./pages/Contact";
import { AppLayout } from "./Components/Layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { getMoviesData } from "./api/GetApiData";
import { MovieDetails } from "./pages/MovieDetails";
import { getMovieDetails } from "./api/GetMovieDetails";

export const App = ()=> {

  const router = createBrowserRouter([

    {
      path : "/", 
      element: <AppLayout />, 
      errorElement: <ErrorPage />,
      children : [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: getMoviesData
        },
        {
          path: "/movie/:movieID",
          element: <MovieDetails />,
          loader: getMovieDetails,
        },
        {
          path: "/contact",
          element: <Contact />
        }
      ]
    },
  ])

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <>
  //       <Route path= "/" element="Home" />
  //       <Route path= "/about" element="About" />
  //       <Route path= "/movie" element="Movie" />
  //       <Route path= "/contact" element="Contact" />
  //     </>
  //   )
  // )

  return <RouterProvider router={router} />
}