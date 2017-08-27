/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from '../../theme/styles/header.css'

@CSSModules(styles, {allowMultiple: true})
export default class OrderMainTop extends Component {
  static propTypes = {
    leftText: React.PropTypes.string,
    rightText: React.PropTypes.string,
    allOrderPageOnSelect: React.PropTypes.func.isRequired,
    myOrderPageOnSelect: React.PropTypes.func.isRequired
  }

  static getDefaultProps = {
    leftText: '返回',
    rightText: '提交'
  }

  constructor() {
    super()
    this.state = {
      tabLeftStyle: {background: '#fff'},
      tabRightStyle: {background: '#999'}
    }
  }

  leftClick(e) {
    this.props.allOrderPageOnSelect(e)
    this.setState({
      tabLeftStyle: {background: '#fff'},
      tabRightStyle: {background: '#999'}
    })
  }

  rightClick(e) {
    this.props.myOrderPageOnSelect(e)
    this.setState({
      tabLeftStyle: {background: '#999'},
      tabRightStyle: {background: '#fff'}
    })
  }

  render() {
    const tabLeftStyle = this.state.tabLeftStyle
    const tabRightStyle = this.state.tabRightStyle
    return (
      <div styleName='tabs-nav'>
        <div styleName='tabs tabs-left' style={tabLeftStyle} onClick={(e) => {
          this.leftClick(e)
        }}>{this.props.leftText} </div>
        <div styleName='tabs' style={tabRightStyle} onClick={(e) => {
          this.rightClick(e)
        }}>{this.props.rightText}</div>
      </div>
    )
  }
}
