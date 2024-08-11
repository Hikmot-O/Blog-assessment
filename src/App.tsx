import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllBlogs from "./components/AllBlogs";
import BlogDetails from "./components/BlogDetails";
import lazy from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/all-blogs' element={<AllBlogs />}/>
      <Route path='/blog-details' element={<BlogDetails />}/>
      
    </Routes>
  );
}

export default App;
