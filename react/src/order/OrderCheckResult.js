/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React, { Component } from 'react'
import styles from '../theme/styles/edit.css'
import CSSModules from 'react-css-modules'
import Header from './component/header'

@CSSModules(styles, {allowMultiple: true})
export default class OrderCheckResult extends Component {
  static propTypes = {
    location: React.PropTypes.object
  }
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }

    this.orderInfo = props.location.state.orderInfo
    if (this.orderInfo == null) {
      this.orderInfo = {
        'id': '',
        'orderId': '',
        'orderStatus': '',
        'orderName': '',
        'orderDes': '',
        'orderApplyer': '1234',
        'orderApplyerId': ''
      }
    }
    console.log('传递过来的单据信息', this.orderInfo)
    this.headerLeftOnClick = this.headerLeftOnClick.bind(this)
  }
  handleSubmit() {

  }
  render() {
    let info = ''
    if (this.orderInfo.orderStatus === '审批完成') {
      info = '单据审批通过'
    } else {
      info = '单据审批不通过'
    }
    return (
      <div>
        <Header
          leftText='首页'
          centerText=''
          leftClick={this.headerLeftOnClick} />
        <h1 styleName='smart-orderName'>{this.orderInfo.orderName}</h1>
        <h3>{info}</h3>
      </div>
    )
  }

  headerLeftOnClick() {
    console.log('点击返回')
    this.context.router.push({
      pathname: '/'
    })
  }
}

OrderCheckResult.contextTypes = {
  router: React.PropTypes.object
}
