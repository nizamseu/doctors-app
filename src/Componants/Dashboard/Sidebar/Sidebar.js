import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import SettingsIcon from "@material-ui/icons/Settings";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import SideBarOption from "../SideBarOption/SideBarOption";
const Sidebar = () => {
  return (
    <div className="row d-flex sidebar">
      {/* <h1>Sidebar</h1> */}
      <SideBarOption
        Icon={DashboardIcon}
        text="Dashboard"
        pathText="/dashboard/dash"
      />
      <SideBarOption
        Icon={CalendarTodayIcon}
        text="Appointment "
        pathText="/dashboard/appointment"
      />
      <SideBarOption
        Icon={LocalHospitalIcon}
        text="Add Doctors "
        pathText="/dashboard/adddoctors"
      />
      <SideBarOption
        Icon={PeopleIcon}
        text="Patients"
        pathText="/dashboard/patients"
      />
      <SideBarOption
        Icon={NoteAddIcon}
        text="Prescription "
        pathText="/dashboard/prescription"
      />
      <SideBarOption
        Icon={SettingsIcon}
        text="Setting"
        pathText="/dashboard/setting"
      />
    </div>
  );
};

export default Sidebar;
