import React, { Component } from 'react'

export default class NewsItem extends Component {
    constructor(){
        super();
        console.log("hello i am a constructor");
    }

    render() {
        let {title,description,imageurl} = this.props;
        return (
           
            <div>
                <div className="card" style={{width: "18rem"}}>
              <img src={imageurl} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="/newsdetail" className="btn tbn-sm btn-primary">Go somewhere</a>
            </div>
          </div>
            </div>
        )
    }
}
