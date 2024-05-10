"use client";
import React, { useEffect, useRef } from 'react';
import styles from '../app/waterdrops.module.css';

function WaterDrops() {
    const containerRef = useRef(null);
  
    useEffect(() => {
      function createWaterDrop() {
        const waterdrop = document.createElement('div');
        waterdrop.classList.add(styles.waterdrop);
        if (Math.random() > 0.1) { /* Aktualisieren Sie die Bedingung, um die Wassertropfen zufällig nach links oder rechts bewegen zu lassen */
          waterdrop.classList.add(styles.waterdropMoveRight);
        }
        waterdrop.style.left = `${Math.random() * 100}%`;
        waterdrop.style.top = `${Math.random() * 100}%`;
        waterdrop.style.animationDelay = `${Math.random() * 5}s`;
        waterdrop.style.width = `${Math.random() * 30 + 30}px`;
        waterdrop.style.height = `${Math.random() * 30 + 30}px`;
  
        return waterdrop;
      }
  
      function addWaterDrops() {
        const container = containerRef.current;
        const numWaterdrops = 100;
  
        for (let i = 0; i < numWaterdrops; i++) {
          container.appendChild(createWaterDrop());
        }
      }
  
      addWaterDrops();
    }, []);
  
    return (
      <div className={styles.waterdropsContainer} ref={containerRef}>
        {/* Water drops will be appended here by JavaScript */}
      </div>
    );
  }
  
  export default WaterDrops;