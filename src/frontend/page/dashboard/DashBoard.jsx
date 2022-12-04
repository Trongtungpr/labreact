import React, { useState } from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TableOutlined ,
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import ContentProductDashBoard from "../../../components/dashboad/ContentProductDashBoard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAction } from "../../../store/actions/productActions";
import { getAllUserActions } from "../../../store/actions/userAction";
import ContentUserDashBoard from "../../../components/dashboad/ContentUserDashBoard";
import './DashBoard.scss'
const { Header, Sider, Content } = Layout;

const DashBoard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [useStateContent,setStateContent] = useState()
    const dispatch = useDispatch()
    const handleSelectorUser = () =>{
        setStateContent(0)
        dispatch(getAllUserActions())
    };
    const handleSelectorProduct = () =>{
        setStateContent(1)
        dispatch(getAllProductsAction())
    };
    console.log(useStateContent);
    return (
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo">
                <h1><a href=""><i>NHT</i></a></h1>
            </div>
            <Menu class="content-dashboard">
                <a class='selector-dashboard' onClick={handleSelectorUser}>
                    <UserOutlined className="icon-dashboard"/>
                    <h1>User</h1>
                </a>
                <a class='selector-dashboard' onClick={handleSelectorProduct}>
                    <TableOutlined className="icon-dashboard"/>
                    <h1>Product</h1>
                </a>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header
              className="site-layout-background"
              style={{
                padding: 0,
    
              }}
            >
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              })}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              { useStateContent ===1 &&
              (<ContentProductDashBoard/>)}
              { useStateContent === 0 &&
              (<ContentUserDashBoard />)}
            </Content>
          </Layout>
        </Layout>
      );
}
export default DashBoard;