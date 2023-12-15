"use client";
import { useContext,useState,useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "@/components/Slider";
import UpperTable from "@/components/UpperTable";
import LowerTable from "@/components/LowerTable";
import Navbar from "@/components/Navbar";
import Categories from "@/components/Categories";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import Loader from "@/components/Loader";
import {
  FaArrowDown,
  FaArrowUp,
  FaAtom,
  FaCircleNotch,
  FaPlusCircle,
} from "react-icons/fa";
import styles from "../styles/Home.module.css";


export default function Home() {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const [membrane, setMembrane] = useState(0);
  const [upQuark, setUpQuark] = useState(0);
  const [downQuark, setDownQuark] = useState(0);
  const [proton, setProton] = useState(0);
  const [neutron, setNeutron] = useState(0);
  const [warningMessage, setWarningMessage] = useState("");
  const [membraneUpgradeLevel, setMembraneUpgradeLevel] = useState(0);

  
  useEffect(() => {
    const intervalDuration = 3000 / 2 ** membraneUpgradeLevel; // Interval duration decreases with each upgrade
    const interval = setInterval(() => {
      setMembrane((prevMembrane) => prevMembrane + 1);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [membraneUpgradeLevel]);

  function increaseUpQuark() {
    if (membrane >= 10) {
      setUpQuark(upQuark + 1);
      setMembrane(membrane - 10);
      setWarningMessage("");
    } else {
      const missingMembrane = 10 - membrane;
      setWarningMessage(
        `Not Enough Membrane! Need: ${missingMembrane} Membrane`
      );
    }
  }

  function increaseDownQuark() {
    if (membrane >= 10) {
      setDownQuark(downQuark + 1);
      setMembrane(membrane - 10);
      setWarningMessage("");
    } else {
      const missingMembrane = 10 - membrane;
      setWarningMessage(
        `Not Enough Membrane! Need: ${missingMembrane} Membrane`
      );
    }
  }

  function createProton() {
    if (upQuark >= 2 && downQuark >= 1) {
      setUpQuark(upQuark - 2);
      setDownQuark(downQuark - 1);
      setProton(proton + 1);
    } else {
      let missingQuarks = "";
      if (upQuark < 2) {
        missingQuarks += "2 Up Quark ";
      }
      if (downQuark < 1) {
        missingQuarks += "1 Down Quark ";
      }
      setWarningMessage(`Not Enough! Need: ${missingQuarks}`);
    }
  }

  function createNeutron() {
    if (downQuark >= 2 && upQuark >= 1) {
      setDownQuark(downQuark - 2);
      setUpQuark(upQuark - 1);
      setNeutron(neutron + 1);
    } else {
      let missingQuarks = "";
      if (downQuark < 2) {
        missingQuarks += "2 Down Quark ";
      }
      if (upQuark < 1) {
        missingQuarks += "1 Up Quark ";
      }
      setWarningMessage(`Not Enough! Need: ${missingQuarks}`);
    }
  }

  function upgradeMembrane() {
    if (membraneUpgradeLevel < 4) {
      setMembraneUpgradeLevel(membraneUpgradeLevel + 1);
      // Subtract resources or handle other conditions for upgrade here
    } else {
      setWarningMessage("Maximum upgrade level reached!");
    }
  }

  return (
    <>
    
      <motion.div
        className={`fixed min-h-screen w-full flex justify-center items-center flex-col z-50 origin-top ${
          theme === "dark" ? "bg-dark_primary" : "bg-light_primary"
        }`}
        initial={{ scaleY: 1, userSelect: "auto", pointerEvents: "auto" }}
        animate={{ scaleY: 0, userSelect: "none", pointerEvents: "none" }}
        transition={{ ease: "easeInOut", delay: 1, duration: 1 }}
      >
        <Loader />
      </motion.div>
      <div
        className={`min-h-screen w-full font-poppins ${
          theme === "dark" ? "bg-dark_primary" : "bg-light_primary"
        } flex flex-col justify-start items-center`}
      >
        <Slider />
        <div
      className={styles.container}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 className={styles.header}>
        <FaAtom /> Idle Particle Game
      </h1>

      <div className={styles.itemsContainer}>
        <div className={styles.item}>
          <img src="/images/membrane.png" className={styles.image} />
          <p className={styles.text}>Membrane: {membrane}</p>
        </div>

        <div className={styles.item}>
          <img src="/images/upquark.png" className={styles.image} />
          <p className={styles.text}>Up Quarks: {upQuark}</p>
        </div>

        <div className={styles.item}>
          <img src="/images/downquark.png" className={styles.image} />
          <p className={styles.text}>Down Quarks: {downQuark}</p>
        </div>

        <div className={styles.item}>
          <img src="/images/proton.png" className={styles.image} />
          <p className={styles.text}>Protons: {proton}</p>
        </div>

        <div className={styles.item}>
          <img src="/images/neutron.png" className={styles.image} />
          <p className={styles.text}>Neutrons: {neutron}</p>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={increaseUpQuark}>
          <FaArrowUp />
          Increase Up Quark
        </button>
        <button className={styles.button} onClick={increaseDownQuark}>
          <FaArrowDown />
          Increase Down Quark
        </button>
        <button className={styles.button} onClick={createProton}>
          <FaPlusCircle />
          Create Proton
        </button>
        <button className={styles.button} onClick={createNeutron}>
          <FaCircleNotch />
          Create Neutron
        </button>
        <button className={styles.button} onClick={upgradeMembrane}>
          Upgrade Membrane (Level {membraneUpgradeLevel})
        </button>
      </div>
      {warningMessage && <p style={{ color: "red" }}>{warningMessage}</p>}
    </div>
        <div className="min-w-[80%] flex flex-col justify-start items-center my-10 overflow-x-scroll">
          <UpperTable />
          <LowerTable />
          <Categories />
        </div>
      </div>
    </>
  );
}
