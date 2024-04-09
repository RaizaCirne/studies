import { Post } from './Post';

export function App() {
  return (
      <div>
        <Post 
          author="Diego Fernandes" 
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur esse atque ipsam et similique quis aspernatur tenetur aperiam eius tempore harum perferendis molestias in impedit ratione, corporis ab ipsum excepturi!" 
        />
        <Post 
        author="Gabriel Buzzi" 
        content="Um novo post muito legal" 
        />
      </div>
  )
}

