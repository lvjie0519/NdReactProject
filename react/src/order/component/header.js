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
    centerText: React.PropTypes.string,
    leftClick: React.PropTypes.func
  }

  static getDefaultProps = {
    leftText: '',
    centerText: ''
  }

  leftClick(e) {
    if (this.props.leftClick != null) {
      this.props.leftClick()
    }
  }

  render() {
    return (
      <div styleName='header-container'>
        <a styleName='left-text' onClick={(e) => {
          this.leftClick(e)
        }}>{this.props.leftText}</a>
        <span styleName='center-text'>{this.props.centerText}</span>
      </div>
    )
  }
}
