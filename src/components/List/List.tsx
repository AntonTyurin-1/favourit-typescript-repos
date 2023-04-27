import React, {useState, useEffect, FC} from 'react'
import {IRepository} from '../../types/types'
import {Loader} from '../Loader/Loader'
import {Card} from '../Card/Card'
import axios from 'axios'
import './style.css'
export const List: FC = () => {
	const [data, setData] = useState<IRepository[]>([])
	const [loading, setLoading] = useState(false)
	const getData = async () => {
		setLoading(true)
		try {
			const response = await axios.get<{items: IRepository[]}>(
				'https://api.github.com/search/repositories?q=language:typescript&sort=stars&order=desc'
			)
			setData(response.data.items)

			setLoading(false)
		} catch (error) {
			console.error(error)
			setLoading(false)
		}
	}
	useEffect(() => {
		getData()
	}, [])

	if (loading) return <Loader />
	return (
		<div className='app'>
			<header className='header'>
				<div className='header__content'>
					<h2>The most popular TS projects</h2>
				</div>
			</header>

			<main className='main'>
				<div className='main__content'>
					{data?.map((item) => (
						<Card
							key={item.id}
							data={item}
						/>
					))}
				</div>
			</main>

			<footer className='footer'>
				<div className='footer__content'>
					<span>created by @AntTyurin</span>
				</div>
			</footer>
		</div>
	)
}
