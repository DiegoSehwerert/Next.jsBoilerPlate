import Image from 'next/image'
import NewTodoForm from '@/components/NewTodoForm'

const getData = async () => {
  await new Promise((res) => setTimeout(res, 1000))
  return { data: [1, 2, 3, 4, 5] }
}

const Home = async () => {
  const { data } = await getData()
  console.log(data)
  return (
    <div>
      <NewTodoForm />
    </div>
  )
}

export default Home
