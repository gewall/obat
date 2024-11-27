"use client";

import { Button } from "@/components/ui/button";
import Typograph from "@/components/ui/typograph";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Me from "@/assets/me.png";
import { AnimatePresence, motion } from "motion/react";

const Hero = () => {
  const router = useRouter();
  return (
    <AnimatePresence>
      <section className="flex flex-col-reverse gap-2 md:gap-0 md:flex-row container px-8 my-4 md:items-center mt-24">
        <div className="flex-1">
          <motion.div
            initial={{ x: -600 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "backInOut" }}
          >
            <Typograph variant="Sub-Header" className="text-sky-400">
              I am Algi Nugraha,
            </Typograph>
          </motion.div>
          <motion.div
            initial={{ x: -600 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, ease: "backInOut" }}
          >
            <Typograph variant="Header" className="lg:w-4/5 md:w-4/6">
              A Game Developer Turning Ideas into Worlds to Explore
            </Typograph>
          </motion.div>
          <motion.div
            initial={{ x: -600 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, delay: 0.2, ease: "backInOut" }}
          >
            <Typograph variant="Sub-Header">Check Out My Projects</Typograph>
            <div className="my-2">
              <Button
                variant={"default"}
                className="bg-sky-400 hover:bg-sky-500"
                onClick={() => router.push("#about")}
              >
                Click here!
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="flex-1 flex relative -z-10 justify-center">
          <div className="absolute md:w-full md:h-full w-80 h-60 overflow-hidden bottom-0 -z-10 flex justify-center items-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ scale: 3, opacity: 1 }}
              transition={{ duration: 0.8, ease: "backInOut" }}
            >
              <div className="rounded-full bg-sky-300 w-40 h-40 "></div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "backInOut" }}
          >
            <Image
              src={Me}
              alt="Algi Nugraha"
              width={500}
              height={500}
              className="mx-auto -z-10"
            />
          </motion.div>
          {/* <Typograph variant="Text">GSDFSDF</Typograph> */}
        </div>
      </section>
    </AnimatePresence>
  );
};

export default Hero;
