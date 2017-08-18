/**
 * Created by Administrator on 2017/7/29 0029.
 */
import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from '../../theme/styles/questionItem.css'

@CSSModules(styles, {allowMultiple: true})
export default class QuestionAnswerListItem extends Component {
  static propTypes = {
    questionAnswerInfo: React.PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {like: this.props.questionAnswerInfo.answerUpCount, noLike: this.props.questionAnswerInfo.answerDownCount}
  }

  static getDefaultProps = {
    questionAnswerInfo: {
      answerCreater: '',
      answerContent: '',
      answerUpCount: 0,
      answerDownCount: 0,
      answerCreateTime: ''
    }
  }

  like=() => {
    this.setState({
      like: this.state.like + 1
    })
    // 传送服务器
  }

  noLike=() => {
    this.setState({
      noLike: this.state.noLike > 1 ? this.state.noLike - 1 : 0
    })
    // 传送服务器
  }

  render() {
    return (
      <div styleName='questionItem'>
        <span styleName='questionAnswer'>{this.props.questionAnswerInfo.answerCreater}</span>
        <span styleName='questionTime'>{this.props.questionAnswerInfo.answerCreateTime}</span>
        <div styleName='questionCount'>
          <span style={{marginRight: 10}} onClick={this.like}>喜欢：{ this.state.like > 999 ? '999+' : this.state.like }</span>
          <span onClick={this.noLike}>不喜欢:{ this.state.noLike > 999 ? '999+' : this.state.noLike }</span>
        </div>
        <p styleName='questionContent'>{this.props.questionAnswerInfo.answerContent}</p>
      </div>
    )
  }
}
