import { connect } from 'react-redux'
import component from '../components'
import { changeDataHandler, getData } from '../modules'

const mapStateToProps = state => {
  console.log('===', state)
  return {
    home: state.homeReducer
  }
}

// 不建议直接在component中使用dispatch，Why？？？
const mapDispatchToProps = {
  changeDataHandler,
  getData
}

export default connect(mapStateToProps, mapDispatchToProps)(component)