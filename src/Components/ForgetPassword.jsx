import React from 'react'
import { useState } from 'react';

function ForgetPassword() {
    const [email, setEmail] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    const handleSubmit = (e) => {
    e.preventDefault();
    // تحقق من صحة البريد الإلكتروني
    if (email) {
      setShowMessage(true); // عرض الرسالة بنجاح
    }
};
return (
    
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="relative max-w-xs w-full">
            {/* نص فوق المدخل */}
            <p className="text-center text-lg text-gray-700 mb-4">
                Enter your email to send a new password
            </p>
    
            <form onSubmit={handleSubmit} className="flex items-center gap-x-3 md:justify-end">
                <div className="relative">
                <svg
                    className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
                </svg>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-3 py-2 text-gray-500 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
                </div>
            <button
                type="submit"
                className="block w-auto py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow"
            >
                Submit
            </button>
            </form>
    
            {/* رسالة النجاح */}
            {showMessage && (
                <div className="mt-6 mx-4 px-4 rounded-md border-l-4 border-green-500 bg-green-50 md:max-w-2xl md:mx-auto md:px-8">
                <div className="flex justify-between py-3">
                    <div className="flex">
                    <div>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 rounded-full text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                        />
                        </svg>
                    </div>
                    <div className="self-center ml-3">
                        <span className="text-green-600 font-semibold">Success</span>
                        <p className="text-green-600 mt-1">
                        A link to reset your password has been sent to your email.
                        </p>
                    </div>
                    </div>
                <button className="self-start text-green-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                    <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                    </svg>
                </button>
                </div>
                </div>
            )}
        </div>
    </div>
)
}

export default ForgetPassword
