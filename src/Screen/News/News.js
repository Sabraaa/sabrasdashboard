import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { blogContext } from "../../Context/BlogContextProvider";
import { descShorten } from "../../helpers";
import "./News.scss";

const News = () => {
  const { blog } = useContext(blogContext);
  // console.log(blog);
  return (
    <div className="row">
      {blog.length > 0 ? (
        blog.map((news) => (
          <div className="col-12 col-md-6 col-lg-4 "key={news._id}>
            <div className="card mb-3 news-card-container" >
              <img src={news.image} className="card-img-top" alt="..." />
              <div className="card-body news-each-card ">
                <h5 className="card-title">{news.title}</h5>
                <p className="card-text">{descShorten(news.text, 200)}</p>
                <Link to={`/news/${news._id}`} className="btn news-button">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h2>loading...</h2>
      )}
    </div>
  );
};

export default News;
