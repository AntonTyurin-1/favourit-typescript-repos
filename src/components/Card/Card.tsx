import React, {FC} from 'react'
import './style.css'
import {IRepository} from '../../types/types'
type Props = {
	data: IRepository
}
export const Card: FC<Props> = ({data}) => {
	console.log(data)

	return (
		<div className='card'>
			<div className='card__img'>
				<img
					src={data.owner.avatar_url}
					alt='foto'
				/>
			</div>
			<div className='card_info'>
				<a
					href={data.owner.html_url}
					target='_blank'
					rel='noreferrer'>
					<h2 className='card__name'> {data.full_name}</h2>
				</a>

				<p className='card__text'>
					<span>
						Language: <strong>{data.language}</strong>
					</span>
					<span>
						Forks:<strong>{data.forks}</strong>
					</span>
					<span>
						Watchers: <strong>{data.watchers}</strong>
					</span>
				</p>
				<p className='card__description'>
					<span>Description: {data.description}</span>
				</p>
			</div>
		</div>
	)
}
