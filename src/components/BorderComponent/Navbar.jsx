import { IoArrowBackCircleOutline } from "react-icons/io5";
import { GiDroplets } from "react-icons/gi";
import { FaWallet } from "react-icons/fa";
import { GoHistory } from "react-icons/go";
import { GrCircleInformation } from "react-icons/gr";
import { LuWallet } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
const Navbar = () => {

    const [close, setClose] = useState(false)
    const [droplet, setDroplet] = useState(false)
    const [wallet, setWallet] = useState(false)
    const [history, setHistory] = useState(false)
    const [info, setInfo] = useState(false)
    const [wallet2, setWallet2] = useState(false)

    return (
        <>
            <div className="absolute md:mt-[3vh] top-[8vh] flex space-x-5">
                {/* //1 */}
                <div >
                    <div className="text-3xl text-black" onClick={() => setClose(!close)} >
                        <IoArrowBackCircleOutline />
                    </div>
                    {close &&
                        <div className="absolute flex rounded  border-2 mt-2 bg-black z-10 ">
                            <span className="text-3xl pt-2 text-white"><IoMdClose /></span>
                            <span className="text-white p-2">Back</span>
                        </div>}
                </div>
                {/* //2 */}
                <div >
                    <div className="text-3xl  text-black" onClick={() => setDroplet(!droplet)} >
                        <GiDroplets />
                    </div>
                    {
                        droplet && <div className="absolute flex rounded mt-2 border-2 bg-black z-10 " >
                            <span className="text-3xl pt-2 text-white"><IoMdClose /></span>
                            <span className="text-white p-2">Recent,live and NFT drops</span>
                        </div>
                    }
                </div>
                {/* //3 */}
                <div >
                    <div className="text-3xl  text-black" onClick={() => setWallet(!wallet)} >
                        <FaWallet />
                    </div>
                    {wallet && <div className="absolute flex rounded mt-2 border-2 bg-black z-10 ">
                        <span className="text-3xl pt-2 text-white"><IoMdClose /></span>
                        <span className="text-white p-2">this is your wallet inventry.An overview
                            of all NFTs you received out of the MoonBoxes</span>
                    </div>

                    }
                </div>
                {/* //4 */}
                <div >
                    <div className="text-3xl  text-black" onClick={() => setHistory(!history)} >
                        <GoHistory />
                    </div>
                    {history && <div className="absolute flex rounded mt-2  border-2 bg-black z-10 ">
                        <span className="text-3xl pt-2 text-white"><IoMdClose /></span>
                        <span className="text-white p-2">
                            This is your history.An overview of your Moonbox NFT claims.
                        </span>
                    </div>}
                </div>
                {/* //5 */}
                <div >
                    <div className="text-3xl  text-black" onClick={() => setInfo(!info)} >
                        <GrCircleInformation />
                    </div>
                    {info && <div className="absolute flex rounded mt-2  border-2 bg-black z-10 ">
                        <span className="text-3xl pt-2 text-white"><IoMdClose /></span>
                        <span className="text-white p-2">
                            Information about the NFTs
                        </span>
                    </div>}
                </div>
                {/* //6 */}
                <div >
                    <div className="text-3xl  text-black" onClick={() => setWallet2(!wallet2)}>
                        <LuWallet />
                    </div>
                    {
                        wallet2 &&
                        <div className="absolute flex rounded border-2 mt-2  bg-black z-10 ">
                            <span className="text-3xl pt-2 text-white"><IoMdClose /></span>
                            <span className="text-white p-2">Your NFTs wallet</span>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar
