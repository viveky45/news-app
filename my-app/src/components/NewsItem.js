import React, { Component } from 'react'

export default class NewsItem extends Component {
    constructor(){
        super();
        console.log("hello i am a constructor");
    }

    render() {
        let {title,description,imageurl,newsUrl,author,date,source} = this.props;
        return (
           
            <div>
                <div className="card" style={{width: "20rem"}}>
              <img src={imageurl} className="card-img-top" alt="..." style={{height:"9rem"}}/>
              <div className="card-body">
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source}
    <span class="visually-hidden">unread messages</span>
  </span>
                <h5 className="card-title">{title.slice(0,22)}...</h5>
                <p className="card-text">{description.slice(0,75)}....</p>
                <p class="card-text"><small class="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer"  href={newsUrl} target="_blank" className="btn tbn-sm btn-primary">Read more</a>
            </div>
          </div>
            </div>
        )
    }
}
