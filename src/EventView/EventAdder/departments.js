import {HiDesktopComputer,HiOfficeBuilding} from "react-icons/hi";
import {IoMdPeople} from "react-icons/io";
import {ImWrench} from "react-icons/im";
import {RiTestTubeLine,RiCustomerService2Line} from "react-icons/ri";
import {FaCashRegister} from "react-icons/fa";
import {GoMegaphone} from "react-icons/go";
import {BsClipboardData} from "react-icons/bs";
import {GiOfficeChair} from "react-icons/gi";




export const privacyValues = [
    {
        name:"IT",
        icon:<HiDesktopComputer/>,
        title:"IT"
    },
    {
        name:"HR",
        icon:<IoMdPeople/>,
        title:"Human Resources"
    },
    {
        name:"PRODUCTION",
        icon:<ImWrench/>,
        title:"Production"
    },
    {
        name:"RND",
        icon:<RiTestTubeLine/>,
        title:"Research & Development"
    },
    {
        name:"PURCHASING",
        icon:<FaCashRegister/>,
        title:"Purchasing"
    },
    {
        name:"MARKETING",
        icon:<GoMegaphone/>,
        title:"Marketing"
    },
    {
        name:"FINANCES",
        icon:<BsClipboardData/>,
        title:"Finances"
    },
    {
        name:"ADMIN",
        icon:<GiOfficeChair/>,
        title:"Adminstrators"
    },
    {
        name:"SERVICE",
        icon:<RiCustomerService2Line/>,
        title:"Service"
    },
    {
        name:"ALL",
        icon:<HiOfficeBuilding/>,
        title:"Company"
    }

]