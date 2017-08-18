import React from 'react'
import {IndexLink} from 'react-router'
import {defineMessages, intlShape, injectIntl} from 'react-intl'

const messages = defineMessages({
  'home': {
    id: 'home',
    defaultMessage: '首页'
  }
})

@injectIntl
class Nav extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired
  }
  render() {
    const {formatMessage} = this.props.intl
    return (
      <nav style={{marginBottom: 10}}>
        <IndexLink to='/'>
          {formatMessage(messages.home)}
        </IndexLink>
        <a href={global.location.pathname + '?locale=zh'} style={{paddingLeft: 10}}>中文</a>
        <a href={global.location.pathname + '?locale=en'} style={{paddingLeft: 10}}>EN</a>
      </nav>
    )
  }
}

export default Nav
