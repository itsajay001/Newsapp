import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 5
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number
  }


  constructor() {
    super();
    this.state = {
      articles: this.articles,
      totalResults: this.totalResults,
      loading: false,
      page: 1,
    };
    //this is by default page 1 state
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&apiKey=b90b723723564ab4ba42b53af11e9440&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  Preclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&apiKey=b90b723723564ab4ba42b53af11e9440&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });

    this.setState({
      page: this.state.page - 1,
      loading: false,
    });
    //here false is value but for page its not a value we want complete this.state.page-1
  };

  Nextclick = async () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&apiKey=b90b723723564ab4ba42b53af11e9440&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ articles: parsedData.articles });

      this.setState({
        page: this.state.page + 1, //
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">News Headline</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {this.state.articles && !this.state.loading &&  //if loading is false then only show the article
            this.state.articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 88) : ""}
                    description={
                      element.description
                        ? element.description.slice(1, 80)
                        : ""
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://play-lh.googleusercontent.com/_ahCmEdTn8h5omlAg0jg9Y15KArlptm4qcbnyWSzGU-jM4mR1LeArqbMM7DzgZjNywO2"
                    }
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            class="btn btn-dark"
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
            class="btn btn-dark"
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
