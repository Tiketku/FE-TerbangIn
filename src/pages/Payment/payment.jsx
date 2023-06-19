import React from "react";
import Accordion from "./accordion";
import image from './images/Image.svg';
import Navbar from "./navbar";



function Payment (){
    return(
        <>
            <div>
                <Navbar/>
            </div>
            <div className="flex flex-row">s
                <div>
                    <h1 className="text-1xl ml-[308px] font-bold mb-4">Isi Data Pembayaran</h1>
                    <Accordion/>
                </div>
                <div>
                    <div className="ml-11">
                        <div>
                            <h1 className="text-lg font-bold">Booking Code:</h1>
                            <h1 className="text-purple-600 text-lg">6723y2GHK</h1>
                        </div>
                        <div className="flex flex-row">
                            <div>
                                <h2 className="font-bold text-base '">07:00</h2>
                                <p className="text-sm -mt-2">3 Maret 2023</p>
                            </div>
                            <div className="ml-38">
                                <h1 className="text-purple1 text-xs">Keberangkatan</h1>
                            </div>
                        </div>
                        <h1 className="text-sm -mt-3">Soekarno Hatta - Terminal 1A Domestik</h1>
                        <div className="border-b bg-light-gray border w-82"></div>
                    </div>
                    <div className="ml-7">
                        <div className="flex flex-row">
                            <img src={image} alt="" />
                            <div className="ml-2">
                                <h1 className="text-sm font-bold">Jet Air - Economy</h1>
                                <h1 className="text-1sm font-bold -mt-2">JT - 203</h1>
                                <p className="font-bold text-1sm">Informasi:</p>
                                <p className="-mt-4 text-1sm">Baggage 20 kg</p>
                                <p className="text-1sm -mt-4">Cabin baggage 7 kg</p>
                                <p className="text-1sm -mt-4">In Flight Entertainment</p>
                            </div>
                        </div>
                        <div className="border-b bg-light-gray border w-82"></div>
                    </div>
                    <div >
                        <div className="mt-3 ml-7">
                            <div className="flex flex-row">
                                <div>
                                    <h2 className="font-bold text-base '">11:00</h2>
                                    <p className="text-sm -mt-2">3 Maret 2023</p>
                                </div>
                                <div className="ml-38">
                                    <h1 className="text-purple1 text-xs">Kedatangan</h1>
                                </div>
                            </div>
                            <h1 className="text-sm -mt-3">Melbourne International Airportk</h1>
                            <div className="border-b bg-light-gray border w-82"></div>
                        </div>
                    </div>
                    <div className="ml-7">
                        <h1 className="text-sm font-bold">Rincian Harga</h1>
                        <div>
                            <div className="flex flex-row">
                                <h1 className="text-sm w-56">2 Adults</h1>
                                <h1 className="text-sm ml-2">IDR 9.550.000</h1>
                            </div>
                            <div className="flex flex-row">
                                <h1 className="text-sm w-70">1 Baby</h1>
                                <h1 className="text-sm">IDR 0</h1>
                            </div>
                            <div className="flex flex-row">
                                <h1 className="text-sm w-60">Tax</h1>
                                <h1 className="text-sm ml-1">IDR 300.000</h1>
                            </div>
                        </div>
                        <div className="border-b bg-light-gray border w-82"></div>
                    </div>
                    <div className="ml-7 flex flex-row">
                        <h1 className="font-bold text-base w-48">Total</h1>
                        <h1 className="text-purple-900 font-bold  ml-2.5 text-lg">IDR 9.850.000</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Payment;