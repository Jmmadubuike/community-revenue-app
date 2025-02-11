import { useState } from "react";
import Logo from "../../../components/common/logo"
import {callApi} from "../../../api"
import toast from "react-hot-toast";
const NewUserForm = () => {
    const [formData, setFormData] = useState({
        email: null,
        first_name: null,
        last_name: null,
        date_of_birth: null,
        country_of_residence: null,
        quarter: null,
        age_grade: null,
        kindred: null,
        password: null,
    });

    const [step, setStep] = useState(1); // Track current step

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => {
        if (step < 2) {
            if (!formData.email || !formData.first_name || !formData.last_name || !formData.date_of_birth){
                toast.error("Fill all fields")
                return 
            }
            setStep(step + 1)
        };
    };

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1)
        };
    };

    const handleSubmit = (e) => {

        e.preventDefault();
        if (!formData.country_of_residence || !formData.quarter || !formData.age_grade || !formData.kindred){
            toast.error(
                "Fill in al fields !"
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
                setStep(3)
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
        <div className="bg-gray-100 flex justify-center items-center min-h-screen">
            <div className="p-6 rounded-lg  w-full max-w-sm text-center">
                <Logo />
                <h2 className="text-xl font-semibold mb-4 text-center">Create Account</h2>
                <form onSubmit={handleSubmit} className="space-y-8 text-left min-h-[70vh]">
                    
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
                                    <option value="Q1">Q1</option>
                                    <option value="Q2">Q2</option>
                                    <option value="Q3">Q3</option>
                                    <option value="Q4">Q4</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Age Grade</label>
                                <select name="age_grade" value={formData.age_grade} onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
                                    required >
                                    <option value="" disabled>Select an age grade</option>
                                    <option value="Child">Child</option>
                                    <option value="Teen">Teen</option>
                                    <option value="Adult">Adult</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Kindred</label>
                                <select name="kindred" value={formData.kindred} onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
                                    required >
                                    <option value="" disabled>Select kindred</option>
                                    <option value="North">North</option>
                                    <option value="South">South</option>
                                    <option value="East">East</option>
                                    <option value="West">West</option>
                                </select>
                            </div>
                        </>
                    )}

                    {/* Step 4 */}
                    {step === 3 && (
                        <>
                            <div className="space-y-5 text-center">
                               <h1>Welcome to Ogigi revenue collection app</h1>
                               <p>You will receive email shortly with your login details !</p>
                            </div>

                            
                        </>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-4 static bottom-0 my-4">
                        {(step > 1 && step <= 2)  && (
                            <button type="button" onClick={prevStep}
                                className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition">
                                Previous
                            </button>
                        )}

                        {(step < 2) && (
                            <button type="button" onClick={nextStep}
                                className="bg-[#7A7D47] text-white px-4 py-2 rounded-md hover:bg-[#989b4f] transition">
                                Next
                            </button>
                        )}

                        {(step === 2) && (
                            <button type="submit" onClick={handleSubmit}
                                className="bg-[#7A7D47] text-white px-4 py-2 rounded-md hover:bg-[#989b4f] transition">
                                Submit
                            </button>
                        )}




                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewUserForm;
