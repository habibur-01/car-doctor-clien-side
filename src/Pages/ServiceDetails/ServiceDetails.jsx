import { Link, useLoaderData } from "react-router-dom";
import srvicePagebBg from "../../assets/images/checkout/checkout.png"
import { FaArrowRight, FaFileAlt } from "react-icons/fa";
import logo from "../../assets/logo.svg"
import { useEffect, useState } from "react";

const ServiceDetails = () => {
    const singleServiceData = useLoaderData();
    const [ data, setData ] = useState([])
    const { _id, title, img, price, description, facility } = singleServiceData;
    console.log(facility)

    useEffect(() => {
        fetch('http://localhost:3000/services')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log(data)


    return (
        <div className="mt-8 mb-32">
            <div className="h-[400px] bg-cover  rounded-lg" style={{ backgroundImage: `url('${srvicePagebBg}')` }}>
                <div className=" relative h-full rounded-lg flex items-center transform bg-gradient-to-r from-[#151515] t0-[rgba(21, 21, 21, 0)] bg-transparent " >
                    <div className="w-1/3 ml-20 space-y-7">
                        <h1 className="text-4xl text-[#FFF] font-semibold">Service Details</h1>

                    </div>
                    <div className="absolute bottom-0 left-1/3 w-1/4 ml-20 p-4 text-center rounded-tl-full rounded-tr-full bg-rose-500">
                        <a href="/" className="text-2xl text-[#FFF] font-semibold">Service/ </a>
                        <a href="#" className="text-2xl text-[#FFF] font-semibold">Details </a>

                    </div>

                </div>
            </div>
            <div className="grid lg:grid-cols-3 my-32 gap-8">
                <div className="col-span-2 h-[500px]">
                    <picture>
                        <img src={img} className="w-full h-full object-cover rounded-lg" alt="" />
                    </picture>
                    <div className="mt-14">
                        <h1 className="text-3xl font-semibold">{title}</h1>
                        <p className="text-base mt-5">{description}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        {
                            facility.map((facilities, index) => <div key={index} className="card w-full bg-base-100 shadow-xl border-t-8 border-rose-300">
                                <div className="card-body">
                                    <h2 className="card-title">{facilities?.name}</h2>
                                    <p>{facilities?.details}</p>

                                </div>
                            </div>)
                        }

                    </div>
                    <div className="my-8">
                        <h1 className="text-3xl font-semibold">3 Simple Step To Process</h1>
                        <p className="text-base font-normal my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore labore ad iusto quidem reiciendis provident? Porro earum expedita repellat adipisci?</p>
                        <div className="border p-10 grid grid-cols-3">
                            <div className=" flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full bg-rose-400 border-double flex justify-center items-center">
                                    <h1 className="text-xl text-[#FFF]">01</h1>

                                </div>
                                <p className="text-lg font-medium mt-2">Step One</p>
                                <p className="text-base font-normal">Create Account & Login</p>
                            </div>

                            <div className=" flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full bg-rose-400 border-double flex justify-center items-center">
                                    <h1 className="text-xl text-[#FFF]">02</h1>

                                </div>
                                <p className="text-lg font-medium mt-2">Step Two</p>
                                <p className="text-base font-normal">Scroll Down & Select Ypur Service</p>
                            </div>

                            <div className="flex  items-center flex-col  w-full">
                                <div className="w-20 h-20 rounded-full bg-rose-400 border-double flex justify-center items-center">
                                    <h1 className="text-xl text-[#FFF]">03</h1>

                                </div>
                                <p className="text-lg font-medium mt-2">Step Three</p>
                                <p className="text-base font-normal">View Service Details & Go for Checkout</p>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="">
                    <div className="bg-slate-100 rounded-lg p-10 space-y-4">
                        <h3 className="text-2xl font-semibold">Services</h3>
                        <div>
                            {
                                data?.map(services => <div key={services._id} className="mb-4">
                                    <Link to={``}> <div className="flex justify-between items-center rounded-md bg-[#FFF] p-4"><p>{services.title}</p><p><FaArrowRight></FaArrowRight></p></div></Link>
                                </div>)
                            }
                        </div>

                        {/* <div>
                            <Link> <div className="flex justify-between items-center rounded-md bg-[#FFF] p-4"><p>{title}</p><p><FaArrowRight></FaArrowRight></p></div></Link>
                        </div>
                        <div>
                            <Link> <div className="flex justify-between items-center rounded-md bg-[#FFF] p-4"><p>{title}</p><p><FaArrowRight></FaArrowRight></p></div></Link>
                        </div>
                        <div>
                            <Link> <div className="flex justify-between items-center rounded-md bg-[#FFF] p-4"><p>{title}</p><p><FaArrowRight></FaArrowRight></p></div></Link>
                        </div>
                        <div>
                            <Link> <div className="flex justify-between items-center rounded-md bg-[#FFF] p-4"><p>{title}</p><p><FaArrowRight></FaArrowRight></p></div></Link>
                        </div> */}

                    </div>
                    <div className="bg-[#151515] rounded-lg p-10 mt-8 w-full text-[#FFF]">
                        <h1 className="text-2xl font-semibold">Download</h1>
                        <div className="flex flex-row items-center gap-6 w-full ">
                            <FaFileAlt></FaFileAlt>
                            <div className="flex justify-between mt-4 w-full">
                                <div className="space-y-1">
                                    <p className="text-base font-medium">Our Brochure</p>
                                    <p className="text-sm">Download</p>
                                </div>
                                <div>
                                    <a href="" download>
                                        <button className="btn btn-error"><FaArrowRight></FaArrowRight></button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-6 w-full ">
                            <FaFileAlt></FaFileAlt>
                            <div className="flex justify-between mt-4 w-full">
                                <div className="space-y-1">
                                    <p className="text-base font-medium">Company Details</p>
                                    <p className="text-sm">Download</p>
                                </div>
                                <div>
                                    <a href="" download>
                                        <button className="btn btn-error"><FaArrowRight></FaArrowRight></button>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="bg-[#151515] rounded-lg p-10 w-full text-center my-4">
                        <picture className="flex justify-center"><img src={logo} alt="" /></picture>
                        <p className="text-[#FFF] my-4">Need Help? We Are Here <br /> To  Help You</p>
                        <div className="w-full relative mb-8">

                            <div className="w-full bg-[#FFF] text-black p-10 rounded-lg">
                                <h1 className="text-xl font-medium mb-3"><span className="text-rose-400 ">Car Doctor</span> Special</h1>
                                <p className="text-base font-medium">Save upto <span className="text-rose-400">60% off</span></p>

                            </div>
                            <div className="absolute -bottom-6 left-1/3">
                                <button className="btn btn-error px-6">Get A Quote</button>

                            </div>
                        </div>


                    </div>
                    <div className="w-full">
                        <h1 className="text-3xl font-semibold my-6">Price {'$' + price}</h1>

                        <Link to={`/checkout/${_id}`}><button className="btn btn-error w-full text-lg text-[#FFF]">Proceed To Checkout</button></Link>
                    </div>
                </div>
                <div className="w-full h-[500px] mt-40 col-span-2">
                    <picture>
                        <img src={img} alt=""  className="h-full w-full object-cover"/>
                    </picture>
                </div>

                

            </div>
            
        </div>
    );
};

export default ServiceDetails;