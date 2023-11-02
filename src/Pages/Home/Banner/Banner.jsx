import banner1 from "../../../assets/images/banner/1.jpg"
import banner2 from "../../../assets/images/banner/2.jpg"
import banner3 from "../../../assets/images/banner/3.jpg"
import banner4 from "../../../assets/images/banner/4.jpg"

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[800px] ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full" />
                    <div className="absolute  h-full flex items-center transform bg-gradient-to-r from-[#151515] t0-[rgba(21, 21, 21, 0)] left-0   bg-transparent text-white">
                        <div className="w-1/3 ml-10 space-y-7">
                            <h1 className="text-4xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ex sint similique maiores provident voluptatibus reiciendis veniam natus, odio id labore deleniti in delectus repudiandae nam ratione officiis expedita cumque.</p>
                            <button className="btn btn-error">Discover more</button>
                            <button className="btn btn-outline btn-success  ml-3">Contact us</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform  -translate-y-1/2 left-5 right-5 bottom-0 bg-transparent">
                        <a href="#slide4" className="btn btn-circle mr-3">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>

                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full" />
                    <div className="absolute  h-full flex items-center transform bg-gradient-to-r from-[#151515] t0-[rgba(21, 21, 21, 0)] left-0   bg-transparent text-white">
                        <div className="w-1/3 ml-10 space-y-7">
                            <h1 className="text-4xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ex sint similique maiores provident voluptatibus reiciendis veniam natus, odio id labore deleniti in delectus repudiandae nam ratione officiis expedita cumque.</p>
                            <button className="btn btn-error">Discover more</button>
                            <button className="btn btn-outline btn-success  ml-3">Contact us</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform  -translate-y-1/2 left-5 right-5 bottom-0 bg-transparent">
                        <a href="#slide1" className="btn btn-circle mr-3">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>

                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full" />
                    <div className="absolute  h-full flex items-center transform bg-gradient-to-r from-[#151515] t0-[rgba(21, 21, 21, 0)] left-0   bg-transparent text-white">
                        <div className="w-1/3 ml-10 space-y-7">
                            <h1 className="text-4xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ex sint similique maiores provident voluptatibus reiciendis veniam natus, odio id labore deleniti in delectus repudiandae nam ratione officiis expedita cumque.</p>
                            <button className="btn btn-error">Discover more</button>
                            <button className="btn btn-outline btn-success  ml-3">Contact us</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform  -translate-y-1/2 left-5 right-5 bottom-0 bg-transparent">
                        <a href="#slide2" className="btn btn-circle mr-3">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner4} className="w-full" />
                    <div className="absolute  h-full flex items-center transform bg-gradient-to-r from-[#151515] t0-[rgba(21, 21, 21, 0)] left-0   bg-transparent text-white">
                        <div className="w-1/3 ml-10 space-y-7">
                            <h1 className="text-4xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ex sint similique maiores provident voluptatibus reiciendis veniam natus, odio id labore deleniti in delectus repudiandae nam ratione officiis expedita cumque.</p>
                            <button className="btn btn-error">Discover more</button>
                            <button className="btn btn-outline btn-success ml-3">Contact us</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform  -translate-y-1/2 left-5 right-5 bottom-0 bg-transparent">
                        <a href="#slide3" className="btn btn-circle mr-3">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;