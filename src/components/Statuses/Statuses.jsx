import React from 'react';
import './Statuses.css';
import { Droppable } from 'react-beautiful-dnd';
import Status from '../Status/Status';

const Statuses = ({ tasks, onDragEnd }) => {

  return (
      <div className="Statuses">
        <Droppable droppableId="To Do" type="status">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <Status status="To Do" tasks={tasks.filter(task => task.status === "To Do")} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <Droppable droppableId="On Progress" type="status">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <Status status="On Progress" tasks={tasks.filter(task => task.status === "On Progress")} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <Droppable droppableId="Done" type="status">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <Status status="Done" tasks={tasks.filter(task => task.status === "Done")} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
  );
};

export default Statuses;
