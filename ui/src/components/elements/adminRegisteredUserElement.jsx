import React, { useEffect, useState } from "react";
import { Table, Tag, Button } from "antd";
import { callAdminApi } from "../../api";

const AdminRegisteredUserElement = ({ limit, offset }) => {
    const [_limit, setLimit] = useState(limit);
    const [_offset, setOffset] = useState(offset);
    const [userList, setUserList] = useState([]);

    const fetchUsers = () => {
        callAdminApi("/admin/users/all", {
            query: { offset: _offset, limit: _limit },
            onSuccess: (data) => {
                setUserList(data.data.data);
            },
        });
    };

    useEffect(fetchUsers, []);

    const columns = [
        {
            title: "Full Name",
            key: "full_name",
            render: (_, record) => `${record.first_name} ${record.last_name}`,
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Country of Residence",
            dataIndex: "country_of_residence",
            key: "country_of_residence",
        },
        {
            title: "Quarter",
            dataIndex: "quarter",
            key: "quarter",
        },
        {
            title: "Age Grade",
            dataIndex: "age_grade",
            key: "age_grade",
        },
        {
            title: "Kindred",
            dataIndex: "kindred",
            key: "kindred",
        },
        {
            title: "Status",
            dataIndex: "approved",
            key: "approved",
            render: (approved) => (
                <Tag color={approved ? "green" : "red"}>
                    {approved ? "Approved" : "Pending"}
                </Tag>
            ),
        },
        {
            title: "Actions",
            key: "actions",
            render: (_, record) => (
                <Button onClick={() => showDetails(record)}>Show Details</Button>
            ),
        },
    ];

    const showDetails = (record) => {
        alert(`Showing details for User: ${record.first_name} ${record.last_name}`);
    };

    return (
        <div className="p-4 bg-white shadow-md rounded-md max-w-full">
            
            <div className="overflow-x-auto max-w-full hidden md:flex">
                <Table 
                    dataSource={userList} 
                    columns={columns} 
                    rowKey="id" 
                    pagination={{ pageSize: _limit }} 
                    scroll={{ x: 800 }}
                    className="w-full flex flex-col"
                />
            </div>

            {/* Mobile View */}
            <div className="block lg:hidden space-y-4">
                {userList.map((user) => (
                    <div key={user.id} className="p-4 border rounded-lg shadow-md bg-gray-50">
                        <p className="text-sm text-gray-700">
                            <span className="font-semibold">Full Name:</span> {user.first_name} {user.last_name}
                        </p>
                        <p className="text-sm text-gray-700">
                            <span className="font-semibold">Email:</span> {user.email}
                        </p>
                        <p className="text-sm text-gray-700">
                            <span className="font-semibold">Date of Birth:</span> {new Date(user.date_of_birth).toLocaleDateString()}
                        </p>
                        <p className="text-sm text-gray-700">
                            <span className="font-semibold">Country of Residence:</span> {user.country_of_residence}
                        </p>
                        <p className="text-sm text-gray-700">
                            <span className="font-semibold">Quarter:</span> {user.quarter}
                        </p>
                        <p className="text-sm text-gray-700">
                            <span className="font-semibold">Age Grade:</span> {user.age_grade}
                        </p>
                        <p className="text-sm text-gray-700">
                            <span className="font-semibold">Kindred:</span> {user.kindred}
                        </p>
                        <p className="text-sm text-gray-700">
                            <span className="font-semibold">Status:</span>
                            <Tag color={user.approved ? "green" : "red"} className="ml-2">
                                {user.approved ? "Approved" : "Pending"}
                            </Tag>
                        </p>
                        <Button 
                            type="primary" 
                            className="mt-2 bg-blue-500 w-full" 
                            onClick={() => showDetails(user)}
                        >
                            Show Details
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminRegisteredUserElement;
