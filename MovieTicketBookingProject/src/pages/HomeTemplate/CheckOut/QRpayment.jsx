import React, { memo } from 'react'

const QRpayment = ({ onClose, propTotalPayment }) => {
    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
            <div
                className="
            w-[95%] sm:w-[75%] md:w-[65%] lg:w-[45%] xl:w-[40%]
            py-6 px-[1%] rounded-2xl shadow-3xl flex flex-col gap-4 text-white relative
        "
                style={{ background: "linear-gradient(135deg, #B42C7F, #A40062)" }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center 
            bg-black hover:bg-black/60 text-white rounded-full transition-all duration-300 cursor-pointer"
                >
                    <i className="fa-solid fa-xmark text-xl"></i>
                </button>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-bold text-center">
                    Payment via QR Code
                </h2>

                {/* QR Content Box */}
                <div className="bg-white text-black w-full rounded-2xl flex flex-col items-center gap-4 p-[1%]">

                    {/* Subtitle */}
                    <p className="text-center text-sm bg-cyan-200 py-2 sm:py-4 px-2 rounded-t-2xl w-full">
                        Scan the QR code below to complete your payment securely.
                    </p>

                    {/* QR Image */}
                    <div className="w-40 h-40 sm:w-56 sm:h-56 bg-gray-200 rounded-lg overflow-hidden">
                        <img
                            src="/img/QR payment.png"
                            alt="QR Code"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Auto-close note */}
                    <p className="text-center text-xs sm:text-sm text-gray-700 mt-1 px-2">
                        <span className='text-[#A40062] font-bold'>This window will close automatically</span> once your payment is detected.
                    </p>

                    {/* Amount */}
                    <p className="font-semibold text-lg sm:text-xl text-center">
                        Amount: <span className="text-green-600">{propTotalPayment.toLocaleString()} VND</span>
                    </p>

                    {/* Promo */}
                    <p className="text-center text-sm bg-blue-200 text-blue-700 font-semibold py-2 sm:py-4 px-2 rounded-2xl w-full">
                        Enjoy more rewards when you scan the QR or enter a promo code.
                    </p>
                </div>

                {/* Extra Instructions */}
                <div className="bg-white text-black w-full rounded-2xl py-3 px-3">
                    <p className="text-xs sm:text-sm text-gray-700 text-center">
                        Use any QR-supported payment app to scan and confirm your transaction.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default memo(QRpayment)
