/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React from 'react'
import OrderListItem from '../../../src/waimai/component/OrderListItem'
import {shallow, mount, render} from 'enzyme'
import {expect} from 'chai'
import sinon from 'sinon'
import {mountWithIntl, intl} from 'helpers/intlEnzymeTestHelper.js'

describe('<OrderListItem />', () => {
  const props = {
    questionInfo: {
      "merchantName": "小龙虾",
      "merchantDes": "新鲜出炉的小龙虾",
      "createTime": "2017-09-23 14:44",
      "totalMoney": "72"
    },
    showAll: true,
    onItemClick: function () {}
  }
  let orderListItem = mountWithIntl(<OrderListItem {...props}/>)

  it("header defined", function () {
    expect(orderListItem.find('div')).to.exist
  })
})

