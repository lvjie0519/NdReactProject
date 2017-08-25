/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React from 'react'
import QuestionListItem from '../../../src/question/component/QuestionListItem'
import {shallow, mount, render} from 'enzyme'
import {expect} from 'chai'
import sinon from 'sinon'
import {mountWithIntl, intl} from 'helpers/intlEnzymeTestHelper.js'

describe('<QuestionListItem />', () => {
  const props = {
    questionInfo: {
      "id": "1503318764864",
      "questionId": "1503318764864",
      "questionType": "1",
      "questionTitle": "vvv",
      "questionContent": "vvvvvvvvvvvvv",
      "questionAnswerCount": "0",
      "questionCreateTime": "2017-08-21 20:32",
      "questionCreater": "陈晶晶"
    },
    showAll: true,
    onItemClick: function () {}
  }
  let questionListItem = mountWithIntl(<QuestionListItem {...props}/>)

  it("header defined", function () {
    expect(questionListItem.find('div')).to.exist
  })
})

