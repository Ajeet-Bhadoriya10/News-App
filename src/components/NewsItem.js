import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div>
       <div className="card my-3">
          <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img src={imageUrl} className="card-img-top" alt="..." style={{height: '200px', objectFit: 'cover'}}/>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title" style={{minHeight: '50px', overflow: 'hidden', textOverflow: 'ellipsis'}}>
              {title}
            </h5>
            <p className="card-text" style={{minHeight: '80px', overflow: 'hidden', textOverflow: 'ellipsis'}}>
              {description}
            </p>
            <p className="card-text">
              <small className="text-muted">
                By <strong>{author ? author : "Unknown"}</strong> on {new Date(date).toDateString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary mt-auto"
            >
              Read more
            </a>
          </div>
        </div>

      </div>
    );
  }
}

export default NewsItem;
