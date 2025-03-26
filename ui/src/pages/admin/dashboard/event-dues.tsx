import React, { use, useEffect, useState } from "react";
import { Tabs, Modal, Input, Button, DatePicker, Upload, Table } from "antd";
import { FaPlus, FaUpload } from "react-icons/fa";
import AdminUI from "../../../components/ui/adminUI";
import { callAdminApi } from '../../../api';
import { toast } from "react-hot-toast";


const UpcomingPage = () => {
  const [activeTab, setActiveTab] = useState("dues");
  const [isDuesModalOpen, setDuesModalOpen] = useState(false);
  const [isEventModalOpen, setEventModalOpen] = useState(false);

  const [duesData, setDuesData] = useState({ name: "", deadline: null, amount: "", notes: "" });
  const [eventData, setEventData] = useState({ name: "", dateTime: null, venue: "", notes: "" });
  const [eventList,setEventList] = useState([])
  const [duesList,setDuesList] = useState([])



  const fetchDuesList = () => {
    callAdminApi("/admin/dues/all",{
      onSuccess :(data) => {
        setDuesList(data.data.data)

      },
      onError : () => {
        toast.error("An error occured, refreh the page")
      }
    })
  }

  const fetchEventList = () => {
    callAdminApi("/admin/events/all",{
      onSuccess :(data) => {
        setEventList(data.data.data)

      },
      onError : () => {
        toast.error("An error occured, refreh the page")
      }
    })
  }
  useEffect(()=>{
    fetchDuesList()
    fetchEventList()
  },[activeTab])
  const handleAddDues = async () => {
    if (!duesData.name || !duesData.deadline || !duesData.amount || !duesData.notes) {
      return toast.error("Please fill all fields");
    }
    toast.loading("Adding Dues...");
    const duesData_ = { 
      name : duesData.name,
      amount: duesData.amount,
      notes: duesData.notes,
      deadline: duesData.deadline ? duesData.deadline.toISOString().split('T')[0] : null
    }

    callAdminApi("admin/dues", {
      method: "POST",
      body: JSON.stringify(duesData_),
      onSuccess: () => {
        toast.dismiss();
        toast.success("Dues Added Successfully");
        setDuesData({ name: "", deadline: "", amount: "", notes: "" });
        setDuesModalOpen(false);
        fetchDuesList()
      },
      onError: (error) => {
        toast.dismiss();
        toast.error("An error occurred. Please try again");
      }
      
    })
  
  };

  

  const handleAddEvent = async () => {
    if (!eventData.name || !eventData.dateTime || !eventData.venue || !eventData.notes) {
      return toast.error("Please fill all fields");
    }
    toast.loading("Adding Event...");
    const eventData_ = { 
      title : eventData.name,
      venue: eventData.venue,
      description: eventData.notes,
      banner_url: "https://www.google.com",
      date: eventData.dateTime.toISOString()
    }

    callAdminApi("admin/events", {
      method: "POST",
      body: JSON.stringify(eventData_),
      onSuccess: () => {
        toast.dismiss();
        toast.success("Event Added Successfully");
        setEventData({ name: "", dateTime: null, venue: "", notes: "", banner: "" });
        setEventModalOpen(false);
      },
      onError: (error) => {
        toast.dismiss();
        toast.error("An error occurred. Please try again");
      }
      
    })
  };

  

  function formatDate(dateString) {
    const date = new Date(dateString);
  
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  
    return formattedDate;
  }

  function formatMoney(amount, currency = "USD") {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: currency,
    });
  }
  return (
    <AdminUI>
      <div>
        <div className="flex gap-4 mb-6">
          <Button type="primary" icon={<FaPlus />} className="bg-gray-200 text-black border-2 border-gray-800 md:px-16" onClick={() => setDuesModalOpen(true)}>Add Upcoming Dues</Button>
          <Button type="primary" icon={<FaPlus />} className="bg-gray-200 text-black border-2 border-gray-800" onClick={() => setEventModalOpen(true)}>Add Upcoming Event</Button>
        </div>

        <Tabs activeKey={activeTab} onChange={setActiveTab} className="mb-4 bg-white rounded-xl shadow min-h-[50vh] px-4">
        <Tabs.TabPane tab="Upcoming Dues" key="dues">
            {
              duesList?.map((data, index) => {
                return (

                  <div className=" bg-white  border-b border-neutral-400 md:p-6">
                  <div className="space-y-4">
                      <div className="flex flex-wrap justify-between items-start gap-2">
                          <div>
                              <h2 className="text-gray-800">
                               <span className="text-2xl font-semibold "> {data.name}</span>:  <span className="text-xl text-gray-600"> ₦{data.amount} Due by  {formatDate(data.deadline)}</span>
                              </h2>
                              <p className="text-sm text-gray-500 mt-1">
                                 {data.notes}
                              </p>
                          </div>
                          <span className="text-lg md:text-xl font-bold text-gray-900">
                              <button className="px-4 py-2 text-sm font-medium rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
                              Edit Details
                          </button>
                          </span>
                      </div>
              
                     
              
                   
                  </div>
              
                 
              </div>
                )
              })
            }
          </Tabs.TabPane>
          <Tabs.TabPane tab="Upcoming Events" key="events" >
          {
              eventList?.map((data, index) => {
                return (

                  <div className=" border-b border-neutral-400 md:p-6 p-2">
                    <div className="bg-white  flex items-center space-x-4">
                  <img 
                      src="https://www.pexels.com/photo/green-grass-near-trees-1770809/" 
                      className="w-12 h-12 object-cover rounded-full" 
                      alt="Event" 
                  />
                  <div>
                  <div className="flex items-center space-x-2">
                      <h1 className="text-xl font-bold">{data.title}</h1>
                      <p className="text-neutral-400 text-lg">•</p>
                      <p className="text-neutral-600 text-lg">
                          {formatDate(data.date)} •  <span>{data.venue}</span>
                      </p>
                  </div>
              <small>{data.description}</small>
                </div>
              </div>
                  </div>
                )
              })
            }
            </Tabs.TabPane>
        </Tabs>

        {/* Dues Modal */}
        <Modal title="Add Dues" open={isDuesModalOpen} onCancel={() => setDuesModalOpen(false)} footer={null}>
        <Input placeholder="Name" className="mb-2 p-4" value={duesData.name} onChange={(e) => setDuesData({ ...duesData, name: e.target.value })} />

        <DatePicker placeholder="Deadline" className="mb-2 w-full p-3 mt-5" onChange={(date) => setDuesData({ ...duesData, deadline: date })} />

        <Input placeholder="Amount" type="number" className="mb-2 p-4" value={duesData.amount} onChange={(e) => setDuesData({ ...duesData, amount: e.target.value })} />

        <Input.TextArea placeholder="Notes" className="mb-8 p-4" value={duesData.notes} onChange={(e) => setDuesData({ ...duesData, notes: e.target.value })} />

        <Button type="primary" className="w-full p-5 bg-black" onClick={handleAddDues}>Save</Button>
      </Modal>

        {/* Event Modal */}
        <Modal title="Add Event" open={isEventModalOpen} onCancel={() => setEventModalOpen(false)} footer={null}>
            <span>Event Name</span>
          <Input placeholder="Event Name" className="mb-2 p-4" value={eventData.name} onChange={(e) => setEventData({ ...eventData, name: e.target.value })} />
          
          <Upload className="mb-8">
            <Button icon={<FaUpload />} className="bg-gray-200">Upload Banner</Button>
          </Upload>
          <DatePicker showTime placeholder="Date & Time" className="mb-2 w-full p-3 mt-5" onChange={(date) => setEventData({ ...eventData, dateTime: date })} />
          <Input placeholder="Venue" className="mb-2 p-4" value={eventData.venue} onChange={(e) => setEventData({ ...eventData, venue: e.target.value })} />
          <Input.TextArea placeholder="Notes" className="mb-2" value={eventData.notes} onChange={(e) => setEventData({ ...eventData, notes: e.target.value })} />
          <Button type="primary" className="w-full p-5   bg-black" onClick={handleAddEvent}>Save</Button>
        </Modal>
      </div>
    </AdminUI>
  );
};

export default UpcomingPage;
