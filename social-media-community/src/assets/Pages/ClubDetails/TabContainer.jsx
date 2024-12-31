import React, { useEffect } from "react";
import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const TabContainer = () => {
  useEffect(()=>{
    fetch("clubs.json")
    .then(res => res.json())
    .then(data => console.log(data))
  },[])
  return (
    <div>
      this is tab section
    </div>
    // <div>
    //   {clubs.map((club) => (
    //     <Tabs key={club.id} className="w-full text-start mb-8">
    //       {/* Tab List */}
    //       <TabList className="flex space-x-4 border-b-2 pb-2">
    //         <Tab className="cursor-pointer px-4 py-2">Overview</Tab>
    //         <Tab className="cursor-pointer px-4 py-2">Departments</Tab>
    //         {console.log(club)}
    //       </TabList>

    //       {/* Tab Panels */}
    //       <TabPanel className="p-4 border-t-2">
    //         <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
    //           <img
    //             src={club.image}
    //             alt={club.name}
    //             className="w-48 h-48 object-cover"
    //           />
    //           <div>
    //             <h2 className="text-2xl font-bold">{club.name}</h2>
    //             <p className="mt-2 text-gray-600">{club.description}</p>
    //             <p className="mt-2 text-gray-500">
    //               <strong>Established:</strong> {club.establishedDate}
    //             </p>
    //             <p className="text-gray-500">
    //               <strong>Members:</strong> {club.members}
    //             </p>
    //           </div>
    //         </div>
    //       </TabPanel>
    //       <TabPanel className="p-4 border-t-2">
    //         <h3 className="text-xl font-semibold">Departments</h3>
    //         <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    //           {club.departments.map((department) => (
    //             <div
    //               key={department.id}
    //               className="flex flex-col items-center space-y-2 border p-4 rounded shadow"
    //             >
    //               <img
    //                 src={department.image}
    //                 alt={department.name}
    //                 className="w-24 h-24 object-cover"
    //               />
    //               <p className="text-lg font-medium">{department.name}</p>
    //             </div>
    //           ))}
    //         </div>
    //       </TabPanel>
    //     </Tabs>
    //   ))}
    // </div>
  );
};

export default TabContainer;
