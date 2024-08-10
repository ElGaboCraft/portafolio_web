import { motion } from "framer-motion";

//variants
const starAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
}

//calculare the reverse index fat staggred delay
const reverseIndex = (index) => {
    const totalSteps = 6; // number of steps
    return totalSteps - index - 1;
}

const Stairs = () => {
    return (
    <>
        {/* 
        render 6 motion delays divs, each representing a step of stairs.
        Each div wll have the same animation defined by the stairsAnimation object.
        The delay for each div is calculated sinamically based on it's reversed index, creating a staggered effect withj decreasing delay for each subsequent step. 
        */}
        {[...Array(6)].map((_, index) =>
        <motion.div 
        key={index}
        variants={starAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
        }}
        className="h-hull w-full bg-white relative"
        />
        )}
    </>
    );
}

export default Stairs