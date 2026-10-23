
import TaskItem from './TaskItem'

type TaskListProps = {
    title: string
}

type Tasks = {
    id: string,
    title: string,
    done: boolean
}

function TaskList({ title }: TaskListProps) {


    const tasks: Tasks[] = [
        { id: '1', title: 'Task 1', done: true },
        { id: '2', title: 'Task 2', done: false },
        { id: '3', title: 'Task 3', done: true },
    ]

    // ДЗ Перенсти контейнер в компонент TaskItem (удалить его вызов в App) +
    // Передать как проп title, done (id желателтьно) +
    // Почитать про key +
    
    return (
    <div>
        <h2>{title}</h2>
        {tasks.map((task) => (
            <TaskItem
                key={task.id}
                id={task.id}
                title={task.title}
                done={task.done}
            />
        ))}
    </div>
)
}

export default TaskList