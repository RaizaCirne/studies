import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';
import { Paragraph } from '@phosphor-icons/react';
// author: { avatar_url: “”, name: “”, role: “”}
// publishedAt: Date
// content: String

// array com todos os posts que a aplicação vai ter
// Como o post tem várias informações dentro dele, cada posição dentro do array vai ser um objeto.
// Um array de objetos: um array com vários posts 


const post = [
  {
    id: 1, 
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes', 
      role: 'CTO @Rocketseat'
    },
    // cada linha do post como sendo uma posição no array
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋' },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      {type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-04-23 20:00:00'),
  },
  {
    id: 2, 
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito', 
      role: 'Educator @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋' },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      {type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-04-22 20:00:00'),
  },
]; 

export function App() {
  return (
      <div>
        <Header/>

        <div className={styles.wrapper}>
          <Sidebar />
          <main>
              {post.map(post => {
                return (
                  < Post 
                  author = {post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                  />
              )
              })}
          </main>
        </div>
      </div>
  )
}