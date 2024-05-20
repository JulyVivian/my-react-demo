// 导入所需的模块
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import store from './store';
import { Provider } from 'react-redux';

// 定义App组件，使用React Router进行路由管理
const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
}

// 导出App组件
export default App;
