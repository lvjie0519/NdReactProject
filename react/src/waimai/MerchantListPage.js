/**
 * Created by Administrator on 2017/9/23 0023.
 */
import React, { Component } from 'react'
import $ from 'jquery'
import CSSModules from 'react-css-modules'
import Header from './component/header'
import MerchantListItem from './component/MerchantListItem'
import styles from '../theme/styles/index.css'

// 商家列表页面
@CSSModules(styles, {allowMultiple: true})
export default class MerchantListPage extends Component {
  constructor(props) {
    super(props)

    console.log('run FoodTakeOutListPage')
    this.state = {merchantInfos: [], isLoading: true}

    this.headerLeftClick = this.headerLeftClick.bind(this)
    this.headerRightClick = this.headerRightClick.bind(this)
    this.onMyOrderClick = this.onMyOrderClick.bind(this)
    this.onRefresh = this.onRefresh.bind(this)
    this.onBuyClick = this.onBuyClick.bind(this)
  }

  componentDidMount() {
    this.loadDataFromMock()
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>加载中....</div>
      )
    } else {
      // 显示列表内容
      let items = this.state.merchantInfos.map(function (merchantInfo, index) {
        let isShowBuyBtn = true
        if (merchantInfo.merchantCount === 0) {
          isShowBuyBtn = false
        }
        return <MerchantListItem
          key={index}
          merchantInfo={merchantInfo}
          isShowBuyBtn={isShowBuyBtn}
          onBuyClick={this.onBuyClick}
        />
      }.bind(this))
      return (
        <div>
          <Header
            centerText='外卖商品列表'
            leftClick={this.headerLeftClick}
            rightClick={this.headerRightClick}
            onMyOrderClick={this.onMyOrderClick}
            onRefresh={this.onRefresh}
          />
          <div styleName='content-wrapper'>
            {items}
          </div>
        </div>
      )
    }
  }

  headerLeftClick() {
    console.log('headerLeftClick')
  }

  headerRightClick() {
    console.log('headerRightClick')
  }

  // 进入我的订单列表页面
  onMyOrderClick() {
    console.log('onMyOrderClick')
    console.log(this.context.router)
    this.context.router.push({
      pathname: '/order-list'
    })
  }

  // 刷新商家列表
  onRefresh() {
    console.log('onRefresh')
    let len = this.state.merchantInfos.length
    // 利用随机数重新设置商家热度
    for (let i = 0; i < len; i++) {
      let hot = Math.round(Math.random() * 40)
      this.state.merchantInfos[i].merchantHot = hot
    }

    // 根据热度进行重新排序
    for (let i = 0; i < len - 1; i++) {
      for (let j = i + 1; j < len; j++) {
        let merchantInfo = this.state.merchantInfos[i]
        if (merchantInfo.merchantHot < this.state.merchantInfos[j].merchantHot) {
          merchantInfo = this.state.merchantInfos[j]
          this.state.merchantInfos[j] = this.state.merchantInfos[i]
          this.state.merchantInfos[i] = merchantInfo
        }
      }
    }

    console.log('onRefresh...', this.state.merchantInfos)
    this.setState({onRefresh: new Date().getTime(), isLoading: false})
  }

  onBuyClick(merchantInfo) {
    console.log('onBuyClick', merchantInfo)

    this.context.router.push({
      pathname: '/order-pay',
      state: {
        merchantInfo: merchantInfo
      }
    })
  }

  loadDataFromMock() {
    $.ajax({
      url: 'http://localhost:3003/merchants?_sort=merchantHot&_order=DESC',
      dataType: 'json',
      type: 'get',
      success: merchants => {
        console.log(merchants)
        this.setState({merchantInfos: merchants, isLoading: false})
      },
      error: (xhr, status, err) => {
        console.log(err.toString())
      }
    })
  }
}

MerchantListPage.contextTypes = {
  router: React.PropTypes.object
}
