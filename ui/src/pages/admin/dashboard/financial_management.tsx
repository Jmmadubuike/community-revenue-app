import React, { useState } from 'react';
import AdminUI from '../../../components/ui/adminUI';
import { FaCopy } from 'react-icons/fa';
import { Modal, Button, Input,message } from 'antd';
import AdminPaymentElement from '../../../components/elements/adminpaymentElement';
import { callAdminApi } from '../../../api';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
const FinancialManagement: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editField, setEditField] = useState({
        bankName: "Acess Bank",
        accountName: "Ogidi Union Advancement Forum",
        accountNumber: "123344345435356",
        paymentDescription: "[User should include their name or unique ID for identification.]"
    });

    useEffect(() => {
        callAdminApi("admin/financial/details", {
            method: "GET",
            onSuccess: (data) => {
                console.log(data.data)
                setEditField(data.data);
            },
            onError: (error) => {
                toast.error(error.response?.json?.message || "An error occurred");
            }
        });
    }, []);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditField({ ...editField, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        toast.loading("Updating financial details...");
       callAdminApi("admin/financial/update", {
            method: "PUT",
            body: JSON.stringify(editField),
            onSuccess: () => {
                toast.dismiss();
                closeModal();
                toast.success("Financial details updated successfully");
            },
            onError: (error) => {
                toast.dismiss();
                toast.error(error.response?.json?.message || "An error occurred");
            }
       });
    }
    const copyToClipboard = () => {
        const text = `Bank Name: ${editField.bankName}\nAccount Name: ${editField.accountName}\nAccount Number: ${editField.accountNumber}\nPayment Description: ${editField.paymentDescription}`;
        console.log(text);
        navigator.clipboard.writeText(text).then(() => {
            toast.success("Financial details copied to clipboard!");
        }).catch(err => {
            toast.error("Failed to copy details.");
        });
    };
    return (
        <AdminUI>
            <div className='md:flex '>
                <div className='md:w-2/6 p-4'>
                    <h1>Financial Summary</h1>
                    <div className='bg-white p-4 rounded-lg shadow-xs'>
                        <div className='flex justify-between items-start'>
                            <p className='font-bold'>{editField.bankName}</p>
                            <Button type='primary' onClick={openModal} className='bg-[#7A7D47]'>Edit</Button>
                        </div>
                        <div className='mt-6 flex flex-col'>
                            <p className='font-extrabold'>{editField.accountName}</p>
                            <small>Account Name</small>
                        </div>
                        <div className='mt-6 flex flex-col'>
                            <p className='font-extrabold'>{editField.accountNumber}</p>
                            <small>Account Number</small>
                        </div>
                        <div className='mt-6 flex flex-col'>
                            <p className='font-extrabold'>{editField.paymentDescription}</p>
                            <small>Payment Description</small>
                        </div>
                        <div className='flex justify-between items-start mt-16'>
                            <p className='font-extralight text-blue-800'>Copy Account</p>
                            <Button 
                            onClick={copyToClipboard}
                            type='primary' icon={<FaCopy />} className='m bg-[#7A7D47]'>Copy</Button>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='font-extrabold text-3xl'>Important Notes</h1>
                    <ul className='max-w-3/4 space-y-3 ml-4 text-lg list-disc pl-5'>
                        <li className='font-extralight'>Please ensure you include your name or unique ID as payment reference to enable us identify your payment.</li>
                        <li className='font-extralight'>Please ensure you include your name or unique ID as payment reference to enable us identify your payment.</li>
                    </ul>
                    <Button type='primary' className='mt-4 bg-[#7A7D47]' onClick={openModal}>Edit Notes</Button>
                </div>
            </div>
            {/* Modal */}
            <Modal title="Edit Financial Details" visible={isModalOpen} onCancel={closeModal} footer={null}>
                <Input name='bankName' value={editField.bankName} onChange={handleChange} className='mb-3' placeholder='Bank Name' />
                <Input name='accountName' value={editField.accountName} onChange={handleChange} className='mb-3' placeholder='Account Name' />
                <Input name='accountNumber' value={editField.accountNumber} onChange={handleChange} className='mb-3' placeholder='Account Number' />
                <Input name='paymentDescription' value={editField.paymentDescription} onChange={handleChange} className='mb-3' placeholder='Payment Description' />
                <div className='flex justify-end gap-2'>
                    <Button onClick={closeModal} danger>Cancel</Button>
                    <Button type='primary' onClick={handleSave}>Save</Button>
                </div>
            </Modal>

            <AdminPaymentElement limit={200} offset={0}/>
        </AdminUI>
    );
};

export default FinancialManagement;
