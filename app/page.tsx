import Image from 'next/image'
import UserPage from './users/page'
import Link from 'next/link'
import ProductCard from './components/ProductCard'


export default function Home() {

  


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home</h1>
      <div>
        
      </div>
      <Link href="/users">User</Link>

      <ProductCard />
    </main>
  )
}
