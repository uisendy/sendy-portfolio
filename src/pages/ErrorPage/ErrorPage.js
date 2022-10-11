import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BsArrowUpLeft } from 'react-icons/bs';
const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div
      id="error-page"
      className="bg-black flex flex-col gap-10 text-center justify-center text-white h-[100vh] w-full"
    >
      <h1 className=" text-5xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link
        to={'/'}
        className=" fixed top-10 left-10 uppercase hover:underline hover:italic flex gap-3 text-3xl items-center"
      >
        {' '}
        <BsArrowUpLeft className="text-3xl" /> Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
