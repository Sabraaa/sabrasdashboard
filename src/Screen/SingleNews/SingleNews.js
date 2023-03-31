import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { blogContext } from "../../Context/BlogContextProvider";
import News from "../News/News";

const SingleNews = () => {
  const { blog } = useContext(blogContext);
  const params = useParams();
  let SingleNews = blog.find((item) => {
    return item._id === params.id;
  });
  return (
    <div className="container">
      {SingleNews.length !== 0 ? (
        <div className="blog-single">
          <img src={SingleNews.image} alt="..." className="w-100"/>
          <div className="blog-single-wrapper">
            <div className="blog-single-wrapper-header">
              <h2>{SingleNews.title}</h2>
            </div>
            <p>{SingleNews.text}</p>
          </div>
        </div>
      ) : (
        <h2>loading...</h2>
      )}
    </div>
  );
};

export default SingleNews;
