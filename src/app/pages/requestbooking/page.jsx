"use client";  

{/*import MainLayout from "@/components/layouts/MainLayout";
import React, { useState} from "react";
import Image from "next/image";
import icon1 from "../../../../public/icon1.png";
import icon2 from "../../../../public/icon2.png";
import { useRouter } from 'next/navigation';


const SignIn = () => {
   
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (e) => {
      e.preventDefault();

      if (email === 'admin@vinrich.com' && password === 'admin123') 
      {
        router.push('/pages/dashboard');
      } else 
      {
        router.push('/request-booking');
      }
    };
  
  return (
    <MainLayout>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br p-4">
        <div className="backdrop-blur-md bg-white/70 p-10 rounded-2xl shadow-2xl w-full max-w-md">
          <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8 drop-shadow-sm">
            Welcome Back
          </h1>
          <p className="text-center text-gray-600 mb-6">Sign in to your account</p>

          <form className="space-y-6">
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                placeholder="enter your email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-blue-200 focus:border-blue-400 transition outline-none"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            
            <div>
              <label className="block text-gray-700 font-medium mb-2">Password</label>
              <input
                type="password"
                placeholder="enter your password"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-blue-200 focus:border-blue-400 transition outline-none"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="accent-blue-600 rounded" />
                Remember me
              </label>
              <a href="#" className="text-blue-600 hover:underline font-medium">
                Forgot Password?
              </a>
            </div>

            
            <button onClick = {handleSignIn}
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 rounded-lg transition transform hover:scale-105 duration-300 shadow-md"
            >
              Sign In
            </button>

            
            <div className="flex items-center my-6">
              <div className="flex-grow h-px bg-gray-300" />
              <span className="mx-4 text-gray-400">OR</span>
              <div className="flex-grow h-px bg-gray-300" />
            </div>

            
            <div className="flex flex-col gap-4">
              <button className="flex items-center justify-center gap-3 w-full border focus:ring-4 focus:ring-blue-200 focus:border-blue-400 border-gray-300 p-3 rounded-lg hover:bg-gray-100 transition">
                <Image src={icon2} alt="icon2" className="h-8 w-8" />
                Sign in with Google
              </button>
              <button className="flex items-center justify-center gap-3 w-full border focus:ring-4 focus:ring-blue-200 focus:border-blue-400 border-gray-300 p-3 rounded-lg hover:bg-gray-100 transition">
                <Image src={icon1} alt="icon1" className="h-8 w-8" />
                Sign in with Facebook
              </button>
            </div>

          </form>
        </div>
      </div>
      </MainLayout>
  );
};
export default SignIn;*/}

{/*import MainLayout from "@/components/Layouts/MainLayout";
import React, { useState } from "react";
import Image from "next/image";
import bookingform7 from "../../../../public/bookingform7.jpg";
import axios from "axios";

const RequestBooking = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    phone: "",
    email: "",
    checkInDate: "",
    checkOutDate: "",
    numberOfAdults: 1,
    numberOfChildren: 1,
    roomPreference: "",
  });

  const [billingData, setBillingData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePersonalSubmit = async (e) => {
    e.preventDefault();
    setStep(3);
  };

  const handleRoomSelect = (room) => {
    setFormData((prev) => ({ ...prev, roomPreference: room }));
    setStep(2);
  };

  const resetBooking = () => {
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        phone: "",
        email: "",
        checkInDate: "",
        checkOutDate: "",
        numberOfAdults: 1,
        numberOfChildren: 1,
        roomPreference: "",
      });
      setBillingData({
        fullName: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        cardNumber: "",
      });
      setStep(1);
      setShowSuccess(false);
    }, 5000);
  };

  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    const finalData = { ...formData, billing: billingData };
    try {
      const response = await axios.post(
        "http://localhost:5000/api/booking",
        finalData
      );
      console.log("Booking complete:", response.data);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      resetBooking();
    } catch (error) {
      console.error("Error completing booking:", error);
    }
  };

  const roomOptions = [
    {
      name: "Deluxe Room",
      description:
        "A premium experience with ocean view, private balcony, and full services. Ideal for honeymooners or VIP stays.",
      features: [
        "King-size bed",
        "Private Jacuzzi & Bar",
        "Smart TV, Wi-Fi, Butler service",
      ],
      price: "LKR 65,000 / night",
    },
    {
      name: "Premium Room",
      description:
        "Spacious and stylish, perfect for families or business travelers. Comes with work desk and mini bar.",
      features: [
        "Queen-size bed",
        "Mini-fridge & Workspace",
        "Complimentary breakfast",
      ],
      price: "LKR 45,000 / night",
    },
    {
      name: "Normal Room (A/C)",
      description:
        "Comfortable and affordable with air-conditioning. Great for short stays or small families.",
      features: ["Double bed", "Air Conditioning", "TV & Wi-Fi"],
      price: "LKR 30,000 / night",
    },
    {
      name: "Non A/C Room",
      description:
        "Budget-friendly and clean. Perfect for travelers looking for simplicity and value.",
      features: ["Ceiling fan", "Basic furnishings", "Free bottled water"],
      price: "LKR 18,000 / night",
    },
  ];

  return (
    <MainLayout>
      <div className="bg-green-200 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden mb-10">
        <div className="relative h-64">
          <Image
            src={bookingform7}
            alt="bookingform7"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-5xl font-bold drop-shadow-lg">
              Request Booking
            </h1>
          </div>
        </div>

        <div className="p-6 flex justify-center gap-6 text-lg">
          <button
            className={`px-5 py-2 rounded-full transition-all duration-300 ${
              step === 1 ? "bg-blue-600 text-white shadow-md" : "bg-gray-200 hover:bg-gray-300"
            }`}
            disabled={!formData.firstName}
          >
            Room Selection
          </button>
          <button
            className={`px-5 py-2 rounded-full transition-all duration-300 ${
              step === 2 ? "bg-blue-600 text-white shadow-md" : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => setStep(1)}
          >
            Personal Info
          </button>
          <button
            className={`px-5 py-2 rounded-full transition-all duration-300 ${
              step === 3 ? "bg-blue-600 text-white shadow-md" : "bg-gray-200 hover:bg-gray-300"
            }`}
            disabled={!formData.roomPreference}
          >
            Payment
          </button>
        </div>

        {step === 1 && (
          <div className="p-8 space-y-8">
            <h2 className="text-3xl font-semibold text-center text-black">
              Choose Room Preference
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {roomOptions.map((room, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between p-6">
                  <div>
                    <h3 className="text-2xl font-bold">{room.name}</h3>
                    <p className="text-gray-700 mt-2 text-sm">{room.description}</p>
                    <ul className="mt-4 text-sm list-disc list-inside text-gray-800 space-y-1">
                      {room.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                    <div className="mt-4 font-bold text-blue-700 text-lg">
                      {room.price}
                    </div>
                  </div>
                  <button
                    className="mt-6 w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded-lg transition-all duration-300"
                    onClick={() => handleRoomSelect(room.name)}
                  >
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={handlePersonalSubmit} className="p-8 space-y-8">
            <h2 className="text-3xl font-semibold text-center text-black mb-8">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {[
                { label: "First Name", name: "firstName", required: true },
                { label: "Last Name", name: "lastName", required: true },
                { label: "Address 1", name: "address1", required: true },
                { label: "Address 2", name: "address2" },
                { label: "City", name: "city", required: true },
                { label: "State", name: "state", required: true },
                { label: "Phone", name: "phone", required: true },
                { label: "Email Address", name: "email", required: true },
              ].map(({ label, name, required }) => (
                <div key={name}>
                  <label className="block text-gray-700 font-semibold mb-2">{label}{required && <span className="text-red-500">*</span>}</label>
                  <input
                    type={name.includes("email") ? "email" : "text"}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    required={required}
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                </div>
              ))}
              
              {[
                { label: "Checkin Date", name: "checkInDate" },
                { label: "Checkout Date", name: "checkOutDate" },
              ].map(({ label, name }) => (
                <div key={name}>
                  <label className="block text-gray-700 font-semibold mb-2">{label}<span className="text-red-500">*</span></label>
                  <input
                    type="date"
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                </div>
              ))}
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Number of Adults<span className="text-red-500">*</span></label>
                <select
                  name="numberOfAdults"
                  value={formData.numberOfAdults}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                >
                  {[1,2,3,4].map((num) => <option key={num}>{num}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Number of Children<span className="text-red-500">*</span></label>
                <select
                  name="numberOfChildren"
                  value={formData.numberOfChildren}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                >
                  {[0,1,2,3,4].map((num) => <option key={num}>{num}</option>)}
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition-all duration-300 text-lg"
            >
              Next: Payment Details
            </button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleFinalSubmit} className="p-8 space-y-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Billing & Payment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { label: "Full Name", name: "fullName" },
                { label: "Email Address", name: "email" },
                { label: "Billing Address", name: "address" },
                { label: "City", name: "city" },
                { label: "State/Province", name: "state" },
                { label: "Zip/Postal Code", name: "zip" },
                { label: "Card Number", name: "cardNumber", wide: true },
              ].map(({ label, name, wide }) => (
                <div key={name} className={wide ? "md:col-span-2" : ""}>
                  <label className="block mb-2 text-gray-700 font-semibold">{label}<span className="text-red-500">*</span></label>
                  <input
                    type={name === "cardNumber" ? "text" : "text"}
                    name={name}
                    value={billingData[name]}
                    onChange={handleBillingChange}
                    required
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                </div>
              ))}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition-all duration-300 text-lg"
            >
              Complete Payment
            </button>
          </form>
        )}
        {showSuccess && (
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg animate-bounce z-50">
            Booking successful!!!
          </div>
        )}
      </div>
      </div>
    </MainLayout>
  );
};

export default RequestBooking;*/}

// File: /app/request-booking/page.jsx (for App Router) or /pages/request-booking.js (for Pages Router)


import MainLayout from "@/components/layouts/MainLayout";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // or "next/router" for Pages Router
import Image from "next/image";
import icon1 from "../../../../public/icon1.png";
import icon2 from "../../../../public/icon2.png";
import bookingform7 from "../../../../public/bookingform7.jpg";
import axios from "axios";

const RequestBookingPage = () => {
  const router = useRouter();

  const [signedIn, setSignedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    phone: "",
    email: "",
    checkInDate: "",
    checkOutDate: "",
    numberOfAdults: 1,
    numberOfChildren: 1,
    roomPreference: "",
  });

  const [billingData, setBillingData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();

    if (email === 'admin@vinrich.com' && password === 'admin123') {
      router.push('/pages/dashboard');
    } else {
      setSignedIn(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePersonalSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const handleRoomSelect = (room) => {
    setFormData((prev) => ({ ...prev, roomPreference: room }));
    setStep(2);
  };

  const resetBooking = () => {
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        phone: "",
        email: "",
        checkInDate: "",
        checkOutDate: "",
        numberOfAdults: 1,
        numberOfChildren: 1,
        roomPreference: "",
      });
      setBillingData({
        fullName: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        cardNumber: "",
      });
      setStep(1);
      setShowSuccess(false);
    }, 5000);
  };

  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    const finalData = { ...formData, billing: billingData };
    try {
      const response = await axios.post("http://localhost:5000/api/booking", finalData);
      console.log("Booking complete:", response.data);
      setShowSuccess(true);
      resetBooking();
    } catch (error) {
      console.error("Error completing booking:", error);
    }
  };

  const roomOptions = [
    {
      name: "Deluxe Room",
      description: "A premium experience with ocean view, private balcony, and full services. Ideal for honeymooners or VIP stays.",
      features: ["King-size bed", "Private Jacuzzi & Bar", "Smart TV, Wi-Fi, Butler service"],
      price: "LKR 65,000 / night",
    },
    {
      name: "Premium Room",
      description: "Spacious and stylish, perfect for families or business travelers. Comes with work desk and mini bar.",
      features: ["Queen-size bed", "Mini-fridge & Workspace", "Complimentary breakfast"],
      price: "LKR 45,000 / night",
    },
    {
      name: "Normal Room (A/C)",
      description: "Comfortable and affordable with air-conditioning. Great for short stays or small families.",
      features: ["Double bed", "Air Conditioning", "TV & Wi-Fi"],
      price: "LKR 30,000 / night",
    },
    {
      name: "Non A/C Room",
      description: "Budget-friendly and clean. Perfect for travelers looking for simplicity and value.",
      features: ["Ceiling fan", "Basic furnishings", "Free bottled water"],
      price: "LKR 18,000 / night",
    },
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-green-100 py-10 px-4">
        {!signedIn ? (
          <div className="max-w-md mx-auto bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-xl">
            <h1 className="text-4xl font-bold text-center text-blue-700 mb-4">Welcome Back</h1>
            <p className="text-center text-gray-600 mb-6">Sign in to your account</p>
            <form className="space-y-5" onSubmit={handleSignIn}>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-blue-200 focus:border-blue-400 outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-blue-200 focus:border-blue-400 outline-none"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition"
              >
                Sign In
              </button>
            </form>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
            <div className="relative h-64">
              <Image src={bookingform7} alt="banner" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h1 className="text-white text-5xl font-bold">Request Booking</h1>
              </div>
            </div>

            {/* Steps Navigation */}
            <div className="p-6 flex justify-center gap-6 text-lg">
              {["Room Selection", "Personal Info", "Payment"].map((label, index) => (
                <button
                  key={label}
                  className={`px-5 py-2 rounded-full transition-all duration-300 ${
                    step === index + 1
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Step 1: Room Selection */}
            {step === 1 && (
              <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {roomOptions.map((room, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow hover:shadow-xl">
                    <h2 className="text-xl font-bold mb-2">{room.name}</h2>
                    <p className="text-sm text-gray-600">{room.description}</p>
                    <ul className="list-disc list-inside text-sm mt-2 text-gray-800">
                      {room.features.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                    <div className="mt-3 font-semibold text-blue-700">{room.price}</div>
                    <button
                      className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg"
                      onClick={() => handleRoomSelect(room.name)}
                    >
                      Book Now
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Step 2: Personal Info */}
            {step === 2 && (
              <form onSubmit={handlePersonalSubmit} className="p-8 space-y-6">
                <h2 className="text-2xl font-semibold text-center">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    ["First Name", "firstName"],
                    ["Last Name", "lastName"],
                    ["Address 1", "address1"],
                    ["Address 2", "address2"],
                    ["City", "city"],
                    ["State", "state"],
                    ["Phone", "phone"],
                    ["Email", "email"],
                  ].map(([label, name]) => (
                    <div key={name}>
                      <label className="block font-medium mb-1">{label}</label>
                      <input
                        type="text"
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        required
                        className="w-full border px-4 py-2 rounded-lg"
                      />
                    </div>
                  ))}
                  {["checkInDate", "checkOutDate"].map((name) => (
                    <div key={name}>
                      <label className="block font-medium mb-1">
                        {name === "checkInDate" ? "Check-in Date" : "Check-out Date"}
                      </label>
                      <input
                        type="date"
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        required
                        className="w-full border px-4 py-2 rounded-lg"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block font-medium mb-1">Number of Adults</label>
                    <select
                      name="numberOfAdults"
                      value={formData.numberOfAdults}
                      onChange={handleChange}
                      className="w-full border px-4 py-2 rounded-lg"
                    >
                      {[1, 2, 3, 4].map((n) => <option key={n}>{n}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block font-medium mb-1">Number of Children</label>
                    <select
                      name="numberOfChildren"
                      value={formData.numberOfChildren}
                      onChange={handleChange}
                      className="w-full border px-4 py-2 rounded-lg"
                    >
                      {[0, 1, 2, 3, 4].map((n) => <option key={n}>{n}</option>)}
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
                >
                  Next: Payment Details
                </button>
              </form>
            )}

            {/* Step 3: Payment */}
            {step === 3 && (
              <form onSubmit={handleFinalSubmit} className="p-8 space-y-6">
                <h2 className="text-2xl font-bold text-center">Billing & Payment</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    ["Full Name", "fullName"],
                    ["Email", "email"],
                    ["Billing Address", "address"],
                    ["City", "city"],
                    ["State", "state"],
                    ["Zip Code", "zip"],
                    ["Card Number", "cardNumber"],
                  ].map(([label, name]) => (
                    <div key={name}>
                      <label className="block font-medium mb-1">{label}</label>
                      <input
                        type="text"
                        name={name}
                        value={billingData[name]}
                        onChange={handleBillingChange}
                        required
                        className="w-full border px-4 py-2 rounded-lg"
                      />
                    </div>
                  ))}
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
                >
                  Complete Payment
                </button>
              </form>
            )}

            {showSuccess && (
              <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg animate-bounce z-50">
                Booking successful!
              </div>
            )}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default RequestBookingPage;
