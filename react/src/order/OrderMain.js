/**
 * Created by Administrator on 2017/7/29 0029.
 */

import React, { Component } from 'react'
import ApplyOrderList from './ApplyOrderList'
import Header from './component/header'
import OrderMainTop from './component/OrderMainTop'
import MyOrderList from './MyOrderList'

export default class OrderMain extends Component {
  constructor() {
    super()
    this.state = {
      isShowApplyOrderPage: true
    }

    this.allOrderPageOnSelect = this.allOrderPageOnSelect.bind(this)
    this.myOrderPageOnSelect = this.myOrderPageOnSelect.bind(this)
  }

  render() {
    var selectPage = this.getSelectPage()
    // this.getSelectPage()
    return (
      <div>
        <Header
          centerText='首页' />
        <OrderMainTop
          leftText='单据申请'
          rightText='我的单据'
          allOrderPageOnSelect={this.allOrderPageOnSelect}
          myOrderPageOnSelect={this.myOrderPageOnSelect} />
        {selectPage}
      </div>
    )
  }

  getSelectPage() {
    if (this.state.isShowApplyOrderPage) {
      return <ApplyOrderList />
    } else {
      return <MyOrderList />
    }
  }

  allOrderPageOnSelect(e) {
    console.log('点击单据申请')
    this.setState({
      isShowApplyOrderPage: true
    })
  }

  myOrderPageOnSelect(e) {
    console.log('点击我的单据')
    this.setState({
      isShowApplyOrderPage: false
    })
  }
}

OrderMain.contextTypes = {
  router: React.PropTypes.object
}
