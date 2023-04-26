import React, {FC} from 'react'
import {ReposCard} from '../ReposCard/ReposCard'
import './ReposList.css'
import {IRepos} from '../../types/types'
import {Loader} from '../Loader/Loader'
export const ReposList = ({repos, loading}: any) => {
	return (
		<div className='repos_list'>
			{loading ? (
				<Loader />
			) : (
				repos.map((rep: any) => <ReposCard key={rep.id} rep= {rep}/>)
			)}
		</div>
	)
}
