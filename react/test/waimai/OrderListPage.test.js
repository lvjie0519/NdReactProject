/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React from 'react'
import OrderListPage from '../../src/waimai/OrderListPage'
import {shallow, mount, render} from 'enzyme'
import {expect} from 'chai'
import sinon from 'sinon'
import {mountWithIntl, intl} from 'helpers/intlEnzymeTestHelper.js'

describe('<OrderListPage />', () => {
  let orderListPage = mountWithIntl(<OrderListPage />)

  it("header defined", function () {
    expect(orderListPage.find('div')).to.exist
  })
})

