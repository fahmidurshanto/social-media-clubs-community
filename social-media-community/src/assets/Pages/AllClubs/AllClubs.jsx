import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FaArrowRight } from "react-icons/fa";

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
      {clubs.map((club, index) => (
        <motion.div
        key={index}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="card  card-side bg-base-100 shadow-xl flex justify-between items-center"
        >
          <figure>
            <img
              src={club?.image}
              className="w-full rounded-md shadow-md h-40"
            />
          </figure>
          <div className="card-body text-start">
            <h2 className="card-title font-bold">{club.name}</h2>
            <p className="card-side">{club.description}</p>
            <p>Established date: {club.establishedDate}</p>
            <p>Members: {club.members}</p>
          </div>
          <div className="card-actions justify-end">
            <Link to="/clubDetails">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="btn bg-black hover:bg-gray-600  text-white w-full h-10"
              >
                View <FaArrowRight />
              </motion.div>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AllClubs;
