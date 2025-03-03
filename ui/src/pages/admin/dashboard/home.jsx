import React, { useEffect, useState } from 'react';
import AdminUI from '../../../components/ui/adminUI';
import {callAdminApi} from "../../../api"
import {Spin,Card}  from "antd"
import { FaArrowDown,FaArrowUp } from 'react-icons/fa';
import AdminPaymentElement from '../../../components/elements/adminpaymentElement';
import AdminRegisteredUserElement from '../../../components/elements/adminRegisteredUserElement';

const AdminDashboardHome = () => {
    const [stats,setStats] = useState()
    const fetchData = () => {
        callAdminApi("admin/stats",{
            onSuccess:(data) => {
                setStats(data.data)
            }
        })
    }
    useEffect(fetchData,[])
    if (!stats){
        return (
            <AdminUI>
                <Spin />
            </AdminUI>
        )
    }
    return (
        <AdminUI>
            <div>
                <div className="flex gap-2 flex-col md:flex-row items-center">
                <Card className="shadow-md rounded-lg  border border-gray-200 bg-white w-80 h-40">
                <div className='flex justify-between px-2 border-b border-gray-400'>
                    <p className='text-sm font- text-gray-700'>Total Users</p>
                    <p className='text-sm font-extralight text-gray-700 bg-gray-200 px-2 rounded-md'>Today</p>
                </div>

                <div className='flex justify-between px-2 mt-4'>
                    <p className='text-2xl font-bold'>{stats?.users?.total_users}</p>
                    <div className='flex'>
                        {stats?.users?.trend == "rise" ? 
                        <div className='flex items-center justify-center'>
                               
                                <p className='flex items-center'> <FaArrowUp className='text-green-700' />{stats?.users?.percentage_change}%</p>
                        </div> : 
                        <div>
                            <div className='flex items-center'>
                                
                                <p  className='flex items-center'><FaArrowDown className='text-red-700' />{stats?.users?.percentage_change}%</p>
                        </div>
                        </div>}
                    </div>
                </div>
                <p className='text-sm text-gray-400'>Compared to {stats?.users?.last_month} last month</p>
                </Card>

                <Card className="shadow-md rounded-lg  border border-gray-200 bg-white w-80 h-40">
                <div className='flex justify-between px-2 border-b border-gray-400'>
                    <p className='text-sm font- text-gray-700'>Financial Summary</p>
                    <p className='text-sm font-extralight text-gray-700 bg-gray-200 px-2 rounded-md'>Today</p>
                </div>

                <div className='flex justify-between px-2 mt-4'>
                    <p className='text-2xl font-bold'>NGN{stats?.payments?.total_payment}</p>
                    <div className='flex'>
                        {stats?.payments?.trend == "rise" ? 
                        <div className='flex items-center justify-center'>
                               
                                <p className='flex items-center'> <FaArrowUp className='text-green-700' />{stats?.payments?.percentage_change}%</p>
                        </div> : 
                        <div>
                            <div className='flex items-center'>
                                
                                <p  className='flex items-center'><FaArrowDown className='text-red-700' />{stats?.users?.percentage_change}%</p>
                        </div>
                        </div>}
                    </div>
                </div>
                <p className='text-sm text-gray-400'>Compared to NGN{stats?.payments?.last_month} last month</p>
                </Card>

                <Card className="shadow-md rounded-lg  border border-gray-200 bg-white w-80 h-40">
                <div className='flex justify-between px-2 border-b border-gray-400'>
                    <p className='text-sm font- text-gray-700'>Upcoming Event</p>
                    <p className='text-sm font-extralight text-gray-700 bg-gray-200 px-2 rounded-md'>Today</p>
                </div>

               {stats?.event ? 
               <div>
                
               </div>:
               <div>
                </div>}
                </Card>
                </div> 

                <div className='mt-8 max-w-full overflow-x-hidden'>
            <h1 className='2xl font-semibold my-2'>Financial Transactions.</h1>
            <AdminPaymentElement limit={6} offset={0}/>
            </div>

            <div className='mt-8 max-w-full overflow-x-hidden'>
            <h1 className='2xl font-semibold my-2'>Registered User</h1>
            <AdminRegisteredUserElement limit={6} offset={0}/>
            </div>
            </div>
            
        </AdminUI>
    );
};

export default AdminDashboardHome;