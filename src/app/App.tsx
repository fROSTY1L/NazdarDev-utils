import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

interface Item {
  id: number
  title: string
  created_at: string
}

function App() {
  const [items, setItems] = useState<Item[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      console.log('Начинаю запрос...')
      
      try {
        const { data, error } = await supabase
          .from('articles')
          .select('*')
          .order('created_at', { ascending: false })

        console.log('Ответ от Supabase:', { data, error })

        if (error) {
          setError(error.message)
          console.error('Ошибка Supabase:', error)
        } else {
          setItems(data ?? [])
        }
      } catch (err) {
        console.error('Критическая ошибка:', err)
        setError(err instanceof Error ? err.message : 'Неизвестная ошибка')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <p>Загрузка...</p>
  if (error) return <p>Ошибка: {error}</p>

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  )
}

export default App