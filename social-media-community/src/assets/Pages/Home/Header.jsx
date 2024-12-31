import React from "react";

const Header = () => {
  return (
    <div className="hero min-h-screen">
      {/* Header */}
      <div className="hero-content flex-col lg:flex-row items-center">
        <img
          className="max-w-sm rounded-lg shadow-xl p-10"
          src="https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/330618897_911477523505125_1713850203172104705_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF_t9DcVM5W0TKEQktnJZRVLSvNX2VpsZItK81fZWmxku43DihbwtI59t9TDR_usBySkJ9RG48rajJl4aocQX1x&_nc_ohc=J1xmEYAlylIQ7kNvgEMcyNh&_nc_zt=23&_nc_ht=scontent-sin6-2.xx&_nc_gid=ATmYIxyuN3GAohcPCz6jqDo&oh=00_AYDg6b-SbPa5BDmSHADrQcL2jkZE3r-IRhsR_-2uCDvzAQ&oe=6775BF60"
        />
        <div className="text-start p-10 shadow-xl rounded-lg">
          <h1 className="text-3xl font-bold">Dhaka College Cultural Club</h1>
          <p className="pt-6 text-gray-500">
            he Dhaka College Cultural Club was founded by a group of
            enthusiastic students in 2021 to practice and explore the richness
            of Bengali culture on the college campus. Within two consecutive
            years, the Dhaka College Cultural Club has added new dimensions to
            the Bengali cultural platform. From hosting national cultural events
            and regrouping cultural enthusiasts from all over the country to our
            members winning prizes hope that the DCCC family will grow and
            evolve into a platform for students to showcase their abilities on a
            cultural level.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
