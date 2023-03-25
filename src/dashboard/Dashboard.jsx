import React from 'react';
import { FiSettings } from "react-icons/fi";
import { MdOutlineAccountCircle, MdOutlineDiscount, MdOutlineLightMode, MdOutlinePeopleAlt } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { SlBasketLoaded } from "react-icons/sl";
import { FaBoxOpen, FaDiscord, FaDribbble, FaFacebook, FaLinkedin, FaSearch, FaShoppingBag } from "react-icons/fa";
import ActivitiesChart from '../components/ActivitiesChart';
import OrdersChart from '../components/OrdersChart';



const Dashboard = () => {
    return (
        <div className="flex h-[1024px] w-[1440px]">
            <div>

                {/* Sidebar */}
                <div className="w-[330px] bg-primary ml-[30px] mt-[32px] h-[855px] rounded-[40px] ">
                    <div className="flex flex-col h-full">
                        <div className="relative bg-secondary h-[210.08px] w-[280.11px] mx-auto mt-16 border shadow-white text-white rounded-[40px] text-lg font-bold">

                            <div class="absolute  top-[-67px] left-[82px] right-0 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" className="object-cover   h-[116px] w-[116px] border-4 rounded-full" alt="" />

                            </div>
                            <div className=' relative z-10 mt-12'>
                                <h1 className='text-3xl mx-auto '>EKKO</h1>
                                <p className='text-sm'>www.ekko.network</p>
                            </div>
                            <span className='flex justify-around mt-5'>
                                <FaFacebook className='h-6 w-6 text-blue shadow-white' />
                                <FaDribbble className='h-6 w-6 text-blue' />
                                <FaLinkedin className='h-6 w-6 text-blue' />
                                <FaDiscord className='h-6 w-6 text-blurple' />
                                <FcGoogle className='h-6 w-6' />
                            </span>
                        </div>

                        <div className="flex-grow mt-[73px]">
                            <ul className="flex flex-col py-4 space-y-1 text-white">
                                <li className=" ml-12 py-3 text-gray-500 hover: text-white hover:bg-gray-700">
                                    <a href="#g" className='flex gap-[10px] font-semibold'>
                                        <SlBasketLoaded className='h-[22px] w-[22px]' />
                                        Orders
                                    </a>

                                </li>
                                <li className=" ml-12 py-3 text-gray-500 hover:text-white hover:bg-gray-700">
                                    <a href="#" className='flex gap-[10px] font-semibold'>
                                        <MdOutlinePeopleAlt className='h-[22px] w-[22px]' />
                                        Customers
                                    </a>
                                </li>
                                <li className=" ml-12 py-3 text-gray-500 hover:text-white hover:bg-gray-700">
                                    <a href="#" className='flex gap-[10px] font-semibold'>
                                        <FaBoxOpen className='h-[22px] w-[22px]' />
                                        Products
                                    </a>
                                </li>
                                <li className=" ml-12 py-3 text-gray-500 hover:text-white hover:bg-gray-700">
                                    <a href="#" className='flex gap-[10px] font-semibold'>
                                        <FaShoppingBag className='h-[22px] w-[22px]' />
                                        Marketing</a>
                                </li>
                                <li className=" ml-12 py-3 text-gray-500 hover:text-white hover:bg-gray-700">
                                    <a href="#" className='flex gap-[10px] font-semibold'>
                                        <MdOutlineDiscount className='h-[22px] w-[22px]' />
                                        Discount
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='text-white bg-tertiary border rounded-[20px] h-24 w-[215px] flex justify-center items-center gap-4 mx-auto mb-9 shadow-lg'>
                            <MdOutlineAccountCircle className='h-[26px] w-[26px]' />
                            <div>
                                <h3 className='font-semibold'>Personal Account</h3>
                                <h3>Switch to Pro plan</h3>
                            </div>
                        </div>
                    </div>
                </div>
                {/* button */}
                <div className='container ml-[45px] mt-11 mb-[52px]  flex gap-4'>
                    <button className='bg-secondary h-[59px] w-[59px] flex items-center justify-center text-center hover:bg-tertiary  font-bold  rounded-full'>
                        <FiSettings className='h-6 w-6  text-primary' />
                    </button>
                    <button className='bg-secondary rounded-full h-[59px] w-[59px] flex items-center justify-center  hover:bg-tertiary font-bold '>
                        <MdOutlineLightMode className='h-6 w-6  text-primary' />
                    </button>
                </div>
            </div>
            {/* body */}
            <div className="flex-grow bg-gray-100">

                {/* Searchbar */}
                <div>
                    <div class='max-w-[432px] h-[60px] mx-auto border mt-8 ml-[69px] text-white'>
                        <div class="relative flex items-center w-full h-12 rounded-full focus-within:shadow-lg  overflow-hidden bg-tertiary">
                            <div class="grid place-items-center h-full w-12 text-gray-300">
                                <FaSearch />
                            </div>

                            <input
                                className="peer h-full w-full text-base text-gray-700 pr-2 bg-tertiary"
                                type="text"
                                id="search"
                                placeholder="Search something.." />
                        </div>
                    </div>
                    <div>

                    </div>
                </div>

                <div className="pl-[70px] pt-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-[911px] h-28">

                        <div className="bg-primary text-white rounded-lg shadow-md p-6 border ">
                            <h3 className="text-sm text-left font-bold mb-4">Total Sales</h3>
                            <div className='flex justify-between'>
                                <h2 className="text-sm text-left font-bold mb-4">
                                    721K
                                </h2>
                                <p className="text-gray-600"> 100,00</p>

                            </div>
                        </div>

                        <div className="bg-tertiary text-white rounded-lg shadow-md p-6 border">
                            <h3 className="text-sm text-left font-bold mb-4">Visits</h3>
                            <div className='flex justify-between'>
                                <h2 className="text-sm text-left font-bold mb-4">
                                    721K
                                </h2>
                                <p className="text-gray-600"> 100,00</p>

                            </div>
                        </div>

                        <div className="bg-secondary text-white rounded-lg shadow-md p-6 border">
                            <h3 className="text-sm text-left font-bold mb-4">New User</h3>
                            <div className='flex justify-between'>
                                <h2 className="text-sm text-left font-bold mb-4">
                                    721K
                                </h2>
                                <p className="text-gray-600"> 100,00</p>

                            </div>
                        </div>
                        <div className="bg-primary text-white rounded-lg shadow-md p-6 border">
                            <h3 className="text-sm text-left font-bold mb-4">Active User</h3>
                            <div className='flex justify-between'>
                                <h2 className="text-sm text-left font-bold mb-4">
                                    721K
                                </h2>
                                <p className="text-gray-600"> 100,00</p>

                            </div>
                        </div>
                    </div>
                    <div className=' flex mt-9 col-2 gap-6'>
                        {/* Activities chart */}
                        <div className=' border'>

                            <ActivitiesChart />
                        </div>
                        <div className='bg-primary m-0'>
                            <OrdersChart />
                        </div>
                    </div>
                </div>
            </div>

        </div >

    );
};

export default Dashboard;