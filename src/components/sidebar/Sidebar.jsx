import './sidebar.scss'
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import CreditCardIcon from "@mui/icons-material/CreditCard";
// import StoreIcon from "@mui/icons-material/Store";
// import InsertChartIcon from "@mui/icons-material/InsertChart";
// import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
// import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";


const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* First Child */}
      <div className="top">
        <span className="logo">ThalesAdmin</span>
      </div>
      <hr />
      {/* Second Child */}
      <div className="center">
        <ul>
            <p className="title">MAIN</p>
            <li>
                {/* <DashboardIcon className="icon"/> */}
                <span>Dashboard</span>
            </li>
            <p className="title">LISTS</p>
            <li>
                {/* <PersonOutlineIcon className="icon"/> */}
                <span>Users</span>
            </li>
            <li>
                {/* <PersonOutlineIcon className="icon"/> */}
                <span>Products</span>
            </li>
            <li>
                {/* <CreditCardIcon className="icon"/> */}
                <span>Orders</span>
            </li>
            <li>
                <span>Delivery</span>
            </li>
            <p className="title">USEFUL</p>
            <li>
                <span>Stats</span>
            </li>
            <li>
                {/* <NotificationsNoneIcon className="icon"/> */}
                <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
                <span>System Health</span>
            </li>
            <li>
                <span>Logs</span>
            </li>
            <li>
                {/* <SettingsSystemDaydreamOutlinedIcon className="icon"/> */}
                <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
                {/* <AccountCircleOutlinedIcon className="icon"/> */}
                <span>Profile</span>
            </li>
            <li>
                {/* <ExitToAppIcon className="icon"/> */}
                <span>Logout</span>
            </li>
        </ul>
      </div>
      {/* Third Child */}
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar
