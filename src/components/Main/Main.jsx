import React from 'react';
import './Main.css';
import ProTitle from '../ProTitle/ProTitle';
import ProInvite from '../ProInvite/ProInvite';
import Dropdowns from '../Dropdowns/Dropdowns';
import Share from '../Share/Share';
import Statuses from '../Statuses/Statuses';
import { DragDropContext } from 'react-beautiful-dnd';

const Main = ({ tasks, setTasks }) => {

  const handleDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) {
      return;
    }    

    const updatedTasks = tasks.slice();
    const draggedTask = updatedTasks[result.draggableId];

    console.log('Dragged Task:', draggedTask);
    draggedTask.status = destination.droppableId;

    setTasks(updatedTasks);
  };
  

  return (
    <div className='Main'>
      <div className="main-heading">
        <ProTitle />
        <ProInvite />
      </div>
      <div className="edits">
        <Dropdowns />
        <Share />
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Statuses tasks={tasks} />
      </DragDropContext>
    </div>
  );
};

export default Main;
