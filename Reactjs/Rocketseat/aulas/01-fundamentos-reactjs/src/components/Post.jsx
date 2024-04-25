import { format, formatDistanceToNow } from 'date-fns'; 
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post ({ author,publishedAt }) {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  // Essa variável vai armazenar a data de publicação do post relativa a data atual
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p> 👉 {' '} <a href="#">jane.design/doctorcare</a></p>

        <p>
          <a href="#">#novoprojeto</a>{' '} 
          <a href="">#nlw </a>{' '} 
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder='Deixe um comentário'
        />

         {/* Criando footer em volta do botão 
         para Botão de publicar aparecer somente quando 
         usuário estiver com a textarea focada   */}
        <footer>
          <button type='submit'>Publicar</button>
          </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}