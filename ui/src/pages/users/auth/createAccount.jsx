import { useState } from "react";
import Logo from "../../../components/common/logo"
import {callApi} from "../../../api"
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom"
const NewUserForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        date_of_birth: "",
        country_of_residence: "",
        quarter: "",
        age_grade: "",
        kindred: "Any",
        gender: "unknown",
        marital_status: "single",
        level: "level_1",
        phone: ""
    });
    const navigate = useNavigate()
    const [step, setStep] = useState(1); // Track current step

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => {
        if (step === 1 && (!formData.first_name || !formData.last_name || !formData.date_of_birth )) {
            toast.error("Fill all required fields");
            return;
        }
        if (step === 2 && (!formData.country_of_residence || !formData.quarter || !formData.age_grade)) {
            toast.error("Fill all required fields");
            return;
        }
        setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };
    const handleSubmit = (e) => {

        e.preventDefault();
        if (!formData.country_of_residence || !formData.quarter || !formData.age_grade 
            
        ){
            toast.error(
                "Fill in all fields !"
            )
            return 
        }

        toast.loading()
        callApi("users/new",{
            method:"POST",
            body:JSON.stringify(formData),
            onSuccess:(ctx) => {
                toast.dismiss()
                toast.success("Welcome")
                setStep(5)
            },
            onError:(error) => {
                toast.dismiss()

                if (error.response.status === 400){
                    toast.error("Email Already exists !")
                }
            }

        })
    };

    return (
        <div className="bg-gray-100 flex justify-center items-center min-h-screen relative">

            <div className="p-6 rounded-lg  w-full max-w-sm text-center">
                <Logo />
                <h2 className="text-xl font-semibold mb-4 text-center">Create an <span className="text-amber-900">OUAF</span> Account</h2>
                <form onSubmit={handleSubmit} className="space-y-8 text-left min-h-[70vh] relative">
                    <button className="px-2 py-1 bg-amber-900 text-white rounded-sm ml-auto absolute right-0 top-0 mt-[-15px]" onClick={(e) => {
                        e.preventDefault()
                        navigate(-1)

                    }}>Back</button>
                    {/* Step 1 */}
                    {step === 1 && (
                        <>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
                                    required />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">First Name</label>
                                <input type="text" name="first_name" value={formData.first_name} onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
                                    required />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                                <input type="text" name="last_name" value={formData.last_name} onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
                                    required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                                <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200" />
                            </div>
                        </>
                    )}

                    
                    {/* Step 3 */}
                    {step === 2 && (
                        <>
                        <div>
                                <label className="block text-sm font-medium text-gray-700">Country of Residence</label>
                                <input type="text" name="country_of_residence" value={formData.country_of_residence} onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
                                    required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Quarter</label>
                                <select name="quarter" value={formData.quarter} onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
                                    required >
                                    <option value="" disabled>Select a quarter</option>
                                    <option value="Akanano">Akanano</option>
                                    <option value="Uru">Uru</option>
                                    <option value="Ezinkwo">Ezinkwo</option>
                                    <option value="Ikenga">Ikenga</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Vilages</label>
                                <select name="age_grade" value={formData.age_grade} onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
                                    required >
                                    <option value="" disabled>Select a Village</option>
                                    <option value="Ire">Ire</option>
                                    <option value="Abo">Abo</option>
                                    <option value="Ezi-Ogidi">Ezi-Ogidi</option>
                                    <option value="Ezi-Ogidi">Ezi-Ogidi</option>
                                    <option value="Umuru">Umuru</option>
                                    <option value="Ntukwulu">Ntukwulu</option>
                                    <option value="Ajilija">Ajilija</option>
                                    <option value="Adazi">Adazi</option>
                                    <option value="Umudoma">Umudoma</option>
                                    <option value="Uru-Ezealor">Uru-Ezealor</option>
                                    <option value="Uru-Orji">Uru-Orji</option>
                                    <option value="Umu-Anugwo">Umu-Anugwo</option>
                                    <option value="Ogwugwu-agu">Ogwugwu-agu</option>
                                    <option value="Ogidi-Ani">Ogidi-Ani</option>
                                    <option value="Nkwelle-Ogidi">Nkwelle-Ogidi</option>
                                    <option value="Obodokwe">Obodokwe</option>
                                    <option value="Anugwo">Anugwo</option>
                                    <option value="Nanri">Nanri</option>
                                    <option value="Odida">Odida</option>



                                </select>
                            </div>

                           
                        </>
                    )}

                    {/* Step 4 */}
                    {step === 3 && (
                        <>
                           <div>
                           <label className="block text-sm font-medium text-gray-700">Sex</label>
                            <select name="gender" value={formData.gender} onChange={handleChange} required className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200">
                                <option value="unknown" disabled>Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                           </div>
                           <div>
                           <label className="block text-sm font-medium text-gray-700">Marital status</label>
                            <select name="marital_status" value={formData.marital_status} onChange={handleChange} required className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200">
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="divorced">Divorced</option>
                            <option value="widow">Widow</option>
                            <option value="widower">Widower</option>


                            

                            </select>
                           </div>
                        </>
                    )}
                    {step === 4 && (
                        <>
                           <div>
                                <label className="block text-sm font-medium text-gray-700">Level</label>
                                <select name="level" value={formData.level} onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
                                    required >
                                    <option disabled>Select Level</option>

                                    <option value="level_1">Level 1(General)</option>
                                    <option value="level_2">Level 2 (Bronze)</option>
                                    <option value="level_3">Level 3 (Silver)</option>
                                    <option value="level_4">Level 4 (Gold)</option>
                                    <option value="level_5">Level 5 (V.I.P)</option>
                                    <option value="level_6">Level 6 (Super V.I.P)</option>

                                </select>
                            </div>
                            <div>
                            <label className="block text-sm font-medium text-gray-700">Phone</label>

                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"/>
                            </div>
                        </>
                    )}
                    {step === 5 && (
                        <>
                           <div className="text-center bg-gray-100 p-6 rounded-2xl border-md max-w-lg mx-auto">
                            <h1 className="text-2xl font-bold text-gray-800">Welcome to <span className="text-purple-600">OUAF</span></h1>
                            <p className="text-gray-600 mt-2">Annual Financial Responsibility Collection App</p>
                            <p className="text-gray-500 mt-4">You will receive an email shortly with your login details!</p>
                            </div>

                        </>
                    )}
                    <div className="flex justify-between mt-4">
                        {step > 1 && step < 5 && (
                            <button type="button" onClick={prevStep} className="bg-gray-400 text-white px-4 py-2 rounded-md cursor-pointer">Previous</button>
                        )}
                        {step < 4 && (
                            <button type="button" onClick={nextStep} className="bg-black text-white px-4 py-2 bg-amber-800 rounded-md cursor-pointer">Next</button>
                        )}
                        {step === 4 && (
                            <button type="submit" className="bg-black text-white px-4 py-2 rounded-md cursor-pointer">Submit</button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewUserForm;
