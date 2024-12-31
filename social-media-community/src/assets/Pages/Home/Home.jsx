import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import { Link } from "react-router-dom";
const Home = () => {
  const [clubs, setClubs] = useState([]);
  useEffect(() => {
    // api call to get clubs data
    fetch("clubs.json")
      .then((res) => res.json())
      .then((data) => setClubs(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="text-3xl font-bold">
      <h3 className="text-3xl text-start font-extralight my-10">Clubs: {clubs.length}</h3>
      <div className="grid grid-cols-4 gap-10">
        {clubs.slice(0,4).map((club, index) => {
          return (
            <motion.div
            onClick={()=> <Modal></Modal>}
            className="relative h-52 w-52 rounded-lg overflow-hidden shadow-lg group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 group-hover:opacity-0"
              style={{ backgroundImage: `url(${club.image})` }}
            ></div>
      
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 hover:opacity-80 flex flex-col items-center justify-center">
              <p className="text-white text-lg font-semibold text-center">
                {club.name}
              </p>
              <p className="text-white text-xl font-extralight">ID: {club.id}</p>
            </div>
          </motion.div>
          );
        })}
      </div>
      <Link to="/allCLubs">
      <motion.button whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 1 }}
            transition={{ duration: 0.3 }} className="btn hover:bg-slate-500 px-10 mt-16 bg-black text-white">Explore More</motion.button>
      </Link>
    </div>
  );
};

export default Home;
