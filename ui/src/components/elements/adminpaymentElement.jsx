import React, { useEffect, useState } from "react";
import { Table, Tag, Button, Modal } from "antd";
import { callAdminApi } from "../../api";
import toast from "react-hot-toast";

const AdminPaymentElement = ({ limit, offset }) => {
    const [_limit, setLimit] = useState(limit);
    const [_offset, setOffset] = useState(offset);
    const [paymentList, setPayment] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState(null);

    useEffect(() => {
        fetchPayments();
    }, []);

    const fetchPayments = () => {
        callAdminApi("/admin/payments", {
            query: { offset: _offset, limit: _limit },
            onSuccess: (data) => setPayment(data.data),
        });
    };

    const statusColors = {
        pending: "purple",
        failed: "red",
        approved: "green",
    };

    const showDetails = (record) => {
        setSelectedPayment(record);
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setSelectedPayment(null);
    };

    const handleAction = (payment, state) => {
        toast.loading("Processing...");
        callAdminApi(`/admin/payments/action/${payment.id}`, {
            method: "POST",
            data: { state },
            onSuccess: () => {
                toast.dismiss();
                toast.success("Status Updated");

                // Update paymentList state
                setPayment((prevPayments) =>
                    prevPayments.map((p) =>
                        p.id === payment.id ? { ...p, status: state } : p
                    )
                );

                // Update modal state
                setSelectedPayment((prev) =>
                    prev ? { ...prev, status: state } : null
                );
            },
            onError: () => {
                toast.dismiss();
                toast.error("Failed to update status");
            },
        });
    };

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
            render: () => "Bank Transfer",
        },
        {
            title: `Amount(${"₦"})`,
            dataIndex: "amount",
            key: "amount",
            render: (amount) => `₦${parseFloat(amount).toFixed(2)}`,
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status) => (
                <Tag color={statusColors[status]} className="flex items-center">
                    <span className={`w-2 h-2 rounded-full bg-${statusColors[status]}-500 mr-2`} />
                    {status.toUpperCase()}
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

    return (
        <div className="p-4 bg-white shadow-md rounded-md max-w-full">

            {/* Modal to show details */}
            <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
                {selectedPayment ? (
                    <div className="space-y-2 flex flex-col items-center">
                        <p className="text-2xl font-semibold">Payment Detail</p>
                        <p className="text-xl text-slate-700">
                            {selectedPayment.user.first_name} {selectedPayment.user.last_name}
                        </p>

                        <p className="px-4 py-2 bg-gray-400 text-lg">Uploaded Receipt</p>

                        <img src={selectedPayment.proof} className="max-w-2/4" />

                        {selectedPayment.notes ? <p>{selectedPayment.notes}</p> : <p>No Notes!</p>}

                        <p className="text-2xl text-slate-800">
                            ₦{parseFloat(selectedPayment.amount).toFixed(2)}
                        </p>

                        <div className="flex justify-evenly">
                            <p>
                                <Tag color={statusColors[selectedPayment.status]}>
                                    {selectedPayment.status.toUpperCase()}
                                </Tag>
                            </p>
                            <p>{new Date(selectedPayment.date_created).toLocaleString()}</p>
                        </div>

                        {/* Action buttons */}
                        <div className="flex justify-evenly gap-8">
                            <button
                                className="px-16 py-4 bg-red-500 text-white cursor-pointer"
                                onClick={() => handleAction(selectedPayment, "failed")}
                            >
                                Reject
                            </button>
                            <button
                                className="px-16 py-4 bg-green-500 text-white cursor-pointer"
                                onClick={() => handleAction(selectedPayment, "approved")}
                            >
                                Approve
                            </button>
                        </div>
                    </div>
                ) : (
                    <p>No payment selected.</p>
                )}
            </Modal>

            {/* Table for desktop */}
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

            {/* Mobile-friendly list view */}
            <div className="block lg:hidden space-y-4">
                {paymentList.map((payment) => (
                    <div key={payment.id} className="p-4 border rounded-lg shadow-md bg-gray-50">
                        <p className="text-sm text-gray-700">
                            <span className="font-semibold">User:</span> {payment.user.first_name} {payment.user.last_name}
                        </p>
                        <p className="text-sm text-gray-700">
                            <span className="font-semibold">Amount:</span> ₦{parseFloat(payment.amount).toFixed(2)}
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
                        <Button type="primary" className="mt-2 bg-blue-500 w-full" onClick={() => showDetails(payment)}>
                            Show Details
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminPaymentElement;
