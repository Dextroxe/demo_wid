"use client";
import { useEffect, useState } from "react";
import Modal from "@/app/components/modal/modal";
import Compt from "../components/compt";
import Sidebar from "../components/sidebar/Sidebar";
import Image from "next/image";

const datamock = {
  author: "Ganta Nakami",
  quote:
    "Then the sky gets bright and  light seeps in through the curtainsthe morning comes and I prepare for another day of despair",
};

const Dashboard = () => {
  const [componentType, setComponentType] = useState("sidebar ");

  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setSidebar] = useState(false);
  const [fontSize, setFontSize] = useState("1rem");

  const onModalClose = () => {
    setShowModal(false);
    setComponentType("page");
  };

  const onSidebarClose = () => {
    setSidebar(false);
    setComponentType("page");
  };


  const ComponentType = () => {
    switch (componentType) {
      case "page":
        return <Compt datamock={datamock} fontSize={fontSize} />;
      case "sidebar":
        return (
          <Sidebar isOpen={showSidebar} onClose={onSidebarClose}>
            <Compt datamock={datamock} fontSize={fontSize} />
          </Sidebar>
        );
      case "modal":
        return (
          <Modal show={showModal} onClose={onModalClose}>
            <Compt datamock={datamock} fontSize={fontSize} />
          </Modal>
        );
      default:
        return <Compt datamock={datamock} fontSize={fontSize} />;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full mx-20 mb-64">
      <div className="m-20">
        <label className="block mb-2">
          Select Component:
          <select
            className="block text-black w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={componentType}
            onChange={(e) => {
              setComponentType(e.target.value);
              if (e.target.value === "modal") {
                setShowModal(true);
              }
              if (e.target.value === "sidebar") {
                setSidebar(true);
              }
            }}
          >
            <option value="page" className="text-black">
              Page
            </option>
            <option value="sidebar" className="text-black">
              Sidebar
            </option>
            <option value="modal" className="text-black">
              Modal
            </option>
          </select>
        </label>
        
        <label className="block mb-2">
          Font Size:
          <input
            type="number"
            // value={1.2}
            onChange={(e) => setFontSize(parseFloat(e.target.value) + "rem")}
            className="text-black text-center"
            placeholder="8"
          />
        </label>
      </div>
      <div className="flex justify-center items-center flex-col gap-8 w-full">
        <div className="w-full h-full flex justify-center items-center ">
          <Image src={'/page1.jpeg'}  width={800} height={800} alt="page" />
        </div>
        <div className=" h-full w-[45rem]">{ComponentType()}</div>
        <div className="w-full h-full flex justify-center items-center ">
          <Image src={'/page2.jpeg'} alt="page" width={800} height={800}/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
