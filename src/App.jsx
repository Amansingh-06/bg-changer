import { useState } from 'react'


function App() {
  const [color, setColor] = useState("Black")

  return (
    <div className='w-full h-screen' style={{background:color}}>
      <div className=" fixed flex justify-center bottom-12 flex-wrap inset-x-0 px-2" >
        <div className=' flex justify-center bg-slate-400 p-3 rounded-3xl gap-3'>
          <button className='bg-red-600 px-6 py-2 rounded-full'
          onClick={()=>setColor("red")}>Red</button>
          <button className='bg-blue-500 px-6 py-2 rounded-full'
            onClick={() => setColor("blue")}>Blue</button>
          <button className='bg-green-500 px-6 py-2 rounded-full'
            onClick={() => setColor("green")}>Green</button>
          <button className='bg-yellow-500 px-6 py-2 rounded-full'
            onClick={() => setColor("yellow")}>Yellow</button>
          <button className='bg-white px-6 py-2 rounded-full'
            onClick={() => setColor("white")}>White</button>
          <button className='bg-black text-white px-6 py-2 rounded-full'
            onClick={() => setColor("black")}>Black</button>
          <button className='bg-pink-600 px-6 py-2 rounded-full'
            onClick={() => setColor("pink")}>Pink</button>
          <button className='bg-green-700 px-6 py-2 rounded-full'
            onClick={() => setColor("Olive")}>Olive</button>
          
      </div>
      </div>
    </div>
  )
}

export default App
