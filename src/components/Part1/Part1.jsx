import image5 from '../../assets/5.webp'
import { IoArrowDownCircleOutline } from "react-icons/io5";

const Part1 = () => {
    return (
        <>
            <div className="h-screen md:flex  md:justify-center md:items-center space-y-5 space-x-5 md:mt-0 mt-[10vh] ">
                <div className='text-yellow-500 space-y-2 md:w-[30%] p-5 md:p-0'>
                    <hr className='border-yellow-500 border-2' />
                    <p className='text-3xl font-bold text-white'>Buy MoonBoxes</p>
                    <p className='text-3xl font-bold text-yellow-500'>and expand your</p>
                    <p className='text-3xl font-bold text-yellow-500'>nft collection</p>

                    <hr className='border-yellow-500 border-1' />
                    <p>Buying Moonboxes is a unique way to aquire nfts and build your connection
                        It is built on the binance smart chain , MoonRiver, Polygon , Ethereum and
                        Dogechain.Onnly awailable on <span className='text-white'>Moonboex.io</span></p>
                    <div className='flex space-x-5 mt-[40px]'>
                        <span className='btn bg-yellow-500 rounded-full text-black'>Buy me a moon box</span>
                        <span className='text-5xl'>
                            <IoArrowDownCircleOutline />
                        </span>
                    </div>
                </div>
                <div className=''>
                    <img src={image5} alt="Imagefive" className='md:h-[43vh] h-[38vh]' />
                </div>
            </div>
        </>
    )
}

export default Part1
