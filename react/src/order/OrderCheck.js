/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React, { Component } from 'react'
import styles from '../theme/styles/edit.css'
import CSSModules from 'react-css-modules'
import Header from './component/header'
import $ from 'jquery'

@CSSModules(styles, {allowMultiple: true})
export default class OrderCheck extends Component {
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
    this.checkSuccess = this.checkSuccess.bind(this)
    this.checkFailure = this.checkFailure.bind(this)
  }
  handleSubmit() {

  }
  render() {
    return (
      <div>
        <Header
          leftText='首页'
          centerText=''
          leftClick={this.headerLeftOnClick} />
        <h1 styleName='smart-orderName'>{this.orderInfo.orderName}</h1>
        <form styleName='smart-edit' >
          <div>
            <span>节点审批人：</span>
            <text>XXX</text>
          </div>
          <div style={{marginTop: 20}}>
            <span>审批说明：</span>
            <textarea id='description' ref='checkDes' rows='30' />
          </div>
          <div >
            <button onClick={this.checkSuccess} >通过</button>
            <button onClick={this.checkFailure} >不通过</button>
          </div>
        </form>
      </div>
    )
  }

  headerLeftOnClick() {
    console.log('点击返回')
    // this.context.router.goBack()
    this.context.router.push({
      pathname: '/'
    })
  }

  checkSuccess() {
    this.updateOrderInfoToServer(1)
  }

  checkFailure() {
    this.updateOrderInfoToServer(0)
  }

  updateOrderInfoToServer(type) {
    if (type === 0) {
      console.log('单据审核不通过')
      this.orderInfo.orderStatus = '审批不通过'
    } else {
      console.log('单据审核通过')
      this.orderInfo.orderStatus = '审批完成'
    }
    console.log('提交', this.orderInfo)
    this.postOrderInfoToServer(this.orderInfo)
  }

  // 上传数据 成功
  postOrderInfoToServer(orderInfo) {
    $.ajax({
      type: 'put',
      url: 'http://localhost:3003/orders/' + orderInfo.id,
      data: orderInfo,
      success: infos => {
        console.log('上传成功', infos)
        this.goCheckResultPage()
      },
      error: (xhr, status, err) => {
        console.log('上传失败', err.toString())
      }
    })
  }

  goCheckResultPage() {
    this.context.router.push({
      pathname: '/check-order-result',
      state: {
        orderInfo: this.orderInfo
      }
    })
  }
}

OrderCheck.contextTypes = {
  router: React.PropTypes.object
}
