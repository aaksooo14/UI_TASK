

import image2 from '../../assets/slideImage/1.webp';
import image3 from '../../assets/slideImage/2-1.webp';
import image4 from '../../assets/slideImage/2.webp';
import image5 from '../../assets/slideImage/3-1.webp';
import image6 from '../../assets/slideImage/3.webp';
import image7 from '../../assets/slideImage/8.webp';


const Part2 = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center md:space-y-[15vh]'>
            <div className='md:w-[70%] w-[90%] mx-auto'>
                <div className="carousel space-x-3 bg-yellow-700 rounded-lg">
                    <div className="carousel-item  ">
                        <img
                            className='h-[300px] p-2  '
                            src={image2}
                            alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img
                            className='h-[300px] p-2'
                            src={image3} alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img
                            className='h-[300px] p-2'
                            src={image4} alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img
                            className='h-[300px] p-2'
                            src={image5} alt="Burger" />
                    </div>
                    <div className="carousel-item ">
                        <img
                            className='h-[300px] p-2'
                            src={image6} alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img
                            className='h-[300px] p-2'
                            src={image7}
                            alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img
                            className='h-[300px] p-2'
                            src={image4} alt="Burger" />
                    </div>
                </div>
            </div>
            <div className='md:grid md:grid-cols-2 md:w-[50%] p-5 md:p-0 md:space-x-5 space-x-0'>
                <div className='space-y-2'>
                    <hr className='border-yellow-500 border-2' />
                    <p className='text-3xl font-bold text-white'>Buy MoonBoxes</p>
                    <p className='text-3xl font-bold text-yellow-500'>and expand your</p>
                    <p className='text-3xl font-bold text-yellow-500'>nft collection</p>
                    <hr className='border-yellow-500 border-1' />
                </div>
                <div className='space-y-2'>
                    <hr className='border-yellow-500 border-1' />
                    <p className='text-yellow-500'>Buying Moonboxes is a unique way to aquire nfts and build your connection
                        It is built on the binance smart chain , MoonRiver, Polygon , Ethereum and
                        Dogechain.Onnly awailable on <span className='text-white'>Moonboex.io</span></p>
                    <span className='btn bg-yellow-500 rounded-full'>Explore</span>
                </div>
            </div>
        </div >
    );
};

export default Part2;
