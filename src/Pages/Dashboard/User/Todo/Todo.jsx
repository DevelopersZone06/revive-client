import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "./Column";
import { useEffect, useState } from "react";


const Todo = () => {
    const storedColumns = localStorage.getItem('kanbanBoardColumns');
  const initialColumns = storedColumns ? JSON.parse(storedColumns) : [
    {
      id: '1',
      title: 'To Do',
      cards: [{ id: '1', content: 'Task 1' }, { id: '2', content: 'Task 2' }],
    },
    {
      id: '2',
      title: 'In Progress',
      cards: [{ id: '3', content: 'Task 3' }],
    },
    {
      id: '3',
      title: 'Done',
      cards: [{ id: '4', content: 'Task 4' }],
    },
  ];

  const [columns, setColumns] = useState(initialColumns);

  useEffect(() => {
    // Save columns to local storage whenever it changes
    localStorage.setItem('kanbanBoardColumns', JSON.stringify(columns));
  }, [columns]);

  const handleAddTask = (columnId, taskContent) => {
    setColumns(prevColumns => {
      return prevColumns.map(column => {
        if (column.id === columnId) {
          return {
            ...column,
            cards: [...column.cards, { id: Date.now().toString(), content: taskContent }],
          };
        }
        return column;
      });
    });
  };
  // Handler for drag and drop functionality
  const handleDragEnd = result => {
    const { source, destination, draggableId } = result;
    // Check if there's a valid destination
    if (!destination) {
      return;
    }
    // If the draggable hasn't moved, do nothing
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    // Find the start and end columns
    const newColumns = [...columns];
    const startColumn = newColumns.find(column => column.id === source.droppableId);
    const endColumn = newColumns.find(column => column.id === destination.droppableId);
    // Find the dragged card
    const draggedCard = startColumn.cards.find(card => card.id === draggableId);

    // Remove the card from the start column
    startColumn.cards.splice(source.index, 1);
    // Insert the card into the end column
    endColumn.cards.splice(destination.index, 0, draggedCard);

    // Update state with the new columns
    setColumns(newColumns);
  };
    return (
        <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="board" direction="horizontal" type="COLUMN">
          {provided => (
            <div className="flex flex-col md:flex-row bg-sky-950 mt-4" {...provided.droppableProps} ref={provided.innerRef}>
              {columns.map((column, index) => (
                <Column key={column.id} column={column} index={index} onAddTask={handleAddTask} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
};

export default Todo;