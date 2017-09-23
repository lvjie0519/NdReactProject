/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React from 'react'
import OrderPayPage from '../../src/waimai/OrderPayPage'
import {shallow, mount, render} from 'enzyme'
import {expect} from 'chai'
import sinon from 'sinon'
import {mountWithIntl, intl} from 'helpers/intlEnzymeTestHelper.js'

describe('<OrderPayPage />', () => {
  let orderPayPage = mountWithIntl(<OrderPayPage />)

  it("header defined", function () {
    expect(orderPayPage.find('div')).to.exist
  })
})

