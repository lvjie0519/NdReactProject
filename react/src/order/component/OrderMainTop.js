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

  leftClick(e) {
    this.props.allOrderPageOnSelect(e)
  }

  rightClick(e) {
    this.props.myOrderPageOnSelect(e)
  }

  render() {
    return (
      <div styleName='tabs-nav'>
        <div styleName='tabs tabs-left' onClick={(e) => { this.leftClick(e) }} >{this.props.leftText} </div>
        <div styleName='tabs' onClick={(e) => { this.rightClick(e) }} >{this.props.rightText}</div>
      </div>
    )
  }
}
