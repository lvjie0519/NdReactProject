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

  const props = {
    location: {
      state: {
        id: 0,
        merchantId: 0,
        merchantLogo: "../src/static/images/a.jpg",
        merchantName: "奥尔良烤翅",
        merchantDes: "新鲜出炉的奥尔良烤翅",
        merchantPrice: "6",
        merchantCount: 10,
        merchantHot: 30
      }
    }
  }

  let orderPayPage = mountWithIntl(<OrderPayPage {...props}/>)

  it("header defined", function () {
    expect(orderPayPage.find('div')).to.exist
  })
})

