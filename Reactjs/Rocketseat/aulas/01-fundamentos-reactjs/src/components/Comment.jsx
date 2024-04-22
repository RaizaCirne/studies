import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/pedromarins.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Pedro Marins</strong>
              <time title='11 de Maio às 08:13' dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
            </div>
             
             {/* Todo botão que é ícone, sem texto, colocar title - leitores de tela saber do que se trata. Ícone é só visual, não diz nada. */}
            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>

          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>

        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}