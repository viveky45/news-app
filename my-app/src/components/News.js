import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {

    static defaultProps = {
        country:'in',
        pageSize:8,
        category:'general'
    }
    static propTypes = {
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
    }
    articles= [
        {
        "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
        },
        "author": "Rachel Pannett",
        "title": "France to bill Australia over submarine deal as Britain's Johnson tells Macron: 'Donnez-moi un break' - The Washington Post",
        "description": "Australia agreed to buy 12 submarines from France before it joined the AUKUS defense pact and the break fee — on top of more than $1 billion reportedly already spent — could be substantial.",
        "url": "https://www.washingtonpost.com/world/2021/09/23/submarine-france-australia-boris-johnson/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/SPHN3NQ2D4I6ZPVIGCHKCNCZJ4.jpg&w=1440",
        "publishedAt": "2021-09-23T06:39:15Z",
        "content": "Pommellet said that Australia had told his company, which is majority-owned by the French taxpayer, to go ahead with a new phase of the program on the very morning last week that the contract was ter… [+3456 chars]"
        }
    ]
      
    constructor(){
        super();
        this.state={
            articles:this.articles,
            loading:false,
            page:1
        }
    }
    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a2f198470e4242b8ac53a1ecafbba5b5&pageSize=${this.props.pageSize}`;
          let data=await fetch(url);
          let parsedData=await data.json();
          this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults})
      }
   handlePrevClick= async()=>{
     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a2f198470e4242b8ac53a1ecafbba5b5&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
     let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({
        page:this.state.page-1,
        articles: parsedData.articles,
        loading:false
    })
    }
   handleNextClick=async()=>
   {
       if(!(this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize)))
       {
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a2f198470e4242b8ac53a1ecafbba5b5&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({
        page:this.state.page+1,
        articles: parsedData.articles,
        loading:false
    })
       }
   }
    
    render() {
        return (
            <div className="container my 3" >
                <h1 className="text-center">Newsapp  Top Headlines</h1>
                {this.state.loading && <Spinner/>}
                 <div className="row" >
                {!this.state.loading && this.state.articles.map((element)=>{
                    
               return <div className="col md 4" key={element.url}>
                    <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageurl={element.urlToImage} newsUrl={element.url}/>
                </div>
                })}
                </div>
                
                <div className="container my-3 d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
                      

            </div>
        )
    }
}
