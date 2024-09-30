import style from './style.module.css'

const DocIdPage = ({ params }) => {
  return <div className={style.title}>id {params.id}</div>
}

export default DocIdPage
