import React, { Component } from 'react'

export default class NewsItem extends Component {
    constructor(){
        super();
        console.log("hello i am a constructor");
    }

    render() {
        let {title,description,imageurl,newsUrl,author,date,source} = this.props;
        return (
           
            <div className="my-3" style={{display:'flex',justifyContent:'center'}}>
                <div className="card" style={{width:'20rem'}}>
                    <div>
                    <span className="badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>{source}
                    </span>
            </div>
              <img src={!imageurl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-announcement/-476*249w4/gsmarena-00.jpg": imageurl} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer"  href={newsUrl} target="_blank" className="btn tbn-sm btn-primary">Read more</a>
            </div>
          </div>
            </div>
        )
    }
}
