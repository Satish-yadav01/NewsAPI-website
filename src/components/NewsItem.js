import React, { Component } from 'react'
import noimageavailable from '../no-image-available.jpg'

export class NewsItem extends Component {

    render() {
        let { title, description, img, url } = this.props;

        return (
            
            <div>
                <div className="card">
                    <img className="card-img-top" src={!img ? noimageavailable : img} alt="not available" />
                    <div className="card-body">
                        <h5 className="card-title">{!title ? 'No title available' : title}</h5>
                        <p className="card-text">{!description ? 'No description available' : description}</p>
                        <a href={url} target='_blank' className="btn btn-sm btn-primary">Read</a>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default NewsItem
