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

			<div className='card_info'>
				<h2 className='card__name'> {rep.name}</h2>
				<p className='card__text'>
					<span>Language: {rep.language}</span>
					<span className=''>Forks: {rep.forks}</span>
					<span className=''>Watchers: {rep.watchers}</span>
				</p>
				<p className='card__description'> <span>Description: {rep.description}</span></p>
			</div>
		</div>
	)
}
