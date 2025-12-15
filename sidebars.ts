import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Manual sidebar for the Physical AI & Humanoid Robotics Textbook
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction & Why Physical AI Matters',
      items: ['intro'],
    },
    {
      type: 'category',
      label: 'Module 1: The Robotic Nervous System (ROS 2)',
      items: [
        'modules/module-1/module1-week1-2',  // Weeks 1–2: Introduction to Physical AI & Embodied Intelligence
        'modules/module-1/module1-week3',    // Week 3: ROS 2 Architecture, Nodes, Topics
        'modules/module-1/module1-week4',    // Week 4: Services, Actions, Parameters, Launch files
        'modules/module-1/module1-week5',    // Week 5: Building ROS 2 Packages in Python (rclpy) + first full publisher/subscriber example
      ],
    },
    {
      type: 'category',
      label: 'Module 2: The Digital Twin (Gazebo & Unity)',
      items: [
        'modules/module-2/module-2-intro',   // Module 2 Overview
        'modules/module-2/module2-week6',    // Week 6: Gazebo Setup, URDF/Xacro, Spawning Robots
        'modules/module-2/module2-week7',    // Week 7: Sensors Simulation (LiDAR, Depth, IMU), Physics & Collisions + Unity alternative intro
      ],
    },
    {
      type: 'category',
      label: 'Module 3: The AI-Robot Brain (NVIDIA Isaac)',
      items: [
        'modules/module-3/module-3-intro',   // Module 3 Overview
        'modules/module-3/module3-week8',    // Week 8: Isaac Sim – Omniverse, USD assets, Synthetic Data
        'modules/module-3/module3-week9',    // Week 9: Isaac ROS – VSLAM, Nav2, Hardware-accelerated Perception
        'modules/module-3/module3-week10',   // Week 10: Reinforcement Learning & Sim-to-Real basics
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action & Capstone',
      items: [
        'modules/module-4/module-4-intro',   // Module 4 Overview
        'modules/module-4/module4-week11',   // Week 11: Humanoid Kinematics, Bipedal Locomotion, Balance
        'modules/module-4/module4-week12',   // Week 12: Vision-Language-Action models for robotics
        'modules/module-4/module4-week13',   // Week 13: Capstone Project chapter
      ],
    },
  ],
};

export default sidebars;
