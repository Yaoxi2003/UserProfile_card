import Card from './Card'
import Data from './Data'

function App() {

  const card = Data.map(
    entry => <Card key={entry.id} {...entry}/>
  )

  return (
    <>
      <main className='w-screen h-screen bg-slate-300 flex justify-center items-center'>
        {card}
      </main>
    </>
  )
}

export default App
