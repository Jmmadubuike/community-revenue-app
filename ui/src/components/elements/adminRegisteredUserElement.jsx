import React, { useEffect, useState } from "react";
import { Table, Tag, Button, Modal, Input, Form } from "antd";
import { callAdminApi } from "../../api";
import { SearchOutlined } from "@ant-design/icons";

const AdminRegisteredUserElement = ({ limit, offset }) => {
    const [_limit, setLimit] = useState(limit);
    const [_offset, setOffset] = useState(offset);
    const [userList, setUserList] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const [search, setSearch] = useState("");

    const fetchUsers = () => {
        callAdminApi("/admin/users/all", {
            query: { offset: _offset, limit: _limit },
            onSuccess: (data) => {
                setUserList(data.data.data);
            },
        });
    };

    useEffect(fetchUsers, []);

    const showDetails = (record) => {
        setSelectedUser(record);
        form.setFieldsValue(record);
        setIsModalVisible(true);
    };

    const updateUser = () => {
        console.log(form.getFieldsValue())
        callAdminApi(`/admin/users/${selectedUser.id}/update`, {
            method: "PUT",
            body: JSON.stringify(form.getFieldsValue()),
            onSuccess: () => {
                setIsModalVisible(false);
                 fetchUsers();
            },
        });
    };

    const activateUser = () => {
        console.log(form.getFieldsValue())
        callAdminApi(`/admin/users/${selectedUser.id}/update`, {
            method: "PUT",
            body: JSON.stringify({"is_active" : true}),
            onSuccess: () => {
                setIsModalVisible(false);
                 fetchUsers();
            },
        });
    }; 
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
            title: "Village",
            dataIndex: "age_grade",
            key: "age_grade",
        },
        {
            title: "Status",
            dataIndex: "is_active",
            key: "is_active",
            render: (is_active) => (
                <Tag color={is_active ? "green" : "red"}>
                    {is_active ? "Approved" : "Pending"}
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
            <Input
                placeholder="Search by IDN or Username"
                prefix={<SearchOutlined />}
                onChange={(e) => setSearch(e.target.value)}
                className="mb-4"
            />
            <Table 
                dataSource={userList.filter(user => 
                    user.idn.includes(search) || 
                    `${user.first_name} ${user.last_name}`.toLowerCase().includes(search.toLowerCase())
                )} 
                columns={columns} 
                rowKey="id" 
                pagination={{ pageSize: _limit }} 
                scroll={{ x: 800 }}
            />
            
            <Modal
                title="User Details"
                visible={isModalVisible}
                onOk={updateUser}
                footer={null}
                onCancel={() => setIsModalVisible(false)}
            >
                <Form form={form} layout="vertical">
                    <Form.Item name="first_name" label="First Name">
                        <Input />
                    </Form.Item>
                    <Form.Item name="last_name" label="Last Name">
                        <Input />
                    </Form.Item>
                    <Form.Item name="email" label="Email">
                        <Input />
                    </Form.Item>
                    <Form.Item name="date_of_birth" label="Date of Birth">
                        <Input type="date" />
                    </Form.Item>
                    <Form.Item name="country_of_residence" label="Country of Residence">
                        <Input />
                    </Form.Item>
                    <Form.Item name="quarter" label="Quarter">
                        <Input />
                    </Form.Item>
                    <Form.Item name="age_grade" label="Age Grade">
                        <Input />
                    </Form.Item>

                    <Form.Item name="level" label="Level">
                        <Input />
                    </Form.Item>

                   
                    <Form.Item name="idn" label="IDN">
                        <Input disabled />
                    </Form.Item>
                </Form>
                <div className="flex gap-2">
                    <Button onClick={updateUser}>Update</Button>
                    <Button onClick={activateUser}>Activate</Button>



                </div>
            </Modal>
        </div>
    );
};

export default AdminRegisteredUserElement;
