import React from "react";
import { useRouteError } from "react-router-dom";
import Header from "../../components/Header/Header";

function ErrorPage() {
  const error = useRouteError();
  console.log(error)
  let title = "An error occured";
  let message = "Something went wrong!"

  if(error.message) {
    message = error.message
  }

  if (error.status === 500) {
    message = error.data.message;
    // title = "something went wrong"
    // message = "Could not fetch"
  }
  if (error.status === 404) {
    title = "Not found";
    if (error.data.message) {
      message = error.data.message;
    } else {
      message = "Cannot find page";
    }
  }
 

  
  return (
    <>
    <Header />
    <main style={{
      padding: '6rem 1rem',
      color: 'white'
    }}>

      <h1>{title}</h1>
      <p>{message}</p>
    </main>
    </>
  );
}

export default ErrorPage;
