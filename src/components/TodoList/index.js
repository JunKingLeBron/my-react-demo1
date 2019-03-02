import { connect } from 'react-redux';
import UI from './ui.js'

let mapStateToProps = (state) => {
  console.log('默认进来一次，仓库数据改变了，再次进来')
  return {
    todos: state.todos
  }
}

let mapDispatchToProps = () => {
  return {
    handleOk: () => {
      console.log('handleOK');
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UI);
