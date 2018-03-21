import React from 'react'
import cityPickerStyles from './index.less'  

class Header extends React.Component {
  static defaultProps = {
    prefixCls: cityPickerStyles.cityPickerPrefixCls
  }
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  render() {
    const { prefixCls } = this.props
    
    return (
      <div className={cityPickerStyles[`${prefixCls}-root`]} data-role={`${prefixCls}-root`}>
        <div>Title</div>
      </div>
    )
  }
}

export default Header