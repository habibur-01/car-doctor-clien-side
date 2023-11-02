import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center h-[80vh]">
            <div className="space-y-6">
                <h1 className="text-6xl ">Page Not Found</h1>
                <div className="flex justify-center">
                    <Link to='/'><button className="btn btn-primary">Go Home</button></Link>
                </div>
            </div>

        </div>
    );
};

export default ErrorPage;