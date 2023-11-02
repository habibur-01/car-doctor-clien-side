import { useLoaderData } from "react-router-dom";
import srvicePagebBg from "../../assets/images/checkout/checkout.png"
import { useContext, } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const CheckOut = () => {
    const {user} = useContext(AuthContext)
    const { email, displayName} = user;
    // console.log(email)
    const checkoutService = useLoaderData()
    const {title, service_id, price } =checkoutService;
    console.log(checkoutService)
    console.log(user)

    const handleCheckOut = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const serviceTitle = form.title.value
        const serviceId = form.serviceId.value
        const amount = form.amount.value
        const date = form.date.value
        const message = form.message.value

        const bookingData = {name, email, serviceTitle, serviceId, amount, date, message}
        console.log(bookingData)

       fetch('http://localhost:3000/booking', {
        method: 'POST',
        headers:{
            "Content-Type": "application/json",
        }, 
        body:JSON.stringify(bookingData)

       })
       .then(result => {
        console.log(result)
       })
       .catch(error => {
         console.error(error)
       })


    }
    return (
        <div>
            <div className="h-[400px] bg-cover  rounded-lg" style={{ backgroundImage: `url('${srvicePagebBg}')` }}>
                <div className=" relative h-full rounded-lg flex items-center transform bg-gradient-to-r from-[#151515] t0-[rgba(21, 21, 21, 0)] bg-transparent " >
                    <div className="w-1/3 ml-20 space-y-7">
                        <h1 className="text-4xl text-[#FFF] font-semibold">Checkout</h1>

                    </div>
                    <div className="absolute bottom-0 left-1/3 w-1/4 ml-20 p-4 text-center rounded-tl-full rounded-tr-full bg-rose-500">
                        <a href="/" className="text-2xl text-[#FFF] font-semibold">Service/ </a>
                        <a href="#" className="text-2xl text-[#FFF] font-semibold">Checkout </a>

                    </div>

                </div>
            </div>
            <div className="bg-gray-100  my-28 rounded-xl py-14">
                <form className="card-body w-3/5 mx-auto grid lg:grid-cols-2" onSubmit={handleCheckOut}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={displayName} placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Booking Date</span>
                        </label>
                        <input type="date" name="date"   placeholder="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={email}  placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Title</span>
                        </label>
                        <input type="text" name="title" defaultValue={title} placeholder="service" className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Id</span>
                        </label>
                        <input type="text" name="serviceId" defaultValue={service_id} placeholder="service id" className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Amount</span>
                        </label>
                        <input type="text" name="amount" defaultValue={price} placeholder="due amount" className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea name="message" rows="4" className="block p-2.5 w-full text-sm border-2 rounded-lg " placeholder="Write your thoughts here..."></textarea>
                        
                    </div>
                    <div className="form-control mt-6 col-span-2">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;