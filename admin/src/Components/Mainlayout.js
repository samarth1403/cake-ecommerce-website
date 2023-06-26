import "react-toastify/dist/ReactToastify.css";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiCategoryAlt } from "react-icons/bi";
import { FaBloggerB } from "react-icons/fa";
import { BsListUl } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { ToastContainer } from "react-toastify";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineAppstoreAdd,
} from "react-icons/ai";
import { Outlet, useNavigate } from "react-router-dom";
import userPhoto from "../images/cake.jpeg";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="flex justify-center items-center logo">
          <h2 className="text-white text-center text-lg font-bold py-3">
            <span className="sm-logo">Cake</span>
            <span className="lg-logo">Cake Website</span>
          </h2>
        </div>
        <Menu
          className="font-roboto font-bold text-[16px]"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <LuLayoutDashboard />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <AiOutlineUser />,
              label: "Customers",
            },
            {
              key: "catalog",
              icon: <AiOutlineShoppingCart />,
              label: "Catalog",
              children: [
                {
                  key: "add-product",
                  icon: <AiOutlineAppstoreAdd />,
                  label: "Add Product",
                },
                {
                  key: "all-products",
                  icon: <AiOutlineShoppingCart />,
                  label: "Product List",
                },
                {
                  key: "add-product-category",
                  icon: <AiOutlineAppstoreAdd />,
                  label: "Add Product Category",
                },
                {
                  key: "all-product-categories",
                  icon: <BiCategoryAlt />,
                  label: "Product Category List",
                },
                {
                  key: "add-occasion",
                  icon: <AiOutlineAppstoreAdd />,
                  label: "Add Occasion",
                },
                {
                  key: "all-occasions",
                  icon: <BiCategoryAlt />,
                  label: "Occasion List",
                },
                {
                  key: "add-color",
                  icon: <AiOutlineAppstoreAdd />,
                  label: "Add Color",
                },
                {
                  key: "all-colors",
                  icon: <BiCategoryAlt />,
                  label: "Color List",
                },
              ],
            },
            {
              key: "orders",
              icon: <BsListUl />,
              label: "Orders",
            },
            {
              key: "blogs",
              icon: <FaBloggerB />,
              label: "Blogs",
              children: [
                {
                  key: "add-blog",
                  icon: <FaBloggerB />,
                  label: "Add Blog",
                },
                {
                  key: "all-blogs",
                  icon: <FaBloggerB />,
                  label: "Blog List",
                },
                {
                  key: "add-blog-category",
                  icon: <AiOutlineAppstoreAdd />,
                  label: "Add Blog Category",
                },
                {
                  key: "all-blog-categories",
                  icon: <BiCategoryAlt />,
                  label: "Blog Category List",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <BsListUl />,
              label: "Enquiries",
            },
            {
              key: "coupons",
              icon: <BsListUl />,
              label: "Coupons",
              children: [
                {
                  key: "add-coupon",
                  icon: <AiOutlineAppstoreAdd />,
                  label: "Add Coupon",
                },
                {
                  key: "all-coupons",
                  icon: <BiCategoryAlt />,
                  label: "Coupon List",
                },
              ],
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="flex flex-row flex-wrap justify-between items-center"
          style={{
            padding: "12px",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              color: "#fff",
            }}
          />
          <div className="flex flex-row flex-wrap justify-center items-center">
            <div className="relative">
              <IoMdNotifications className="text-[#fff] text-3xl m-3" />
              <div className="absolute inset-x-9 inset-y-2 font-bold text-md text-[#fff]">
                1
              </div>
            </div>

            <img
              src={userPhoto}
              alt="user"
              className="w-[50px] h-[50px] rounded-full m-2"
            />
            <div className="flex flex-col flex-wrap justify-center items-start">
              <p className="text-[#fff] font-roboto font-bold text-[16px] mx-2 my-1">
                Samarth Ikkalaki
              </p>
              <p className="text-[#fff] font-roboto text-[14px] mx-2 my-1">
                samarthikkalaki@gmail.com
              </p>
            </div>
          </div>
        </Header>
        <Content>
            <ToastContainer
            position="top-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />
          <Outlet className="h-[100vh]" />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
