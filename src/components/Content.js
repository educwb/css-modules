import style from './Content.module.css'

const Content = () => {
  return (
    <div className={style.content}>
      <h2>Título</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia culpa quo incidunt est impedit, maxime ex! Corrupti vitae fuga repudiandae eligendi quas mollitia reprehenderit at aspernatur! Rem ratione odio odit?
      </p>
      <button className={style.btn}>Outro Botão Teste</button>
    </div>
  )
}

export default Content