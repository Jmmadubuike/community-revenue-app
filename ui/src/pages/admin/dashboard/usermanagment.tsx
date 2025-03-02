import React, { useEffect, useState } from 'react';
import AdminUI from '../../../components/ui/adminUI';
import { callAdminApi } from "../../../api";
import { Spin, Card } from "antd";
import { FaArrowDown,FaArrowUp } from 'react-icons/fa';
import AdminUserManagementElement from '../../../components/elements/adminRegisteredUserElement';

const AdminUserManagement = () => {
    const [users, setUsers] = useState();

    const fetchData = () => {
        callAdminApi("admin/users/all", {
            onSuccess: (data) => {
                setUsers(data.data);
            }
        });
    };

    useEffect(fetchData, []);

    if (!users) {
        return (
            <AdminUI>
                <Spin />
            </AdminUI>
        );
    }

    return (
        <AdminUI>
            <div>
                

                <div className='mt-8 max-w-full overflow-x-hidden'>
                    <div className="flex items-center justify-between">
                    <h1 className='2xl font-semibold my-2'>User Management</h1>
                    <a type="submit" href='/new-user' className="justify-center w-26 bg-[#7A7D47] text-white py-3 rounded cursor-pointer text-center">
              + New User
            </a>
                    </div>
                    <AdminUserManagementElement limit={1000000} offset={0} />
                </div>
            </div>
        </AdminUI>
    );
};

export default AdminUserManagement;