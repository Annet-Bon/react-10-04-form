import './TaskList.css';
import { TaskListItem } from '../TaskListItem';

export const TaskList = ({ tasks, removeTaskOnClick, updateTask }) => (
        <ul className="TaskList">
            {tasks.map(({ id, text, completed }) =>
                <TaskListItem
                    key={id}
                    text={text}
                    onRemove={() => removeTaskOnClick(id)}
                    onUpdateTask={() => updateTask(id)}
    // Для передачи значения кроме события, вписываем анонимную функцию
                />)}
        </ul>
)