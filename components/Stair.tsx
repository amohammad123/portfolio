import {motion} from "framer-motion";


const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%"
    },
    exit: {
        top: ["100%", "0%"]
    }
}

// calculate the revers index for staggered delay
// const reverseIndex = (index: number) => {
//     const totalSteps = 6 // number of steps
//     return totalSteps - index - 1
// }

const Stair = () => {
    return (
        <>
            {/*  render 6 motion divs, each representing a step of the stairs.
               Each div will have the same animation defined by the stairAnimation object.
              The delay for each div is calculated dynamically based on it's reversed index,
              creating a staggered effect with decreasing delay for each subsequent step.
              */}

            {[...Array(1)].map((_: undefined, index: number) => {
                return (
                    <motion.div
                        key={index}
                        variants={stairAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.4,
                            delay:  0.2,
                            ease: 'easeInOut'
                        }}
                        className="h-full w-full bg-[#101014]/50 relative "
                    />
                );
            })}
        </>

    );
};

export default Stair;