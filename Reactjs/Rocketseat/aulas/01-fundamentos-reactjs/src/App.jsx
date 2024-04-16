import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
      <div>
        <Header/>

        <div className={styles.wrapper}>
          <Sidebar />
          <main>
              <Post 
                author="Diego Fernandes" 
                content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur esse atque ipsam et similique quis aspernatur tenetur aperiam eius tempore harum perferendis molestias in impedit ratione, corporis ab ipsum excepturi!" 
            />
            <Post 
              author="Gabriel Buzzi" 
              content="Um novo post muito legal" 
            />
          </main>
        </div>
      </div>
  )
}

