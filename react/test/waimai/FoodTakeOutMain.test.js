/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React from 'react'
import FoodTakeOutMain from '../../src/waimai/FoodTakeOutMain'
import {shallow, mount, render} from 'enzyme'
import {expect} from 'chai'
import sinon from 'sinon'
import {mountWithIntl, intl} from 'helpers/intlEnzymeTestHelper.js'

describe('<FoodTakeOutMain />', () => {
  let foodTakeOutMain = mountWithIntl(<FoodTakeOutMain />)

  it("header defined", function () {
    expect(foodTakeOutMain.find('div')).to.exist
  })
})

