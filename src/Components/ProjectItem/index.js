import React, { Component } from 'react'
import './index.css'
export default class ProjectItem extends Component {
  render() {
    const {projectDetails,projectId}=this.props
    const {imageURL,description,title}=projectDetails
    return (
      <div className='main-project-container'>
       
         <li className="image-container">
            <img
            className="project-item-image"
            src={imageURL}
            alt={`project-item${projectId}`}
            />
            <div className="project-item-details-container">
            <h1 className="image-heading">{title}</h1>
            <p className="description">{description}</p>
            </div>
        </li>
      </div>
    )
  }
}
