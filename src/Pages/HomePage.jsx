import { Link } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import homePageImage from "../assets/images/homePageMainImage.png";

function HomePage() {
  return (
    <HomeLayout>
      <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[80vh] sm:h-[90vh]">
        <div className="w-1/2 space-y-6">
          <h1 className="text-5xl font-semibold">
            Find out best
            <span className="text-yellow-500 font-black"> Online Courses</span>
          </h1>
          <p className="text-xl text-gray-200 font-bold">
            We have large library of courses thought by higly skilled and
            qualified instructors at{" "}
            <span className="text-yellow-200"> very affordable cost</span>
          </p>
          <div className="space-x-6">
            <Link to="/courses">
              <button className="bg-yellow-500 px-5 py-3 rounded-md cursor-pointer hover:bg-yellow-600 font-semibold text-lg transition-all ease-in-out duration-300">
                Explore Courses
              </button>
            </Link>
            <Link to="/contact">
              <button className="border border-yellow-500 px-5 py-3 rounded-md cursor-pointer hover:bg-yellow-600 font-semibold text-lg transition-all ease-in-out duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        <div className="w-1/2 flex items-center justify-center">
          <img src={homePageImage} alt="homepage image" />
        </div>
      </div>
    </HomeLayout>
  );
}

export default HomePage;
