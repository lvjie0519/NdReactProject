/**
 * Created by Administrator on 2017/9/23 0023.
 */
import React, { Component } from 'react'

import MerchantListPage from './MerchantListPage'

export default class FoodTakeOutMain extends Component {
  constructor(props) {
    super(props)

    console.log('run main')
  }

  render() {
    return (
      <MerchantListPage />
    )
  }
}
