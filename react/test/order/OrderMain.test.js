/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React from 'react'
import OrderMain from '../../src/order/OrderMain'
import {shallow, mount, render} from 'enzyme'
import {expect} from 'chai'
import sinon from 'sinon'
import {mountWithIntl, intl} from 'helpers/intlEnzymeTestHelper.js'

describe('<OrderMain />', () => {
  let orderMain = mountWithIntl(<OrderMain />)

  it("header defined", function () {
    expect(orderMain.find('div')).to.exist
  })
})

