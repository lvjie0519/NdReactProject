/**
 * Created by Administrator on 2017/9/23 0023.
 */
import React, { Component } from 'react'
import $ from 'jquery'
import Header from './component/header'
import MerchantListItem from './component/MerchantListItem'

// 商家列表页面
export default class MerchantListPage extends Component {
  constructor(props) {
    super(props)

    console.log('run FoodTakeOutListPage')
    this.state = {merchantInfos: [], isLoading: true}

    this.headerLeftClick = this.headerLeftClick.bind(this)
    this.headerRightClick = this.headerRightClick.bind(this)
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
          />
          <div style={{ padding: '10px 30px' }}>
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
