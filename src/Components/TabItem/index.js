import React, { Component } from 'react'
import './index.css'
export default class TabItem extends Component {
    
render() {
    const {tabDetails,clickTabItem,isActive}=this.props
    const {tabId,displayText}=tabDetails
    const activeTabBtnClassName=isActive ? 'active-tab-btn':"btn1"
    return (
       <li className="list-items">
       <button
        type="button"
        // className={`tab-btn ${activeTabBtnClassName}`}
        className={activeTabBtnClassName}
        
        onClick={()=>clickTabItem(tabId)}
        >
        {displayText}
      </button>
    </li>
    )
  }
}

