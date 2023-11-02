import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";



const Service = () => {
    const [serviceData, setServiceData] = useState([])
    // const {_id } = serviceData;
    // console.log(_id)

    useEffect(() => {
        fetch('http://localhost:3000/services')
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [])
    console.log(serviceData)

    return (
        <div className="text-center space-y-3">
            <h3 className="text-lg text-rose-400">Service</h3>
            <h1 className="text-4xl font-semibold">Our Service Area</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae animi aliquam in, <br /> possimus cupiditate delectus?</p>
            <div className="flex flex-wrap flex-1 gap-10 justify-center">
                {
                    serviceData?.map(service =>
                        <div key={service._id} >
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={service.img} alt="Shoes" className="rounded-xl w-80 h-52" />
                                </figure>
                                <div className="card-body ">
                                    <h2 className="card-title">{service.title}</h2>

                                    <div className=" flex items-center text-left text-rose-400">
                                        <p>price: $ {service.price}</p>
                                        <Link to={`services/${service._id}`}><button className="btn text-rose-400 "><FaArrowRight></FaArrowRight></button></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )

                }
            </div>
            <div>
                <button className="btn btn-outline btn-error">More Services</button>
            </div>

        </div>
    );
};

export default Service;