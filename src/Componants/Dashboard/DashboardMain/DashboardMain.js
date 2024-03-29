import React, { useEffect, useState } from "react";
import DashboardMainCard from "../DashboardMainCard/DashboardMainCard";
import RecentAppointment from "../RecentAppointment/RecentAppointment";

const DashboardMain = () => {
  const [loadData, setLoadData] = useState([]);
  useEffect(() => {
    fetch("https://lit-brook-48702.herokuapp.com/allpatients")
      .then((res) => res.json())
      .then((result) => {
        setLoadData(result);
      });
  }, []);
  return (
    <div>
      <h4 className="mt-3">Dashboard </h4>
      <DashboardMainCard loadData={loadData}></DashboardMainCard>
      <RecentAppointment></RecentAppointment>
    </div>
  );
};

export default DashboardMain;
