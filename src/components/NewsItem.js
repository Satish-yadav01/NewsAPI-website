import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title,description,img,url,emptyImage } = this.props;

        return (
            <div>
                <div class="card" style={{width: "18rem;"}}>
                    <img class="card-img-top" src={!img?emptyImage:img} alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">{!title?'No title available':title}</h5>
                            <p class="card-text">{!description?'No description available':description}</p>
                            <a href={url} target='_blank' class="btn btn-sm btn-primary">Read</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
