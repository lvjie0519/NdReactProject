/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from '../../theme/styles/header.css'

@CSSModules(styles, {allowMultiple: true})
export default class Header extends Component {
  static propTypes = {
    leftText: React.PropTypes.string,
    rightText: React.PropTypes.string,
    rightClick: React.PropTypes.func
  }

  static getDefaultProps = {
    leftText: '答！',
    rightText: '提问'
  }

  // leftClick(e) {
  //   if (this.props.leftClick != null) {
  //     this.props.leftClick()
  //   }
  // }

  rightClick(e) {
    if (this.props.rightClick != null) {
      this.props.rightClick()
    }
  }

  render() {
    return (
      <div styleName='header-container'>
        <span styleName='left-text'>{this.props.leftText}</span>
        <button styleName='right-btn' onClick={(e) => {
          this.rightClick(e)
        }}>{this.props.rightText}</button>
      </div>
    )
  }
}
