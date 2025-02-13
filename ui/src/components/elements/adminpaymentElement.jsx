import React, { useEffect, useState } from "react";
import { Table, Tag, Button } from "antd";
import { callAdminApi } from "../../api";

const AdminPaymentElement = ({ limit, offset }) => {
    const [_limit, setLimit] = useState(limit);
    const [_offset, setOffset] = useState(offset);
    const [paymentList, setPayment] = useState([]);

    const fetchPayments = () => {
        callAdminApi("/admin/payments", {
            query: { offset: _offset, limit: _limit },
            onSuccess: (data) => {
                setPayment(data.data);
            },
        });
    };
    const statusColors = {
        pending: "purple",
        failed: "red",
        approved: "green",
    };
    useEffect(fetchPayments, []);

    const columns = [
        {
            title: "Date Created",
            dataIndex: "date_created",
            key: "date_created",
            render: (date) => new Date(date).toLocaleDateString(),
        },
        {
            title: "User Name",
            dataIndex: "user",
            key: "user",
            render: (user) => `${user.first_name} ${user.last_name}`,
        },
        {
            title: "Transaction ID",
            dataIndex: "transaction_id",
            key: "transaction_id",
        },
        {
            title: "Payment Method",
            dataIndex: "user",
            key: "user",
            render: (user) => "Bank Transfer",
        },
       
        {
            title: `Amount${"₦"}`,
            dataIndex: "amount",
            key: "amount",
            render: (amount) => `$${parseFloat(amount).toFixed(2)}`,
        },
       
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status) => {
                const statusColors = {
                    pending: "purple",
                    failed: "red",
                    approved: "green",
                };
                return (
                    <Tag color={statusColors[status]} className="flex items-center">
                        <span className={`w-2 h-2 rounded-full bg-${statusColors[status]}-500 mr-2`} />
                        {status.toUpperCase()}
                    </Tag>
                );
            },
        },
        
        {
            title: "Actions",
            key: "actions",
            render: (_, record) => (
                <Button className="" onClick={() => showDetails(record)}>
                    Show Details
                </Button>
            ),
        },
    ];

    const showDetails = (record) => {
        alert(`Showing details for Transaction ID: ${record.transaction_id}`);
    };

    return (
        <div className="p-4 bg-white shadow-md rounded-md max-w-full">
            <h2 className="text-lg font-semibold mb-4">Admin Payment Element</h2>
            
            <div className="overflow-x-auto max-w-full hidden md:flex">
                <Table 
                    dataSource={paymentList} 
                    columns={columns} 
                    rowKey="id" 
                    pagination={{ pageSize: _limit }} 
                    scroll={{ x: 800 }}
                    className="w-full flex flex-col"
                />
            </div>

            <div className="block lg:hidden space-y-4">
                {paymentList.map((payment) => (
                    <div key={payment.id} className="p-4 border rounded-lg shadow-md bg-gray-50">
                        <p className="text-sm text-gray-700">
                            <span className="font-semibold">User:</span> {payment.user.first_name} {payment.user.last_name}
                        </p>
                        <p className="text-sm text-gray-700">
                            <span className="font-semibold">Amount:</span> ${parseFloat(payment.amount).toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-700">
                            <span className="font-semibold">Transaction ID:</span> {payment.transaction_id}
                        </p>
                        <p className="text-sm text-gray-700 flex items-center">
                            <span className="font-semibold">Status:</span>
                            <span className={`ml-2 w-2 h-2 rounded-full bg-${statusColors[payment.status]}-500`}></span>
                            <span className="ml-1">{payment.status.toUpperCase()}</span>
                        </p>
                        <p className="text-sm text-gray-700">
                            <span className="font-semibold">Date:</span> {new Date(payment.date_created).toLocaleString()}
                        </p>
                        <Button 
                            type="primary" 
                            className="mt-2 bg-blue-500 w-full" 
                            onClick={() => showDetails(payment)}
                        >
                            Show Details
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminPaymentElement;
