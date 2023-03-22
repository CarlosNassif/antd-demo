import './App.css';

import {
  Button,
  DatePicker,
  Input,
  Progress,
  Slider,
  Space,
  Spin,
  ConfigProvider,
} from 'antd';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b96b',
          colorBorder: '#09f',
          colorText: '#0f9',
        },
      }}
    >
      <div className='App'>
        <header className='App-header'>
          <Space direction='vertical'>
            <Button
              className='button'
              style={{
                color: 'yellow',
              }}
              type='primary'
            >
              Button
            </Button>
            <Input placeholder='Type here...'></Input>
            <Progress percent={50} type='circle' />
            <Spin spinning />
            <DatePicker />
            <Slider />
          </Space>
        </header>
      </div>
    </ConfigProvider>
  );
}

export default App;
