import React from 'react'
import './Status.css'
import add from '../../assets/add-square-purple.svg'
import Task from '../Task/Task'
import { Droppable } from 'react-beautiful-dnd';


const Status = ({ status, tasks }) => {
  const filteredTasks = tasks.filter((task) => task.status === status);
  const taskCount = filteredTasks.length;

  let dotClass;
  switch (status) {
    case "To Do":
      dotClass = "s-blue-dot";
      break;
    case "On Progress":
      dotClass = "s-orange-dot";
      break;
    case "Done":
      dotClass = "s-green-dot";
      break;
    default:
      dotClass = "s-gray-dot";
  }

  return (
    <div className='Status'>
        <div className="s-title">
          <div className="what">
              <div className={dotClass}></div>
              <h2>{status}</h2>
              <h3>{taskCount}</h3>
          </div>
          {status === "To Do" && <img src={add} alt="" />}
        </div>
        <hr className={dotClass} />
      <Droppable droppableId={status} type="task">
        {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {filteredTasks.map((task, index) => (
            <Task
              key={`${task.id}-${index}`} // Use a combination of task.id and index for a unique key
              draggableId={task.id}
              index={index}
              title={task.title}
              description={task.description}
              comment={task.comment}
              file={task.file}
              priority={task.priority}
              images={task.images}
              status={task.status}
            />
          ))}
          {provided.placeholder}
        </div>
        )}
      </Droppable>
    </div>
  )
}

export default Status;