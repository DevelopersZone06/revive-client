import { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Card from "./Card";


const Column = ({ column, index, onAddTask }) => {
    const [newTaskContent, setNewTaskContent] = useState('');

  const handleInputChange = event => {
    setNewTaskContent(event.target.value);
  };

  const handleAddTask = () => {
    if (newTaskContent.trim() !== '') {
      onAddTask(column.id, newTaskContent);
      setNewTaskContent('');
    }
  };
    return (
        <div className="w-full md:w-1/3 p-2 pt-5 rounded">
        <h2 className="text-2xl text-sky-50 font-semibold text-center py-4">{column.title}</h2>
        <Droppable droppableId={column.id} type="CARD">
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {column.cards.map((card, index) => (
                <Draggable key={card.id} draggableId={card.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      className="bg-sky-100 p-2 m-2 rounded"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card card={card} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter task..."
            value={newTaskContent}
            onChange={handleInputChange}
            className="border p-2"
          />
          <button onClick={handleAddTask} className="mt-2 bg-[#10a0a0] text-white py-2 px-2 rounded">
            Add Task
          </button>
        </div>
      </div>
    );
};

export default Column;