import { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Card from "./Card";
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Column = ({ column, index, onAddTask }) => {
    const [newTaskContent, setNewTaskContent] = useState('');
    // const toolbarOptions = [
    //   ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    //   ['blockquote', 'code-block'],
    //   ['link', 'image', 'video', 'formula'],
    
    //   [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    //   [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
    //   [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    //   [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    //   [{ 'direction': 'rtl' }],                         // text direction
    
    //   [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    //   [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
    //   [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    //   [{ 'font': [] }],
    //   [{ 'align': [] }],
    
    //   ['clean']                                         // remove formatting button
    // ];
    const toolbarOptions = ['bold', 'italic', 'underline', 'strike'];

    
    
   const  module= {
        toolbar: toolbarOptions
      }
   

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
        <h2 className="text-2xl pb-2 text-sky-50 font-semibold text-center">{column.title}</h2>
        <Droppable droppableId={column.id} type="CARD">
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {column.cards.map((card, index) => (
                <Draggable key={card.id} draggableId={card.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      className="bg-sky-200 p-2 m-2 rounded"
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
        <div className="mt-4 mb-4 block mx-auto text-white">
          {/* <input
          
            type="text"
            placeholder="Enter task..."
            value={newTaskContent}
            onChange={handleInputChange}
            className="border  ml-3 p-2"
          /> */}
       <ReactQuill className="text-white" modules={module} theme="snow" value={newTaskContent} onChange={handleInputChange} />
          <button onClick={handleAddTask} className="mt-2 bg-[#10a0a0] text-white py-2 px-2 rounded-r">
            Add Task
          </button>
        </div>
      </div>
    );
};

export default Column;