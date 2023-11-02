import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-10 my-48">
            <div className="lg:w-1/2 relative ">
                <div className="w-3/4">
                    <picture>
                        <img src={person} alt="" />
                    </picture>

                </div>
                <div className="absolute right-0 lg:w-1/2 top-1/2 border-8 border-white">
                    <picture>
                        <img src={parts} alt="" />
                    </picture>
                </div>
            </div>
            <div className="w-1/2 space-y-7">
                <h3 className="text-lg text-rose-400">About us</h3>
                <div>
                    <h1 className="text-5xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, dolorem.</h1>
                </div>
                <div className="space-y-7">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatum aperiam obcaecati odio eaque tempore in nesciunt doloremque, perspiciatis sapiente.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.lorem hghftj neclk</p>

                </div>
                <div>
                    <button className="btn btn-error">Get More Info</button>
                </div>
            </div>
            
        </div>
    );
};

export default About;