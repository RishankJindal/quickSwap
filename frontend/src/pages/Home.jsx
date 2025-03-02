import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import ContentImg from "../assets/image1.gif"

const Home = () => {
  return (
    <>
      <div className="w-full h-[750px] md:h-[700px] bg-gray-900 text-white">
        <Navbar />

        {/* Main Content */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-16 md:px-12 lg:px-24">
          {/* Left Section - Image */}
          <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
            <img
              src={ContentImg}
              alt="Avatar"
              className="w-80 h-80 md:w-[450px] md:h-[450px] object-cover rounded-xl border-4 shadow-lg shadow-yellow-400"
            />
          </div>

          {/* Right Section - Text Content */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Welcome to <span className="text-yellow-400">QuickSwap</span>
            </h1>
            <p className="text-lg md:text-xl w-full md:w-4/5 mx-auto md:mx-0">
              The game-changing{" "}
              <span className="text-yellow-400">
                Skill Exchange Marketplace
              </span>{" "}
              where <strong>knowledge</strong> is your{" "}
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
