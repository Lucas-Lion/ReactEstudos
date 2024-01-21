import { Card } from 'antd';
import CustomTable from './table';

const App = () => (
  <Card bordered={false} style={{ width: '90%', margin: '20px auto' }}>
    <CustomTable />
  </Card>
);

export default App;