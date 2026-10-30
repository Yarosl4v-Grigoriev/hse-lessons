import Header from './components/Header'
import StatsList from './components/StatsList'
import Content from './components/Content'
import ProjectList from './components/ProjectList'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'
import { defaultStats, defaultProjects } from './data'

function App() {
  return (
    <div className="app">
      <Header />
      <StatsList stats={defaultStats} />
      <Content>
        <ProjectList projects={defaultProjects} />
        <CtaBanner />
      </Content>
      <Footer />
    </div>
  )
}

export default App
