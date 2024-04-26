import type { Metadata } from 'next'
import { Products } from './Products'

export const metadata: Metadata = {
	title: 'Products',
}

// export async function generateMetadata({
// 	params,
// }: {
// 	params: { slug }
// }): Promise<Metadata> {
// 	const product = await getData(slug)
// 	return { title: product.title }
// }

export const revalidate = 3600 // 1 hour

// SSR, SSG, ISR,

/* const fetchData = async () => {
	const response = await fetch('https://api.example.com/products', {
		cache: 'force-cache',
		next: {
			revalidate: 3600, //1hours
		},
	})

	const data = await response.json()
	return data
}
 */
export default async function Page() {
	// const data = await fetchData()

	// if (!data) notFound()

	return <Products />
}
