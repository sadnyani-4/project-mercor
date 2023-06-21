import React from 'react';
import './Task.css';
import nmes from '../../assets/nav message.svg';
import files from '../../assets/files.svg';
import { Draggable } from 'react-beautiful-dnd';

const Task = ({
  id,
  draggableId,
  index,
  title,
  description,
  comment,
  file,
  priority,
  images,
  status,
}) => {
  let priorityText = priority;

  if (status === 'Done') {
    priorityText = 'Completed';
  }

  let backgroundColor;
  let textColor;

  // Set background color and text color based on priority
  if (priorityText === 'High') {
    backgroundColor = 'rgba(216, 114, 125, 0.1)';
    textColor = '#D8727D';
  } else if (priorityText === 'Completed') {
    backgroundColor = 'rgba(131, 194, 157, 0.2)';
    textColor = '#68B266';
  } else if (priorityText === 'Low') {
    backgroundColor = 'rgba(223, 168, 116, 0.2)';
    textColor = '#D58D49';
  }

  // Render the description with images
  const renderDescription = () => {
    const regex = /!\[(.*?)\]\((.*?)\)/g;
    const matches = description.matchAll(regex);
    const descriptionElements = [];

    const isSingleImage = images.length === 1;
  
    let currentIndex = 0;
    for (const match of matches) {
      const matchIndex = match.index;
      const textBeforeImage = description.substring(currentIndex, matchIndex);
      const imageUrl = match[2];
  
      // Render the text before the image
      descriptionElements.push(<span key={`text-${currentIndex}`}>{textBeforeImage}</span>);
  
      // Render the image element wrapped in the container
      const imageContainerClassName = `image-container${isSingleImage ? ' single' : ''}`;
      descriptionElements.push(
        <div className={imageContainerClassName} key={`image-${matchIndex}`}>
          <img className="description-image" src={imageUrl} alt="" />
        </div>
      );

      currentIndex = matchIndex + match[0].length;
    }
  
    // Render the remaining text
    const textAfterLastImage = description.substring(currentIndex);
    descriptionElements.push(<span key={`text-${currentIndex}`}>{textAfterLastImage}</span>);

    return descriptionElements;
  };

  return (
    <Draggable draggableId={draggableId} index={index} type="task">
      {(provided, snapshot) => (
        <div
          className="Task"
          key={id} // Use the unique task id as the key
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          >
          <div className="priority">
            <p style={{ backgroundColor: backgroundColor, color: textColor }}>{priorityText}</p>
            <button className="dotdot">...</button>
          </div>
          <h3 className="t-name">{title}</h3>
          <div className="t-desc">{renderDescription()}</div>
          <div className="t-extra">
            <div className="t-people people">
              {images.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt="" />
              ))}
            </div>
            <div className="e-others">
              <div className="comments">
                <img src={nmes} alt="" />
                <p>{comment} comments</p>
              </div>
              <div className="files">
                <img src={files} alt="" />
                <p>{file} files</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
