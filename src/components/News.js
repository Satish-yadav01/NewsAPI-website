import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: [],
      loading: false
    }
  }

  async componentDidMount() {
    let NEWS_URL = "https://newsapi.org/v2/everything?q=tesla&from=2023-03-23&sortBy=publishedAt&apiKey=3fb19034e70b441b8e6fecf5228f23b4";
    let data = await fetch(NEWS_URL);
    let newsData = await data.json()
    console.log(newsData);
    this.setState({ articles: newsData.articles })
  }


  render() {
    let myStyle = {
      minHeight: "100vh",

    }
    let emptyImage = "https://images.wsj.net/im-767882/social";
    return (
      <div className='container' style={myStyle}>
        <h1 className='text-center my-3 py-2'>News Upto date</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} description={element.description} img={element.urlToImage} url={element.url} emptyImage = {emptyImage}/>
            </div>
          })}
        </div>

      </div>
    )
  }
}

export default News
