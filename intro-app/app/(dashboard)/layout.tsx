import NewTodoForm from '@/components/NewTodoForm'

const DashBoardLayout = ({ children }) => {
  return (
    <div>
      <h1>dashboard</h1>
      <div>
        <NewTodoForm />
      </div>
      <div>{children}</div>
    </div>
  )
}

export default DashBoardLayout
