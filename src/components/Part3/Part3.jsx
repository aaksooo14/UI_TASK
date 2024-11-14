import image5 from '../../assets/5.webp'
import { AiOutlineForm } from "react-icons/ai";
import astoPainter from '../../assets/slideImage/astro_painter.png'

const Part3 = () => {
    return (
        <>
            <div className='h-screen flex flex-col justify-center items-center space-y-5 p-5 md:p-0'>
                <div className='md:grid md:grid-cols-2 md:w-[50%] md:space-x-5 '>
                    <div className='space-y-2'>
                        <hr className='border-yellow-500 border-2' />
                        <p className='text-3xl font-bold text-white'>Call for the artist</p>
                        <p className='text-3xl font-bold text-yellow-500'>Application are</p>
                        <p className='text-3xl font-bold text-yellow-500'>open for all</p>
                        <p className='text-3xl font-bold text-yellow-500'>artist and creators</p>
                        <hr className='border-yellow-500 border-1' />
                        <div className='flex flex-col space-y-3 md:w-[10vw] pb-4 md:pb-0'>
                            <button className='border-2 rounded-full md:w-[12vw] btn bg-transparent text-yellow-500 border-yellow-500'>
                                Contact us
                            </button>
                            <button className='border-2 rounded-full flex md:w-[12vw] btn bg-yellow-500 text-black border-yellow-500'>
                                <span><AiOutlineForm />
                                </span>
                                <span>Application Form</span>
                            </button>
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <img src={astoPainter} alt="Imagefive" className='h-[43vh]' />
                    </div>
                </div>
            </div >

        </>
    )
}

export default Part3
