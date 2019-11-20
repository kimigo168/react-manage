// 引入createStore创建 store, 引入applyMiddleware来使用中间件
import { createStore,
  //  applyMiddleware
   } from 'redux'

// 引入所有reducer
import reducer from '../reducer'

// 安装redux-devtools-extension的可视化工具
// import { composeWithDevTools } from 'redux-devtools-extension'
const initialState = {
  menuName: ''
}
const confirgureStore = () => createStore(reducer, initialState
  // composeWithDevTools(
  //   applyMiddleware(...middleware)
  // )
)

export default confirgureStore