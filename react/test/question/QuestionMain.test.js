/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React from 'react'
import QuestionMain from '../../src/question/QuestionMain'
import {shallow, mount, render} from 'enzyme'
import {expect} from 'chai'
import sinon from 'sinon'
import {mountWithIntl, intl} from 'helpers/intlEnzymeTestHelper.js'

describe('<QuestionMain />', () => {
  let questionMain = mountWithIntl(<QuestionMain />)

  it("header defined", function () {
    expect(questionMain.find('div')).to.exist
  })
})

