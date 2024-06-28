import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3 d-flex justify-content-between">
        <div className="card">
       
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
           
            <h5 className="card-title">{title}<span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"80%"}}>
    {source}
    <span class="visually-hidden">unread messages</span>
  </span></h5>

            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
