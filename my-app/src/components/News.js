import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    articles = [
        {
    "author": "Sami Fathi",
    "title": "Apple Labels iPhone 12 As 'Legacy' Device, Lists Four Unreleased iPhones in New MagSafe Charger FCC Filing",
    "description": "Apple has referenced four unreleased iPhones in an updated FCC filing for its MagSafe charger, while at the same time referencing the currently released iPhone 12 lineup as \"legacy\" iPhones. \n\n\n\n\n\nThe new filing doesn't reveal any details about a possible upd…",
    "url": "https://www.macrumors.com/2021/09/07/magsafechargerfilingnewiphones/",
    "urlToImage": "https://images.macrumors.com/t/yNtwcVYiiCXJENLX6bqlWIP4m34=/1920x/https://images.macrumors.com/articlenew/2021/07/iphone12proiphone13pro.jpg",
    "publishedAt": "20210907T06:45:00Z",
    "content": "Apple has referenced four unreleased iPhones in an updated FCC filing for its MagSafe charger, while at the same time referencing the currently released iPhone 12 lineup as \"legacy\" iPhones. \r\nThe ne… [+1276 chars]"
    }
    ]

    constructor(props) {
        super(props);
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
        document.title = this.props.category;
    }
    async updatenews() {
        this.props.setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.props.setProgress(30);

        let parsedData = await data.json();
        this.props.setProgress(50);

        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.updatenews();
    }
    handlePrevClick = async () => {
        this.setState({ page: this.state.page - 1 })
        this.updatenews();
    }
    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 })
        this.updatenews();
    }
    fetchMoreData = async() => {
        this.setState({
            page:this.state.page + 1
        })

        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat( parsedData.articles),
            totalResults: parsedData.totalResults,
        })
      };

    render() {
        return (
            <>
                <h1 className="text-center my-4">Newsapp - Top {document.title} Headlines</h1>
                {this.state.loading && <spinner/>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles!==this.totalResults}
                    loader={<Spinner/>}
                >
                    <div className="container my-2">
                    <div className="row" >
                        {!this.state.loading && this.state.articles.map((element) => {

                            return <div className="col md 4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div>
                </InfiniteScroll>
                


            </>
        )
    }
}
