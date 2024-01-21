import { Menu } from "antd";
import {
  HomeOutlined,
  FormOutlined,
  SearchOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const MenuList = () => {
  return (
    <Menu theme="dark" mode="inline" className="menu-bar">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        Home
      </Menu.Item>

      <Menu.SubMenu key="cadastrar" icon={<FormOutlined />} title="Cadastrar">
        <Menu.Item key="task-1">Aluno</Menu.Item>
        <Menu.Item key="task-2">Professor</Menu.Item>
        <Menu.Item key="task-3">Disciplina</Menu.Item>
      </Menu.SubMenu>

      <Menu.Item key="consultar" icon={<SearchOutlined />}>
        Consulta
      </Menu.Item>

      <Menu.Item key="perfil" icon={<UserOutlined />}>
        Perfil
      </Menu.Item>

      <Menu.Item key="sair" icon={<LogoutOutlined />} className="menu-item-logout">
  Sair
</Menu.Item>
    </Menu>
  );
};

export default MenuList;
