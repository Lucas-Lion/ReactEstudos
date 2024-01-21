import { useState } from 'react';
import { Button, Layout, theme } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import MenuList from './components/MenuList';
import Card from './components/card';

const { Header, Sider } = Layout;
function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: {colorBgContainer},
  } = theme.useToken();

  return (
    <>
     <Layout>
        <Sider 
        collapsed={collapsed} 
        collapsible
        trigger={null}
        theme='dark'
        className='sidebar'
        >
          <MenuList />
        </Sider>
        <Layout>
          <Header style={{padding: 0, background: colorBgContainer, display: 'flex', justifyContent: 'space-between'}}>
            <div>
              <Button 
              type='text' 
              className='toggle'
              onClick={() => setCollapsed(!collapsed)}
              icon={ collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> } 
              />
            </div>
            <h1 style={{ marginRight: '10px' }}>SUDESB</h1>
          </Header>
          <main>
          <Card />
            
          </main>
          <footer>
            <span>Desenvolvido pela Equipe de Informática</span>
            <span>© 2024</span>
          </footer>
        </Layout>
     </Layout>
    </>
  )
}

export default App;