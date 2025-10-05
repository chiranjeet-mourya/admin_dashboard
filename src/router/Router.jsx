import { Routes, Route } from "react-router-dom";
import  MainLayout  from "../Layout/MainLayout";
import  Dashboard  from "../feature/dashboard/Dashboard";
import UserManagement from "../feature/User/UserManagement";
import ProductManagement from "../feature/Ecommerce/ProductManagement";
import ProductOrder from "../feature/Ecommerce/ProductOrder";
import ProductCustomer from "../feature/Ecommerce/ProductCustomer";
import CustomerDetail from "../feature/Ecommerce/CustomerDetail";
import Reports from "../feature/Analytics/Reports";
import Calendar from "../feature/Analytics/Calendar";
import UserProfile from "../feature/Profile/UserProfile";
import Message from "../feature/Message/Message";
import Alert from "../feature/Ui_Element/Alert";
import Buttons from "../feature/Ui_Element/Buttons";
import Images from "../feature/Ui_Element/Images";
import Video from "../feature/Ui_Element/Video";
import Icons from "../feature/icons/Icons";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Dashboard/>} />
        <Route path='profile' element={<UserProfile/>} />
        <Route path='reports' element={<Reports/>} />
        <Route path='calander' element={<Calendar/>} />
        <Route path='user' element={<UserManagement/>} />

        {/* e-commerce routes */}
        <Route path='product' element={<ProductManagement/>} />
        <Route path='product-order' element={<ProductOrder/>} />
        <Route path='product-customer' element={<ProductCustomer/>} />
        <Route path='customer-detail' element={<CustomerDetail/>} />

        {/* ui element routes */}
        <Route path='ui-alert' element={<Alert/>} />
        <Route path='ui-button' element={<Buttons/>} />
        <Route path='ui-videos' element={<Video/>} />
        <Route path='ui-gallery' element={<Images/>} />
        
        <Route path='notification' element={<Message/>} />
        <Route path='icons' element={<Icons/>} />
        <Route path="*" element={<Dashboard/>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

// https://www.youtube.com/watch?v=Xal3RTspi9Y
