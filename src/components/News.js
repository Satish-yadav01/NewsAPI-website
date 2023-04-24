import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: [],
      loading: false,
      page : 1
    }
  }

  async updateStatus(){
    let NEWS_URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page}&apiKey=3fb19034e70b441b8e6fecf5228f23b4`;
    let data = await fetch(NEWS_URL);
    let newsData = await data.json()
    this.setState({ articles: newsData.articles })
  }

  componentDidMount=()=> {
    this.updateStatus();
    
  }

  

  handlePreviousButton = ()=>{
    console.log(`this next button work`)
    this.state.page = this.state.page - 1;
    this.updateStatus();
    this.setState({page : this.state.page});
    
  }

  handleNextButton = ()=>{
    console.log(`this next button work`)
    this.updateStatus();
    this.setState({page : this.state.page + 1});
    
  }

  render() {
    let myStyle = {
      minHeight: "100vh",

    }
    let emptyImage = "https://www.marketscreener.com/images/twitter_MS_fdnoir.png";
    return (
      <div className='container' style={myStyle}>
        <h1 className='text-center my-3 py-2'>News Upto date</h1>
        <img src="" alt="" srcset="" />
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} description={element.description} img={element.urlToImage} url={element.url} emptyImage={emptyImage} />
            </div>
          })}
        </div>
        <div className="container d-flex flex-row justify-content-between">
          <button type="button" style={this.state.page<=1?{display:"none"}:{display:"block"}} className="btn btn-dark" onClick={this.handlePreviousButton}>&laquo; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextButton}>Next &raquo;</button>
        </div>
      </div>
    )
  }
}

export default News
