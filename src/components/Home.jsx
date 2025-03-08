import React, { Component } from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import ApplicationProcess from "../components/ApplicationProcess";
import Banner from "../components/Banner";
import Placements from "../components/Placements.jsx";
import Containers from "../components/Containers.jsx";
import Achievements from "../components/Achievements.jsx";
import Branches from "../components/Branches.jsx";
import Rankings from "../components/Rankings.jsx";
import VirtualTour from "../components/VirtualTour.jsx"; // ✅ Import added
import InternationDashboard from "./InternationDashboard.jsx";
export class Home extends Component {
  render() {
    return (
      <div>
        {/* <TopBar /> */}
        {/* <Header /> */}
        <Banner />
        <Containers />
        <ApplicationProcess />
        <Rankings />
        <Achievements />
        <Placements />
        <VirtualTour />
        <InternationDashboard />
        <Branches />
      </div>
    );
  }
}

export default Home;
