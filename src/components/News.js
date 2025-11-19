import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

export class News extends Component {
  static defautlProps = {
    country: "us",
    pageSize: 6,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  CapitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `DailyNews - ${this.CapitalizeFirstLetter(
      this.props.category
    )}`;
  }

  async UpdateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.UpdateNews();
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fcf5265e9fa94de29c0e6344c4defe1c&page=1&pagesize=${this.props.pageSize}`;
    // this.setState({loading: true})
    // let data = await fetch(url)
    // let parseData = await data.json()
    // console.log(parseData)
    // this.setState({articles: parseData.articles, totalResults: parseData.totalResults, loading: false})
  }

  //Prevoius Button
  // handlePreviousClick = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.UpdateNews();
  //   // console.log("Previous")
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fcf5265e9fa94de29c0e6344c4defe1c&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
  //   // this.setState({loading: true})
  //   // let data = await fetch(url)
  //   // let parseData = await data.json()
  //   // console.log(parseData)
  //   // this.setState({
  //   //   page: this.state.page - 1,
  //   //   articles: parseData.articles,
  //   //   loading: false
  //   // })
  // };

  //Next Button
  // handleNextClick = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.UpdateNews();
  //   //   console.log("Next")
  //   //   if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fcf5265e9fa94de29c0e6344c4defe1c&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
  //   //   this.setState({loading: true})
  //   //   let data = await fetch(url)
  //   //   let parseData = await data.json()
  //   //   this.setState({
  //   //     page: this.state.page + 1,
  //   //     articles: parseData.articles,
  //   //     loading: false
  //   //   })
  //   // }
  // };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center" style={{marginTop: '80px', marginBottom: '20px'}}>
          {" "}
          DailyNews - <small className='text-primary'>Top {this.CapitalizeFirstLetter(this.props.category)}{" "}
          Headlines</small>
        </h1>
        {this.state.loading && <Loading />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loading={<Spinner/>}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 my-2" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={
                        !element.urlToImage
                          ? "https://dpradhanbjp.com/wp-content/uploads/2025/04/New-Social-Security-Rules-Implementing-From-April-2025.jpg"
                          : element.urlToImage
                      }
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePreviousClick}> &larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize) } type="button" className="btn btn-primary" onClick={this.handleNextClick} > Next &rarr;</button>
        </div> */}
      </>
    );
  }
}

export default News;
