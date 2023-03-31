import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { BLOG_BASE_URL } from "../Services/api";

export const blogContext = createContext();
const BlogContextProvider = ({ children }) => {
  const [blog, setBlog] = useState([]);
  const getBlogs =()=>{
    axios.get(`${BLOG_BASE_URL}blogs`)
    .then(res => setBlog(res.data.blogs))
  }
  useEffect(() => {
    getBlogs()
  }, [])

  
  return (
    <blogContext.Provider value={{ blog, setBlog }}>
      {children}
    </blogContext.Provider>
  );
};
export default BlogContextProvider;
