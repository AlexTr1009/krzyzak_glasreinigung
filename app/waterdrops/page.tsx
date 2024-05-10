import React from 'react';
// import WaterDrops from '../../components/WaterDrops';
// import '../styles/globals.css';
import styles from '../Home.module.css'
import Image from "next/image";
import Background_md from '../../public/assets/water.png';


export default function Home() {
    return (
      <div className={styles.container}>
        {/* <WaterDrops /> */}
        <div className={styles.content}>
          <h1 className='text-9xl'>Water Drops Animation in Next.js</h1>
            {/* <Image src={Background_md} className=" object-cover mix-blend-overlay" alt="Background"/> */}

        </div>
      </div>
    );
  }
