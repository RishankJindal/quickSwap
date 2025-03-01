import { Navbar } from "../components/Navbar";

const Home = () => {
  return (
    <div className="w-full h-screen  bg-gray-900">
      <Navbar />
      <div className="text-white flex justify-center items-center text-4xl font-bold">
        Welcome to Quick Swap..
      </div>
    </div>
  );
};

export default Home;