/**
 * Created by Administrator on 2017/9/23 0023.
 */
import React, { Component } from 'react'
import $ from 'jquery'
import Header from './component/header'
import CSSModules from 'react-css-modules'
import styles from '../theme/styles/index.css'

// 配送表单页面
@CSSModules(styles, {allowMultiple: true})
export default class OrderPayPage extends Component {
  static propTypes = {
    location: React.PropTypes.object
  }

  constructor(props) {
    super(props)

    this.merchantInfo = props.location.state.merchantInfo
    if (this.merchantInfo == null) {
      this.merchantInfo = {
        id: 0,
        merchantId: 0,
        merchantLogo: '',
        merchantName: '',
        merchantDes: '',
        merchantPrice: '',
        merchantCount: 0,
        merchantHot: 0
      }
    }
    console.log('OrderPayPage...merchantInfo=', this.merchantInfo)
    this.orderPayInfo = {
      merchantName: this.merchantInfo.merchantName,
      merchantDes: this.merchantInfo.merchantDes,
      merchantPrice: this.merchantInfo.merchantPrice,
      userBuycount: 0,
      userName: '',
      userPhone: '',
      userAddress: '',
      totalMoney: 0,
      extra: ''
    }

    this.state = {num: ''}

    this.headerLeftClick = this.headerLeftClick.bind(this)
    this.headerRightClick = this.headerRightClick.bind(this)
  }

  inputNum() {
    const value = this.refs.userBuycount.value
    this.setState({
      num: value
    })
  }

  render() {
    return (
      <div>
        <Header
          centerText='配送表单'
          leftClick={this.headerLeftClick}
          rightClick={this.headerRightClick}
        />
        <div styleName='content-wrapper send-wrapper'>
          <ul styleName='merchant-info' >
            <li>商品名称 <span styleName='merchant-text'>{this.orderPayInfo.merchantName}</span></li>
            <li>商品描述
              <span styleName='merchant-text'>
                { this.orderPayInfo.merchantDes.length > 8 ? `${this.orderPayInfo.merchantDes.slice(0, 8)}...` : this.orderPayInfo.merchantDes }
              </span>
            </li>
            <li>价格 <span styleName='merchant-text'>{this.orderPayInfo.merchantPrice}</span></li>
          </ul>
          <form>
            <ul styleName='merchant-info' >
              <li>数量 <input id='userBuycount' ref='userBuycount' type='text' placeholder='请填写数量'
                onChange={() => { this.inputNum() }} /></li>
              <li>姓名 <input id='userName' ref='userName' type='text' placeholder='请填写姓名' /></li>
              <li>电话 <input id='userPhone' ref='userPhone' type='text' placeholder='请填写电话' /></li>
              <li>地址 <input id='userAddress' ref='userAddress' type='text' placeholder='请填写地址' /></li>
              <li>特殊要求 <input id='extra' ref='extra' type='text' placeholder='请填写特殊要求' /></li>
            </ul>
          </form>
          <div styleName='merchant-buy' >
            <span ref='totalMoney' styleName='merchant-totalmoney' >￥{this.state.totalMoney}</span>
            <a styleName='merchant-buy-btn' onClick={(e) => {
              this.onBuyClick(e)
            }}>确认购买
            </a>
          </div>
        </div>
      </div>
    )
  }

  headerLeftClick() {
    console.log('headerLeftClick')
    this.context.router.goBack()
  }

  headerRightClick() {
    console.log('headerRightClick')
  }

  onBuyClick(e) {
    this.orderPayInfo.userBuycount = this.refs.userBuycount.value.trim()
    this.orderPayInfo.userName = this.refs.userName.value.trim()
    this.orderPayInfo.userPhone = this.refs.userPhone.value.trim()
    this.orderPayInfo.userAddress = this.refs.userAddress.value.trim()
    this.orderPayInfo.extra = this.refs.extra.value.trim()
    this.orderPayInfo.totalMoney = this.state.num * this.orderPayInfo.merchantPrice

    let orderId = new Date().getTime()
    this.orderPayInfo.id = orderId
    this.orderPayInfo.orderId = orderId
    this.orderPayInfo.createTime = this.getCurrentDateTime()

    console.log('onBuyClick...', this.orderPayInfo)

    this.postOrderPayInfoToServer(this.orderPayInfo)
  }

  // 上传数据 成功
  postOrderPayInfoToServer(orderPayInfo) {
    $.ajax({
      type: 'post',
      url: 'http://localhost:3003/orders',
      data: orderPayInfo,
      success: infos => {
        console.log('上传成功', infos)
        this.context.router.push({
          pathname: '/order-list'
        })
      },
      error: (xhr, status, err) => {
        console.log('上传失败', err.toString())
      }
    })
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
}

OrderPayPage.contextTypes = {
  router: React.PropTypes.object
}
