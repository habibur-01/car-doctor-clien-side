import product from "../../../assets/images/products/1.png"

const Popularproduct = () => {
    return (
        <div className="my-36">
            <div className="text-center space-y-3">
                <h3 className="text-lg text-rose-400">Popular Products</h3>
                <h1 className="text-4xl font-semibold">Browse Our Products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae animi aliquam in, <br /> possimus cupiditate delectus?</p>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={product} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"checked />
                    </div>
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Popularproduct;