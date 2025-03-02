import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import ContentImg from "../assets/image1.gif";

const Home = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col">
        <Navbar />

        {/* Main Content */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-24 py-10 flex-grow">
          {/* Left Section - Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
            <img
              src={ContentImg}
              alt="Avatar"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] object-cover rounded-xl border-4 shadow-lg shadow-yellow-400"
            />
          </div>

          {/* Right Section - Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4 sm:space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
              Welcome to <span className="text-yellow-400">QuickSwap</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl w-full md:w-4/5 mx-auto md:mx-0 leading-relaxed">
              The game-changing {" "}
              <span className="text-yellow-400">Skill Exchange Marketplace</span>{" "}
              where <strong>knowledge</strong> is your {" "}
              <span className="text-yellow-400">currency</span>!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;