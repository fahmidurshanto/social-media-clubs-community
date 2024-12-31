import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const AllClubs = () => {
  const [clubs, setClubs] = useState([]);
  useEffect(() => {
    fetch("clubs.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClubs(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="my-5">
      <h3 className="text-start font-extralight text-3xl">
        Total Registered Clubs: {clubs.length}
      </h3>
      <hr />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {clubs.map((club, index) => (
          <div className="card card-compact shadow-lg my-10 h-94" key={index}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                src={club?.image}
                className="w-full rounded-md shadow-md h-40"
              />
              <h4 className="text-start font-bold text-2xl">{club.name}</h4>
              <p className="text-start text-lg my-4 text-wrap">
                {club.description}
              </p>
              <p className="text-start text-lg my-4">
                <span className="font-bold">Established date:</span>{" "}
                {club.establishedDate}
              </p>
              <p className="text-start text-lg my-4">
                <span className="font-bold">Members:</span> {club.members}
              </p>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="btn bg-black hover:bg-gray-600  text-white w-full h-10"
              >
                <Link to={`/clubDetails`}>Details</Link>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllClubs;
