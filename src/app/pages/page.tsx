import Image from "next/image";
import { HiArrowCircleDown } from "react-icons/hi";
import Card from "../components/Card";
const HomePage = ()=>{
    return(
            <div className="relative">
                <HiArrowCircleDown
                    className="fixed bottom-2 z-40 cursor-pointer h-12 w-12 animate-bounce"
                    color="orange"
                />
                <h2 className="text-6xl ml-9 mt-6 font-bold font-meow">
                    <span className="relative text-6xl uppercase">
                        Cat Captures
                        <span
                        className="absolute
                                        left-0
                                        bottom-0
                                        -z-10
                                        
                                        h-8 w-full 
                                        bg-amber-500"
                        ></span>
                    </span>
                </h2>
                <div className="flex items-center justify-between w-full">
                    <div className="flex relative">
                        <div className="absolute z-10 opacity-80 -bottom-8 w-full h-full bg-pink-300 mix-blend-multiply filter blur-lg"></div>
                            <div className="">
                            <Image
                                src="/images/mom-cat.png"
                                alt="mom-cat"
                                height={144} // Desired size with correct aspect ratio
                                width={344}
                            />
                            </div>
                            <div className="absolute bottom-0 -right-4">
                            <Image
                                src="/images/baby-cat.png"
                                alt="baby-cat"
                                height={150} // Desired size with correct aspect ratio
                                width={300}
                            />
                            </div>
                            <div className="absolute bottom-0 right-0 -z-10 translate-x-1/2">
                            <Image
                                src="/images/hi-ri-cat.png"
                                alt="hi-ri-cat"
                                height={144} // Desired size with correct aspect ratio
                                width={250}
                            />
                            </div>
                        </div>
                        <div className="relative  mr-12">
                            <div className="absolute -z-10 -top-20 right-0">
                                <Image
                                    src="/images/message-cat.png"
                                    alt="baby-cat"
                                    height={150} // Desired size with correct aspect ratio
                                    width={300}
                                />
                                </div>
                            
                            <div
                            className="h-56 w-72 
                            bg-white
                                rounded-lg  
                                flex justify-center items-center
                                p-2
                            "
                            >   
                                <p className="text-center line-height-3 tracking-wider font-meow text-[#000]">
                                Paw-sitively thrilled to have you visit my gallery! 🐾 Explore the
                                snapshots of my whisker-filled adventures and may they bring a
                                smile to your day. Meow love, Sprit.
                                </p>
                            </div>
                            <div className="absolute -z-0  -bottom-0 w-full h-full bg-amber-300 mix-blend-multiply filter blur-lg"></div>
                        </div>
                </div>
                <div>
                    <h2 className="text-2xl font-meow mt-6 text-right mr-4">
                        Explore Our Stunning Cat Photo Collection.
                    </h2>
                </div>
                <div>
                    {/* cata data */}
                    <Card />
                </div>
            </div>
    )
}

export default HomePage;