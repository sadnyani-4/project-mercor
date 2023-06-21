import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';

import p1 from './assets/Ellipse 12.png';
import p2 from './assets/Ellipse 13.png';
import p3 from './assets/Ellipse 14.png';
import p4 from './assets/Ellipse 15.png';
import p5 from './assets/Ellipse 16.png';

export const tasksData = [
  {
    id: "0",
    title: "Brainstorming",
    description: "Brainstorming brings team members' diverse experience into play.",
    comment: "12",
    file: "0",
    priority: "Low",
    status: "To Do",
    images: [p1, p2, p3],
  },
  {
    id: "1",
    title: "Research",
    description: "User research helps you to create an optimal product for users.",
    comment: "10",
    file: "3",
    priority: "High",
    status: "To Do",
    images: [p4, p5],
  },
  {
    id: "2",
    title: "Wireframes",
    description: "Low fidelity wireframes include the most basic content and visuals.",
    comment: "3",
    file: "3",
    priority: "High",
    status: "To Do",
    images: [p1, p4],
  },
  {
    id: "3",
    title: "Onboarding Illustrations",
    description: "![Onboarding Illustrations](https://images.unsplash.com/photo-1530903677198-7c9f3577a63e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=952&q=80)",
    comment: "14",
    file: "15",
    priority: "Low",
    status: "On Progress",
    images: [p1, p4, p5],
  },
  {
    id: "4",
    title: "Moodboard",
    description: "![Moodboard 1](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-8uzlBdfila7Miz78_pNAgQ3qWFSOUa1xmNwiQI2plA&s)![Moodboard 2](data:image/jpeg;base64,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)",
    comment: "9",
    file: "10",
    priority: "Low",
    status: "On Progress",
    images: [p1],
  },
  {
    id: "5",
    title: "Mobile App Design",
    description: "![Mobile App Design](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5sIhm9vmsiE-rJ05oxRj3NDK1i_WVqQBQRxpxFPY0HqEs1wjc)",
    comment: "9",
    file: "10",
    priority: "Completed",
    status: "Done",
    images: [p1, p4],
  },
  {
    id: "6",
    title: "Design System",
    description: "It just needs to adapt the UI from what you did before",
    comment: "12",
    file: "15",
    priority: "Completed",
    status: "Done",
    images: [p1, p4, p5],
  },
];

const App = () => {
  const [tasks, setTasks] = useState(tasksData);

  return (
      <div className="App">
        <Header />
        <div className="notheader">
          <Navbar />
          <Main tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
  );
};

export default App;
