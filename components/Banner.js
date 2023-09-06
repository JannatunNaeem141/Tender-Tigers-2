import Head from 'next/head';
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { PiWarning } from 'react-icons/pi';
import { MdOutlineRadioButtonUnchecked } from 'react-icons/md';


export default function Banner() {
    const [mintQuantity, setMintQuantity] = useState(1);

    const handleQuantityIncrease = () => {
        if (mintQuantity < 5) {
            setMintQuantity((prevValue) => prevValue + 1)
        } else {
            return
        }
    }

    const handleQuantityDecrease = () => {
        if (mintQuantity > 1) {
            setMintQuantity((prevValue) => prevValue - 1)
        } else {
            return
        }
    }
    return (
        <div className='banner-bg-img bg-center bg-no-repeat bg-cover'>
            <div className='max-w-7xl lg:mx-auto md:mx-8 mx-5 lg:px-8 maxWidthofBanner'>
                <div className='md:flex grid grid-cols-1 items-center justify-center lg:gap-12 md:gap-8 gap-12 lg:min-h-screen md:min-h-[80vh] min-h-screen md:py-32 py-28'>
                    <div className='md:w-[420px] w-full'>
                        <div className='left-card-img bg-cover bg-no-repeat bg-center h-72 rounded-t-2xl'></div>
                        <div className='card-inner-bg-css p-8 flex flex-col gap-4 border border-[#601FEB]'>
                            <div className='flex items-center w-full'>
                                <div className='flex items-center justify-between w-1/2'>
                                    <p className='text-[#DBDFF0] text-base font-medium'>Remaining</p>
                                    <AiOutlineMinus className='text-[#F6BE2C] text-lg' />
                                </div>
                                <p className='text-[#DBDFF0] text-base w-1/2 text-right'>0/3000</p>
                            </div>
                            <div className='flex items-center w-full'>
                                <div className='flex items-center justify-between w-1/2'>
                                    <p className='text-[#DBDFF0] text-base font-medium'>Price</p>
                                    <AiOutlineMinus className='text-[#F6BE2C] text-lg' />
                                </div>
                                <p className='text-[#DBDFF0] text-base w-1/2 text-right'>0.75 MATIC</p>
                            </div>
                            <div className='flex items-center w-full'>
                                <div className='flex items-center justify-between w-1/2'>
                                    <p className='text-[#DBDFF0] text-base font-medium'>Cost</p>
                                    <AiOutlineMinus className='text-[#F6BE2C] text-lg' />
                                </div>
                                <p className='text-[#DBDFF0] text-base w-1/2 text-right'>{mintQuantity * 0.75} MATIC</p>
                            </div>
                        </div>
                        <div className='rounded-b-2xl flex items-center justify-between overflow-hidden card-inner-bg-css2 border-b border-b-[#601FEB]'>
                            <button onClick={handleQuantityDecrease} className={`bg-[#5C1FDF] hover:bg-[#3907a6] duration-500 px-8 py-3 ${mintQuantity <= 1 ? "opacity-40" : "opacity-100"}`}><AiOutlineMinus className='text-[#DBDFF0] text-2xl' /></button>
                            <input onKeyDown={(evt) => ["e", "E", "+", "-", "/"].includes(evt.key) && evt.preventDefault()}
                                autoFocus
                                onChange={(e) => {
                                    if (parseInt(e.target.value) > 5) {
                                        e.target.value = `${5}`;
                                    } else if (parseInt(e.target.value) < 1) {
                                        e.target.value = "1";
                                    } else {
                                        setMintQuantity(parseInt(e.target.value));
                                    }
                                }}
                                type="number" name="" id=""
                                defaultValue={mintQuantity}
                                key={mintQuantity}
                                className="bg-transparent outline-none text-center text-white text-xl numInput"
                            />
                            <button onClick={handleQuantityIncrease} className={`bg-[#5C1FDF] hover:bg-[#3907a6] duration-500 px-8 py-3  ${mintQuantity === 5 ? "opacity-40" : "opacity-100"}`}><AiOutlinePlus className='text-[#DBDFF0] text-2xl' /></button>
                        </div>
                    </div>
                    <div className='md:w-[420px] w-full'>
                        <div className='flex flex-col'>
                            <div className='flex items-center border border-[#601FEB] w-full right-card-top-bg'>
                                <div className='flex items-center justify-between p-3 border-r border-r-[#601FEB] w-1/2'>
                                    <p className='text-[#DBDFF0] text-base font-medium'>Whitelist</p>
                                    <AiOutlineMinus className='text-[#F6BE2C] text-lg' />
                                    <p className='text-[#DBDFF0] text-base'>0/150</p>
                                </div>
                                <div className='flex items-center justify-between p-3 w-1/2'>
                                    <p className='text-[#DBDFF0] text-base font-medium'>Presale</p>
                                    <AiOutlineMinus className='text-[#F6BE2C] text-lg' />
                                    <p className='text-[#DBDFF0] text-base'>0/50</p>
                                </div>
                            </div>
                            <h1 className='text-white md:text-4xl text-2xl uppercase font-bold lg:my-8 my-5'>Public mint <span className='text-[#1BF1B1]'>live</span></h1>
                            <p className='text-[#939FD3] text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati unde at odit laudantium.</p>
                            <h3 className='text-xl uppercase font-semibold text-[#FDBE44] lg:mt-8 mt-5 lg:mb-5 mb-3'>Public mint end in</h3>
                            <div className='flex'>
                                <div className='text-xl px-3 py-2 text-[#FF434E] border border-[#FF455042] flex items-center gap-3 warningTextBg'><PiWarning />This auction has ended</div>
                            </div>
                            <ul className='lg:my-8 my-5'>
                                <li className='text-[#DBDFF0] uppercase text-base flex items-center gap-3'><MdOutlineRadioButtonUnchecked className="text-[#FECF1E]" />Max 5 nfts per wallet</li>
                                <li className='text-[#DBDFF0] uppercase text-base flex items-center gap-3'><MdOutlineRadioButtonUnchecked className="text-[#FECF1E]" />Price 0.75 Matic + Gas</li>
                            </ul>
                            <button className='uppercase text-white font-semibold w-full rounded-full bg-[#5C1FDF] border border-[#5C1FDF] hover:border-[#3907a6] 
                            hover:bg-[#3907a6] duration-500 py-3'>Mint now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
