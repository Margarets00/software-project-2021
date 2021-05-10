import { Layout, Menu, Switch, Typography, PageHeader, Space } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;
function App() {
  const [themeMode, setThemeMode] = useState('light');
  useEffect(() => {
    console.log(themeMode);
  }, [themeMode]);

  return (
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }}>
        <PageHeader title='숭지사항' extra={
          <Switch
            checked={themeMode === 'dark'}
            onChange={() => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
        } />

      </Header>
      <Layout>
        <Sider
          theme={themeMode}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <Menu theme={themeMode} mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              소개
        </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              사용 방법
        </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              응용 방법
        </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              Contact
        </Menu.Item>
          </Menu>
        </Sider>
        <Layout>

          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <div>
                <Title level={3}>헤더 1</Title>
                <Typography>주절 주절</Typography>
              </div>
              <div>
                <Title level={3}>헤더 2</Title>
                <Typography>주절 주절</Typography>
              </div>
              <div>
                <Title level={3}>헤더 3</Title>
                <Typography>주절 주절</Typography>
              </div>
              <div>
                <Title level={3}>헤더 4</Title>
                <Typography>주절 주절</Typography>
              </div>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>SoftwareProject Soongsil University ©2021 Created by Colorful</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
