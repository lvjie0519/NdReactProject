/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from '../../theme/styles/header.css'

@CSSModules(styles, {allowMultiple: true})
export default class Header extends Component {
  static propTypes = {
    centerText: React.PropTypes.string,
    leftClick: React.PropTypes.func,
    rightClick: React.PropTypes.func
  }

  static getDefaultProps = {
    centerText: ''
  }

  leftClick(e) {
    if (this.props.leftClick !== null) {
      this.props.leftClick()
    }
  }

  rightClick(e) {
    if (this.props.rightClick != null) {
      this.props.rightClick()
    }
  }

  render() {
    return (
      <div styleName='header-container'>
        <button styleName='left-text' onClick={(e) => {
          this.leftClick(e)
        }}>箭头</button>
        <h2>{this.props.centerText}</h2>
        <button styleName='right-btn' onClick={(e) => {
          this.rightClick(e)
        }}>图片</button>
      </div>
    )
  }
}
