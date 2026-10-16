import TaskList from "./components/TaskList"


function App() {
  const title: string = 'Hello word'
  const count: number = 10

  return (
    <div className="test1">
      <TaskList title={title}/>
    </div>
  )
}

export default App
