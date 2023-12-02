"use client";
import Image from "next/image";
import React, { useState } from "react";

const MyTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  return (
    <div>
      <div className="flex mt-8 mb-20">
        <button
          className={`mx-4 py-2 text-[#222222] dark:text-white ${
            activeTab === 0
              ? "border-b-2 w-max border-b-[#915EFF]  "
              : "border-b-2 border-transparent"
          }`}
          style={{ transition: "all 0.55s ease" }}
          onClick={() => handleTabClick(0)}
        >
          All
        </button>
        <button
          className={`mx-4 py-2 text-[#222222] dark:text-white ${
            activeTab === 1
              ? "border-b-2 w-max border-b-[#915EFF]  "
              : "border-b-2 border-transparent"
          }`}
          style={{ transition: "all 0.55s ease" }}
          onClick={() => handleTabClick(1)}
        >
          Brand
        </button>
        <button
          className={`mx-4 py-2 text-[#222222] dark:text-white ${
            activeTab === 2
              ? "border-b-2 w-max border-b-[#915EFF]  "
              : "border-b-2 border-transparent"
          }`}
          style={{ transition: "all 0.55s ease" }}
          onClick={() => handleTabClick(2)}
        >
          Classic
        </button>
      </div>

      {activeTab === 0 && (
        <div
          className="portfolio-box-01 aos-init"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay=""
        >
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay=""
            className="grid grid-cols-3 gap-4"
          >
            <div className="gallery-link">
              <Image
                src="https://images.pexels.com/photos/3062547/pexels-photo-3062547.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Image 1"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="gallery-link">
              <Image
                src="https://images.pexels.com/photos/16259474/pexels-photo-16259474/free-photo-of-cameraman-posing-with-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Image 2"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="gallery-link">
              <Image
                src="https://images.pexels.com/photos/7149650/pexels-photo-7149650.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Image 3"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      )}
      {activeTab === 1 && (
        <div
          className="portfolio-box-02"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay=""
        >
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay=""
            className="grid grid-cols-3 gap-4"
          >
            <div className="gallery-link">
              <Image
                src="https://images.pexels.com/photos/8089238/pexels-photo-8089238.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Image 4"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="gallery-link">
              <Image
                src="https://images.pexels.com/photos/4841631/pexels-photo-4841631.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Image 5"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="gallery-link">
              <Image
                src="https://images.pexels.com/photos/5052650/pexels-photo-5052650.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Image 6"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      )}
      {activeTab === 2 && (
        <div
          className="portfolio-box-01 aos-init"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay=""
        >
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay=""
            className="grid grid-cols-3 gap-4"
          >
            <div className="gallery-link">
              <Image
                src="https://images.pexels.com/photos/3062547/pexels-photo-3062547.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Image 7"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="gallery-link">
              <Image
                src="https://images.pexels.com/photos/3062547/pexels-photo-3062547.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Image 8"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="gallery-link">
              <Image
                src="https://images.pexels.com/photos/3062547/pexels-photo-3062547.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Image 9"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyTabs;
