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
            <textarea id='description' ref='orderDes' rows='30' />
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
    // this.context.router.goBack()
    this.context.router.push({
      pathname: '/'
    })
  }

  submitOnClick() {
    console.log('提交', this.orderInfo)
    let id = new Date().getTime()
    let orderId = this.orderInfo.orderId
    let orderStatus = '未审批'
    let orderName = this.orderInfo.orderName
    let orderDes = this.refs.orderDes.value.trim()
    let userName = this.refs.userName.value.trim()
    let userId = this.refs.userId.value.trim()

    let orderInfo = {
      'id': id,
      'orderId': orderId,
      'orderStatus': orderStatus,
      'orderName': orderName,
      'orderDes': orderDes,
      'orderApplyer': userName,
      'orderApplyerId': userId
    }
    console.log('orderInfo', orderInfo)
    this.postOrderInfoToServer(orderInfo)
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
