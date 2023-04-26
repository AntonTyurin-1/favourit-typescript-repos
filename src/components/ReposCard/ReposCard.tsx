import React, {FC} from 'react'
import {IOwner, IRepos} from '../../types/types'
import './ReposCard.css'
export const ReposCard = ({rep}: any) => {
	console.log(rep)

	return (
		<div className='card'>
			<div className='card__img'>
				<img
					src={rep.owner.avatar_url}
					alt='foto'
				/>
			</div>

			<div>
				<h2 className='card__name'> {rep.name}</h2>
				<p className='card__info'>
					Forks: <span className=''>{rep.forks}</span>
					Watchers: <span className=''>{rep.watchers}</span>
				</p>
				<p className='card__description'> {rep.description}</p>
			</div>
		</div>
	)
}
