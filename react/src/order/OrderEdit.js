/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React, { Component } from 'react'
import styles from '../theme/styles/publish.css'
import CSSModules from 'react-css-modules'
import Header from './component/header'
import $ from 'jquery'

@CSSModules(styles, {allowMultiple: true})
export default class OrderEdit extends Component {
  static propTypes = {
    location: React.PropTypes.object
  }
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }

    this.orderInfo = props.location.state.orderInfo
    this.headerLeftOnClick = this.headerLeftOnClick.bind(this)
    this.submitOnClick = this.submitOnClick.bind(this)
  }
  handleSubmit() {

  }
  render() {
    return (
      <div>
        <Header
          leftText='首页'
          centerText='单据编辑'
          leftClick={this.headerLeftOnClick} />
        <form styleName='smart-publish' >
          <div>
            <span>姓名：</span>
            <input id='title' ref='userName' type='text' />
            <span>工号：</span>
            <input id='title' ref='userId' type='text' />
          </div>
          <div style={{marginTop: 20}}>
            <span>单据说明：</span>
            <textarea id='description' ref='orderDes' name='description' rows='30' />
          </div>
          <div >
            <button onClick={this.submitOnClick} >提交</button>
          </div>
        </form>
      </div>
    )
  }

  headerLeftOnClick() {
    console.log('点击返回')
    this.context.router.goBack()
  }

  submitOnClick() {
    console.log('提交', this.orderInfo)
    let id = new Date().getTime()
    let orderId = this.orderInfo.orderId
    let orderStatus = '未审批'
    let orderName = this.orderInfo.orderName
    let orderDes = this.refs.orderDes.value.trim()
    let orderApplyTime = this.getCurrentDateTime()
    let userName = this.refs.userName.value.trim()
    let userId = this.refs.userId.value.trim()

    let orderInfo = {
      'id': id,
      'orderId': orderId,
      'orderStatus': orderStatus,
      'orderName': orderName,
      'orderDes': orderDes,
      'orderApplyTime': orderApplyTime,
      'orderApplyer': userName,
      'orderApplyerId': userId
    }
    console.log('orderInfo', orderInfo)
    this.postOrderInfoToServer(orderInfo)
  }

  getCurrentDateTime() {
    let now = new Date()

    let year = now.getFullYear()       // 年
    let month = now.getMonth() + 1    // 月
    let day = now.getDate()            // 日
    let hh = now.getHours()          // 时
    let mm = now.getMinutes()          // 分

    let dateTime = year + '-'

    if (month < 10) {
      dateTime += '0'
    }

    dateTime += month + '-'

    if (day < 10) {
      dateTime += '0'
    }

    dateTime += day + ' '

    if (hh < 10) {
      dateTime += '0'
    }

    dateTime += hh + ':'
    if (mm < 10) {
      dateTime += '0'
    }
    dateTime += mm
    return dateTime
  }

  // 上传数据 成功
  postOrderInfoToServer(orderInfo) {
    $.ajax({
      type: 'post',
      url: 'http://localhost:3003/orders',
      data: orderInfo,
      success: infos => {
        console.log('上传成功', infos)
        this.headerLeftOnClick()
      },
      error: (xhr, status, err) => {
        console.log('上传失败', err.toString())
      }
    })
  }
}

OrderEdit.contextTypes = {
  router: React.PropTypes.object
}
