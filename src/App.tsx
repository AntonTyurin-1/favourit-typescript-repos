import React, {useState, useEffect} from 'react'
import './App.css'
import {ReposList} from './components/ReposList/ReposList'
import axios from 'axios'
import {IRepos, ServerRespons} from './types/types'
import {Header} from './components/Header/Header'
import {Footer} from './components/Footer/Footer'

function App() {
	const [repos, setRepos] = useState<any>([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		const url =
			'https://api.github.com/search/repositories?q=language:typescript&sort=stars&order=desc'
		axios.get(url).then((resp) => {
			const allRepos = resp.data.items
			setRepos(allRepos)
			setLoading(false)
		})
	}, [setRepos])

	return (
		<div className='app'>
			<Header />
			<ReposList
				repos={repos}
				loading={loading}
			/>
			<Footer />
		</div>
	)
}

export default App
