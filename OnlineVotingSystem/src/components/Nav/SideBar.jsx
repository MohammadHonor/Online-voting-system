import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Scrollbars from "react-custom-scrollbars-2";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { MdImportContacts } from "react-icons/md";
import { MdRoundaboutRight } from "react-icons/md";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { MdOutlineFeaturedPlayList } from "react-icons/md"
const SideBar = () => {
  const information = {
    user: "Welcome to User Login",
    admin: "Welcom to Admin Login ",
    about: "Welcome to About page",
    contact: "welcom to contact page"
  }

  const notify1 = () => {

    toast.info(information.user, {
      position: "top-center"
    });
  }

  const notify2 = () => {

    toast.info(information.admin, {
      position: "top-center"
    });
  }
  const notify3 = () => {

    toast.info(information.about, {
      position: "top-center"
    });
  }
  const notify4 = () => {

    toast.info(information.contact, {
      position: "top-center"
    });
  }




  return <>

    <div className="mt-20 fixed pt-10 pl-5   
       bg-blue-950
      text-white w-20 h-[627px] 
      z-50
      overflow-y-scroll
      overflow-x-hidden
      hover:w-60
       ">

      <ul className="  
  flex flex-col justify-center items-start gap-2 hover:gap-8">
        <li className="flex  items-center gap-4 h-8
         hover:bg-green-500/50 w-48 rounded p-2">
          <IoHomeOutline className="text-2xl" />
          <NavLink to="/"

          >Home</NavLink>
        </li>
        <li
          className="flex w-48 items-center gap-4 h-8
          hover:bg-green-500/50 rounded p-2"
        >

          < FaRegUserCircle className="text-2xl" />
          <NavLink to="/userLogin"
            onClick={notify1}
          >
            User</NavLink>
          <ToastContainer /></li>
        <li className="flex  items-center gap-4 h-8
         hover:bg-green-500/50 w-48 rounded p-2">
          <MdOutlineAdminPanelSettings className="text-2xl" />
          <NavLink to="/adminLogin"
            onClick={notify2}
          >
            Admin</NavLink><ToastContainer />
        </li>
        <li className="flex  items-center gap-4 h-8
         hover:bg-green-500/50 w-48 rounded p-2">
          <MdRoundaboutRight className="text-2xl" />
          <NavLink
            to="/About"
            onClick={notify3}

          >About</NavLink><ToastContainer /></li>
        <li className="flex  items-center gap-4 h-8
         hover:bg-green-500/50 w-48 rounded p-2">
          <MdImportContacts className="text-2xl" />
          <NavLink
            to="/Contact"
            onClick={notify4}

          >Contact</NavLink><ToastContainer /></li>


        <li className="flex  items-center gap-4 h-8
         hover:bg-green-500/50 w-48 rounded p-2">
          <MdOutlineFeaturedPlayList className="text-2xl" />
          <NavLink
            to="/Features"
            onClick={notify4}

          >Features</NavLink></li>

      </ul>


    </div>

  </>
}
export default SideBar;