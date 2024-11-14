import Part1 from "../Part1/Part1";
import "./BorderComponent.css";
import { LuWallet } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import Part2 from "../Part2/Part2";
import Part3 from "../Part3/Part3";
import Navbar from "./Navbar";

const BorderComponent = () => {
    return (
        <div className="md:h-screen h-[100vh] bg-yellow-500">
            <div className=" Tier bg-black  text-yellow-500 pl-[10vh] absolute left-[30vw] border-2 p-2 w-[200px] bottom-[10vh]  z-10 ">
                <span>Tier</span>
            </div>
            <div className="Balance absolute left-[45vw]   text-black  w-[200px] bottom-[12vh]  z-10 ">
                <span>Moonshot Balance</span>
            </div>
            <div className="Total bg-black  text-yellow-500 pl-[10vh] absolute right-[32vw] border-2 p-2 w-[200px] bottom-[10vh]  z-10 ">
                <span>Total NFTs</span>
            </div>
            <div className="main-container md:flex md:flex-row flex flex-col w-full h-full overflow-hidden">

                <div className="container-1 relative  bg-yellow-500 flex justify-center items-center">
                    <div className="absolute top-0 left-0">
                        <h1 className="text-2xl md:pl-10 pl-4 pt-5 font-bold">
                            <span className="text-white font-bold">MOON</span>BOXES
                        </h1>
                    </div>
                    <Navbar />
                    <div className="absolute top-0 right-[2vw] pt-5">
                        <span className="text-4xl  ">
                            <IoMdClose />
                        </span>
                    </div>

                    <div className="container-2 bg-black w-[95%] h-[80vh] md:mt-0 mt-[5vh]  overflow-y-auto">
                        <Part1 />
                        <Part2 />
                        <Part3 />
                    </div>
                </div>
                <div className="bg-yellow-500 border-l-2 border-l-black p-4">
                    <div className="mb-4 text-4xl">
                        <LuWallet />
                    </div>
                    <div className="vertical-text md:flex">
                        <span>Moonshot</span>
                        <hr className="w-full my-2 border-black" />
                        <span>MoonSea</span>
                        <hr className="w-full my-2 border-black" />
                        <span>Tokenmics</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BorderComponent;
