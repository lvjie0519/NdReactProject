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
    rightClick: React.PropTypes.func,
    onMyOrderClick: React.PropTypes.func,
    onRefresh: React.PropTypes.func
  }

  static getDefaultProps = {
    centerText: ''
  }

  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
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
    this.setState({
      show: !this.state.show
    })
  }

  onMyOrderClick() {
    if (this.props.onMyOrderClick) {
      this.props.onMyOrderClick()
    }

    this.setState({
      show: !this.state.show
    })
  }

  onRefresh() {
    if (this.props.onRefresh) {
      this.props.onRefresh()
    }

    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div style={{height: 'auto'}}>
        <div styleName='header-container'>
          <a styleName='left-btn' onClick={(e) => { this.leftClick(e) }} />
          <span styleName='center-text'>{this.props.centerText}</span>
          <a styleName='right-btn' onClick={(e) => { this.rightClick(e) }} />
        </div>
        {this.state.show ? (
          <div>
            <div styleName='mask' />
            <div styleName='right-list'>
              <ul>
                <li onClick={(e) => { this.onMyOrderClick() }} >我的订单</li>
                <li onClick={(e) => { this.onRefresh() }} >刷新</li>
              </ul>
            </div>
          </div>
        ) : ''}
      </div>
    )
  }
}
