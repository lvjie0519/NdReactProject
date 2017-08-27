/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React from 'react'
import OrderCheckResult from '../../src/order/OrderCheckResult'
import {shallow, mount, render} from 'enzyme'
import {expect} from 'chai'
import sinon from 'sinon'
import {mountWithIntl, intl} from 'helpers/intlEnzymeTestHelper.js'

describe('<OrderCheckResult />', () => {
  const props = {
    location: {
      state: {
        "id": "1503318764876",
        "orderId": "1503318764864",
        "orderStatus": "未审批",
        "orderName": "年假申请表",
        "orderApplyTime": "2017-08-21 20:32",
        "orderApplyer": "陈晶晶"
      }
    }
  }
  let orderMain = mountWithIntl(<OrderCheckResult {...props}/>)

  it("header defined", function () {
    expect(orderMain.find('div')).to.exist
  })
})

