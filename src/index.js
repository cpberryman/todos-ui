import React from 'react'
import ReactDOM from "react-dom/client";
// import { render } from 'react-dom' // destructuring? using ReactDOM.render directly. 
import AddItemForm from "./components/AddItemForm";

const init = () => {  // assigning init function, callback with render call.
  const rootElement = document.getElementById('app');
  const root = ReactDOM.createRoot(rootElement);
  root.render(<AddItemForm />);
}

init() // init executed here.

