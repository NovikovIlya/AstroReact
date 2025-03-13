import {useState} from 'react';

export default function HelloWorld() {
  const [state,setState] = useState(false)
  
  return (
    <div className="hello-world">
      <h1 className='text-9xl'>Привет,s мир!</h1>
      <p onClick={()=>setState(true)}>Это мой первый компонент на React в Astro</p>
      {state?'ss':''}
    </div>
  );
}