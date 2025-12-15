module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introduction & Why Physical AI Matters',
      items: ['intro'],
    },
    {
      type: 'category',
      label: 'Module 1: The Robotic Nervous System (ROS 2)',
      items: [
        'modules/module-1/week-1-2',  // Weeks 1–2: Introduction to Physical AI & Embodied Intelligence
        'modules/module-1/week-3',    // Week 3: ROS 2 Architecture, Nodes, Topics
        'modules/module-1/week-4',    // Week 4: Services, Actions, Parameters, Launch files
        'modules/module-1/week-5',    // Week 5: Building ROS 2 Packages in Python (rclpy) + first full publisher/subscriber example
      ],
    },
    {
      type: 'category',
      label: 'Module 2: The Digital Twin (Gazebo & Unity)',
      items: [
        'modules/module-2/week-6',    // Week 6: Gazebo Setup, URDF/Xacro, Spawning Robots
        'modules/module-2/week-7',    // Week 7: Sensors Simulation (LiDAR, Depth, IMU), Physics & Collisions + Unity alternative intro
      ],
    },
    {
      type: 'category',
      label: 'Module 3: The AI-Robot Brain (NVIDIA Isaac)',
      items: [
        'modules/module-3/week-8',    // Week 8: Isaac Sim – Omniverse, USD assets, Synthetic Data
        'modules/module-3/week-9',    // Week 9: Isaac ROS – VSLAM, Nav2, Hardware-accelerated Perception
        'modules/module-3/week-10',   // Week 10: Reinforcement Learning & Sim-to-Real basics
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action & Capstone',
      items: [
        'modules/module-4/week-11',   // Week 11: Humanoid Kinematics, Bipedal Locomotion, Balance
        'modules/module-4/week-12',   // Week 12: Vision-Language-Action models for robotics
        'modules/module-4/week-13',   // Week 13: Capstone Project chapter
      ],
    },
  ],
};