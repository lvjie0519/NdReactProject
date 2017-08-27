/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React from 'react'
import Header from '../../../src/order/component/header'
import {shallow, mount, render} from 'enzyme'
import {expect} from 'chai'
import sinon from 'sinon'
import {mountWithIntl, intl} from 'helpers/intlEnzymeTestHelper.js'

describe('<Header />', () => {
  const props = {
    leftText: '',
    centerText: '',
    leftClick: function () {}
  }
  let header = mountWithIntl(<Header {...props}/>)

  it("header defined", function () {
    expect(header.find('div')).to.exist
  })
})

