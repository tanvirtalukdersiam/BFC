import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";

function App() {
  return (
    <div className="">
      <div className="bg-[url(/images/banner1.jpg)] bg-[rgba(0,0,0,.7)] h-screen w-full bg-cover from-black/70 relative ">
        <nav class="">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-7">
            <a class="flex items-center space-x-3 rtl:space-x-reverse">
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  "
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 text-white md:p-0 dark:text-white  font-semibold text-[18px] ml-4"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 text-white md:p-0 dark:text-white  font-semibold text-[18px] ml-4 "
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 text-white md:p-0 dark:text-white  font-semibold text-[18px] ml-4"
                  >
                    Menu
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 text-white md:p-0 dark:text-white  font-semibold text-[18px] ml-4"
                  >
                    Dropdown
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 text-white md:p-0 dark:text-white  font-semibold text-[18px] ml-4"
                  >
                    Reviews
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 text-white md:p-0 dark:text-white  font-semibold text-[18px] ml-4"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="flex justify-center items-center ">
          <h1 className="text-[58px] text-[#fff] w-[530px] text-center mt-[255px]  font-semibold font-Philosopher">
            Discover Divine Taste Of Epicurean
          </h1>
        </div>
        <div className="flex justify-center items-center mt-[12px]">
          <a
            className="text-[#fff] text-[17px] font-Cabin font-semibold bg-[#fd9900] px-[44px] rounded-[5px] py-[13px]"
            href=""
          >
            Order Now
          </a>
        </div>
        <div className="absolute bottom-[80px] right-[80px] font-semibold">
          <h3 className="text-[24px] text-[#fff]">
            Order <Now:span>09666 70 77 7</Now:span>
          </h3>
        </div>
      </div>
      <div className="bg-[#fff] flex justify-between items-center mx-auto w-[80%]">
        <div className="py-[75px]">
          <h1 className="text-black font-semibold text-[46px] mb-4">About</h1>

          <p className="text-[#53565c] text-[18px] w-[655px] font-lato leading-7 mb-10">
            To make chicken in a much more celebrated enjoyable and modern form,
            Best Fried Chicken (BFC) started its journey back in 2002. Under the
            guidance of Anisur Rahman Sinha, an Industrialist & chairman of Opex
            & Sinha Group, today BFC is Bangladesh's largest local fast-food
            chain. The birth of BFC is the manifestation of its founder's
            commitment to provide International Standard, high-quality &
            Hygienic food at a reasonable price to the fast-food appetite of the
            growing consumers in Dhaka city. The commitment to provide hygienic
            food in a decent clean environment is unwavering. The signature
            blend of spices with which the chicken is coated is unique in taste
            and aroma, manufactured carefully under the creative supervision of
            a master blender.
          </p>
          <div className="mb-6">
            <a
              className="text-[#fff] text-[17px] font-Cabin font-semibold bg-[#fd9900] px-[46px] rounded-[5px] py-[19px] mt-[35px] "
              href=""
            >
              Learn More
            </a>
          </div>
        </div>
        <div>
          <img className="h-[410px]" src="/images/food.png" alt="" />
        </div>
      </div>
      <div className=" bg-[#c20d00] w-full py-[95px]">
        <div className="w-[80%] mx-auto">
          <h1 className="text-center text-[#fff] text-[42px] font-semibold">
            WHAT KIND OF FOODS WE SERVE FOR YOU
          </h1>
          <div className="flex justify-around items-center mt-20 ">
            <div>
              <img
                className=" h-[230px] rounded-full"
                src="images/1.png"
                alt=""
              />
            </div>
            <img
              className=" h-[230px] rounded-full"
              src="images/2.png"
              alt=""
            />
            <img
              className=" h-[230px] rounded-full"
              src="images/3.png"
              alt=""
            />
            <img
              className=" h-[230px] rounded-full"
              src="images/4.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" bg-[#ffff] w-full py-[80px]">
        <div className="w-[80%] mx-auto">
          <h1 className="text-center text-black text-[42px] font-semibold">
            OUR GALLERY
          </h1>
          <div className="flex justify-around items-center mt-20 ">
            <div>
              <img
                className=" h-[260px] rounded-[8px]"
                src="images/1.png"
                alt=""
              />
            </div>
            <img
              className=" h-[260px] rounded-[8px]"
              src="images/2.png"
              alt=""
            />
            <img
              className=" h-[260px] rounded-[8px]"
              src="images/3.png"
              alt=""
            />
            <img
              className=" h-[260px] rounded-[8px]"
              src="images/4.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-[#d4d4d4] py-[78px]">
        <div className="w-[80%] mx-auto">
          <div>
            <h1 className="text-center text-black text-[45px] font-semibold mb-14">
              Contact Us
            </h1>
          </div>
          <div className="flex justify-around items-center">
            <div className="bg-[#fff] px-[85px] py-[33px] rounded-[8px] shadow-sm">
              <div className="mx-auto">
                <MdOutlineMailOutline className="text-[45px] text-[#fd9900] text-center mx-auto mb-2" />
              </div>
              <div>
                <h1 className=" text-center text-[17px] font-Cabin font-semibold text-[#53565c] mb-1">
                  Email
                </h1>
                <h3 className=" text-center text-[22px] font-Cabin font-semibold text-[#000]">
                  info@bfcbd.com
                </h3>
              </div>
            </div>
            <div className="bg-[#fff] px-[85px] py-[33px] rounded-[8px] shadow-sm">
              <div className="mx-auto">
                <IoCall className="text-[42px] text-[#fd9900] text-center mx-auto mb-2" />
              </div>
              <div>
                <h1 className=" text-center text-[17px] font-Cabin font-semibold text-[#53565c] mb-1">
                  Call Us
                </h1>
                <h3 className=" text-center text-[22px] font-Cabin font-semibold text-[#000]">
                  09666 70 77 70
                </h3>
              </div>
            </div>
            <div className="bg-[#fff] px-[70px] py-[33px] rounded-[8px] shadow-sm">
              <div className="mx-auto">
                <IoLocation className="text-[42px] text-[#fd9900] text-center mx-auto mb-2" />
              </div>
              <div>
                <h1 className=" text-center text-[17px] font-Cabin font-semibold text-[#53565c] mb-1">
                  Location
                </h1>
                <h3 className=" text-center text-[22px] font-Cabin font-semibold text-[#000] ">
                  Mirpur, Dhaka-1216.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[60px] bg-[#fff] ">
        <div className="w-[70%] mx-auto flex justify-between items-center">
          <div className="">
            <h1 className="text-[50px]">BFC</h1>
            <p className=" w-[270px] text-[17px] font-Cabin font-medium text-[#53565c] mt-[8px]">
              Road-1, Block-C, Section -13 Mirpur, Dhaka-1216.{" "}
            </p>
            <h3 className="text-[17px] font-Cabin font-medium text-[#53565c] mt-[5px]">
              info@bfcbd.com
            </h3>
            <h3 className="  text-[18px] font-Cabin font-semibold text-[#000] mt-[5px]">
              09666 70 77 70
            </h3>
          </div>

          <div className="mt-[12px]">
            <h1 className="text-[20px] font-Cabin font-semibold text-[#000] mt-[5px] mb-[10px]">
              QUICK LINK
            </h1>
            <ul>
              <li className="">
                <a
                  className="text-[17px] font-Cabin font-medium text-[#53565c] "
                  href=""
                >
                  Home
                </a>
              </li>
              <li className="mt-[5px]">
                <a
                  className="text-[17px] font-Cabin font-medium text-[#53565c] "
                  href=""
                >
                  About
                </a>
              </li>
              <li className="mt-[5px]">
                <a
                  className="text-[17px] font-Cabin font-medium text-[#53565c] "
                  href=""
                >
                  Menu
                </a>
              </li>
              <li className="mt-[5px]">
                <a
                  className="text-[17px] font-Cabin font-medium text-[#53565c] "
                  href=""
                >
                  Review
                </a>
              </li>
              <li className="mt-[5px]">
                <a
                  className="text-[17px] font-Cabin font-medium text-[#53565c] "
                  href=""
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-[20px]">
            <h1 className="text-[20px] font-Cabin font-semibold text-[#000] mt-[5px] mb-[10px]">
              CONTACT
            </h1>
            <ul>
              <li className="">
                <a
                  className="text-[17px] font-Cabin font-medium text-[#53565c] "
                  href=""
                >
                  info@bfcbd.com
                </a>
              </li>
              <li className="mt-[5px]">
                <a
                  className="text-[17px] font-Cabin font-medium text-[#53565c] "
                  href=""
                >
                  09666 70 77 70
                </a>
              </li>
              <li className="mt-[5px] w-[318px]">
                <a
                  className="  text-[17px] font-Cabin font-medium text-[#53565c] "
                  href=""
                >
                  House 56/1, Road-1, Block-C, Section -13 Mirpur, Dhaka 1216
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-[103px]">
            <ul>
              <h1 className="text-[20px] font-Cabin font-semibold text-[#000] ">
                OPENING HOURS
              </h1>
              <ul>
                <li>
                  <a
                    className="text-[17px] font-Cabin font-medium text-[#53565c]"
                    href=""
                  >
                    Saturday - Friday 10.00 am - 10.00 pm
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
