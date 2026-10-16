
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

    // ДЗ Перенсти контейнер в компонент TaskItem (удалить его вызов в App)
    // Передать как проп title, done (id желателтьно)
    // Почитать про key
    
    return (
        <div>
            {tasks.map((task) => (
                <div key={task.id}>
                    <h1>{task.title}</h1>
                    <p>{task.done+''}</p>
                </div>
            ))}
        </div>
    )
}

export default TaskList