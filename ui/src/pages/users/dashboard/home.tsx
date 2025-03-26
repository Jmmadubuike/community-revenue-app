import UserUI from "../../../components/ui/userui";
import React, { useEffect, useState } from "react";
import { callApi, callUserApi } from "../../../api";
import { callApi as callbaseapi}  from "@zayne-labs/callapi";
import toast from "react-hot-toast";
import { Button, Modal, Form, Input, Upload } from "antd";
import { FaCopy, FaUpload } from "react-icons/fa";
import UserPaymentElement from "../../../components/elements/userpaymentelement";
import { Cloudinary } from '@cloudinary/url-gen';

const UserDashBoard = () => {
    const [paymentDetails, setPaymentDetails] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();
    const cld = new Cloudinary({ cloud: { cloudName: 'dlikhtcy4' } });
    const [proof,setProof] = useState()
    useEffect(() => {
        callUserApi("/financial/details", {
            method: "GET",
            onSuccess: (data) => {
                console.log(data.data);
                setPaymentDetails(data.data);
            },
            onError: (error) => {
                toast.error(error.response?.json?.message || "An error occurred");
            }
        });
    }, []);

    const copyToClipboard = () => {
        const text = `Bank Name: ${paymentDetails.bankName}\nAccount Name: ${paymentDetails.accountName}\nAccount Number: ${paymentDetails.accountNumber}\nPayment Description: ${paymentDetails.paymentDescription}`;
        console.log(text);
        navigator.clipboard.writeText(text).then(() => {
            toast.success("Financial details copied to clipboard!");
        }).catch(() => {
            toast.error("Failed to copy details.");
        });
    };

    const handleUpload = (info) => {
        const file = info.file.originFileObj; // Get the file object
        console.log(file)
      
        setProof(file)
        
    };

    const uploadProof = async () => {
        const formData = new FormData();
        formData.append("file", proof);
        formData.append("upload_preset", "ogidi_union"); // Add your Cloudinary upload preset here
    
        try {
            const response = await fetch("https://api.cloudinary.com/v1_1/dlikhtcy4/image/upload", {
                method: "POST",
                body: formData,
            });
    
            const data = await response.json();
    
            if (data.secure_url) {
                return data.secure_url; // Return the URL of the uploaded image
            } else {
                throw new Error("Failed to upload image");
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to upload proof of payment.");
            throw error; // Re-throw the error to handle it in the handleSubmit function
        }
    };
    
    const handleSubmit = async (values) => {
        if (!proof) {
            toast.error("Please upload a proof of payment file.");
            return;
        }
        const proof_url = await uploadProof()
        const payload = {
            name: values.name,
            amount: values.amount,
            proof: proof_url, // Send the extracted file URL
            date_for: values.date_for,
            notes: values.notes,
        };

        console.log("Submitting Data:", payload);

        await callUserApi("user/payments/new", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
            },
            onSuccess: () => {
                toast.success("Proof of payment uploaded successfully!");
                setIsModalOpen(false);
                form.resetFields();
            },
            onError: (error) => {
                toast.error(error.response?.json?.message || "Upload failed.");
            },
        });
    };

    if (!paymentDetails) {
        return (
            <UserUI>
                <p>Loading .... </p>
            </UserUI>
        );
    }

    return (
        <UserUI>
            <div className="md:flex">
                <div className="md:w-2/6 p-4">
                    <div className="bg-white p-4 rounded-lg shadow-xs">
                        <div className="flex justify-between items-start">
                            <p className="font-bold">{paymentDetails.bankName}</p>
                        </div>
                        <div className="mt-6 flex flex-col">
                            <p className="font-extrabold">{paymentDetails.accountName}</p>
                            <small>Account Name</small>
                        </div>
                        <div className="mt-6 flex flex-col">
                            <p className="font-extrabold">{paymentDetails.accountNumber}</p>
                            <small>Account Number</small>
                        </div>
                        <div className="mt-6 flex flex-col">
                            <p className="font-extrabold">{paymentDetails.paymentDescription}</p>
                            <small>Payment Description</small>
                        </div>
                        <div className="flex justify-between items-start mt-16">
                            <p className="font-extralight text-blue-800">Copy Account</p>
                            <Button 
                                onClick={copyToClipboard} 
                                type="primary" 
                                icon={<FaCopy />} 
                                className="m bg-black">
                                Copy
                            </Button>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="font-extrabold text-3xl">Important Notes</h1>
                    <ul className="max-w-3/4 space-y-3 ml-4 text-lg list-disc pl-5">
                        <li className="font-extralight">Please ensure you include your name or unique ID as a payment reference to enable us to identify your payment.</li>
                        <li className="font-extralight">Make sure the uploaded proof is clear and readable.</li>
                    </ul>
                    <Button 
                        onClick={() => setIsModalOpen(true)} 
                        className="my-6 bg-black text-white py-4">
                        Upload Proof of Payment
                    </Button>
                </div>
            </div>

            <UserPaymentElement limit={10} offset={0}/>

            {/* Modal for Upload Proof of Payment */}
            <Modal 
                title="Upload Proof of Payment" 
                open={isModalOpen} 
                onCancel={() => setIsModalOpen(false)} 
                footer={null}>
                <Form form={form} layout="vertical" onFinish={handleSubmit}>
                    <Form.Item name="name" label="Name" rules={[{ required: true, message: "Name is required" }]}>
                        <Input placeholder="Enter your name" />
                    </Form.Item>

                    <Form.Item name="amount" label="Amount" rules={[{ required: true, message: "Amount is required" }]}>
                        <Input type="number" placeholder="Enter amount" />
                    </Form.Item>

                    <Form.Item label="Upload Proof of Payment" rules={[{ required: true }]}>
                        <Upload 
                            name="file"
                            listType="picture"
                            onChange={handleUpload}
                            showUploadList={true}>
                            <Button icon={<FaUpload />}>Click to Upload</Button>
                        </Upload>
                    </Form.Item>

                    <Form.Item name="date_for" label="Date (Optional)">
                        <Input type="date" />
                    </Form.Item>

                    <Form.Item name="notes" label="Notes (Optional)">
                        <Input.TextArea placeholder="Additional notes" />
                    </Form.Item>

                    <Button type="primary" htmlType="submit" className="w-full">Submit</Button>
                </Form>
            </Modal>
        </UserUI>
    );
};

export default UserDashBoard;