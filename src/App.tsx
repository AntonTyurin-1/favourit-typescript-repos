import React, {useState, useEffect} from 'react'
import './App.css'
import {ReposList} from './components/ReposList/ReposList'
import axios from 'axios'
import {IRepos, ServerRespons} from './types/types'

function App() {
	const [repos, setRepos] = useState<any>([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const url =
			'https://api.github.com/search/repositories?q=language:typescript&sort=stars&order=desc'
		axios.get(url).then((resp) => {
			const allRepos = resp.data.items
			setRepos(allRepos)
			setLoading(false)
		})
	}, [setRepos])
	
	
	return (
		<>
			<ReposList
				repos={repos}
				loading={loading}
			/>
		</>
	)
}

export default App
