import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";




export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      totalResults: this.totalResults,
      loading: false,
      page: 1,
    };
    //this is by default page 1 state
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - News`;
  }
  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b90b723723564ab4ba42b53af11e9440&page=1&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    // });
    this.Updatenews();
  }
  async Updatenews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=b90b723723564ab4ba42b53af11e9440&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  Preclick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b90b723723564ab4ba42b53af11e9440&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   page: this.state.page - 1,
    //   loading: false,
    // });
    this.setState({
      page: this.state.page - 1,
    });
    this.Updatenews();

    //here false is value but for page its not a value we want complete this.state.page-1
  };

  Nextclick = async () => {
    
      this.setState({
        page: this.state.page + 1,
      });
      this.Updatenews();
    }

    
  

  render() {
    return (
      <div className="container my-3">
      <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
      {this.state.loading && <Spinner />}
      <div className="row">
          {!this.state.loading && this.state.articles && this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage } newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
          })}
      </div>
        
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.Preclick}
            disabled={this.state.page <= 1} //page is already set in this.state which is 1
          >
            &laquo; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.Nextclick}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
