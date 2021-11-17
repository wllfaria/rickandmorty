import React, { useEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import SkeletonContent from 'react-native-skeleton-content'
import CharacterList from '../../components/CharacterList'
import { SearchInput } from '../../components/SearchInput'
import { Character, CharactersQueryVariables, useCharactersQuery } from '../../generated/graphql'

import * as S from './styles'

export function CharactersScreen() {
	const insets = useSafeAreaInsets()
	const [page, setPage] = useState(1)
	const [isFirstSearchQuery, setIsFirstSearchQuery] = useState(false)
	const [filter, setFilter] = useState<CharactersQueryVariables['filter']>({
		name: ''
	})
	const [characters, setCharacters] = useState<Character[]>([])
	const [isFirstFetch, setIsFirstFetch] = useState(true)
	const [charactersResult, reExecuteCharactersQuery] = useCharactersQuery({
		variables: { page, filter }
	})

	function handleLoadMore() {
		const nextPage = charactersResult.data?.characters?.info?.next
		if (!nextPage) return
		setPage(nextPage)
		reExecuteCharactersQuery()
	}

	function handleSearch(searchTerm: string) {
		setPage(1)
		setIsFirstSearchQuery(true)
		setFilter({ name: searchTerm })
	}

	useEffect(() => {
		if (!filter?.name) {
			setIsFirstSearchQuery(true)
			setPage(1)
		}

		const timeoutId = setTimeout(() => reExecuteCharactersQuery(), 500)
		return () => clearTimeout(timeoutId)
	}, [filter?.name])

	useEffect(() => {
		const currentCharacters = charactersResult.data?.characters?.results as Character[]

		const totalCharacters = isFirstSearchQuery ? [] : [...characters]

		setIsFirstSearchQuery(false)

		if (!charactersResult.fetching) {
			setIsFirstFetch(false)
			setCharacters([...totalCharacters, ...currentCharacters])
		}
	}, [charactersResult.fetching])

	return (
		<SkeletonContent
			isLoading={charactersResult.fetching && isFirstFetch}
			containerStyle={{
				flexGrow: 1,
				flexDirection: charactersResult.fetching ? 'row' : 'column',
				flexWrap: 'wrap',
				justifyContent: charactersResult.fetching ? 'space-between' : 'flex-start',
				paddingRight: charactersResult.fetching ? 16 : 0,
				paddingLeft: charactersResult.fetching ? 16 : 0,
				marginTop: charactersResult.fetching ? 32 : 0
			}}
			layout={[
				{ width: '70%', height: 48, marginBottom: 16 },
				{ width: '49%', height: 150, marginBottom: 16 },
				{ width: '49%', height: 150, marginBottom: 16 },
				{ width: '49%', height: 150, marginBottom: 16 },
				{ width: '49%', height: 150, marginBottom: 16 },
				{ width: '49%', height: 150, marginBottom: 16 },
				{ width: '49%', height: 150, marginBottom: 16 },
				{ width: '49%', height: 150, marginBottom: 16 },
				{ width: '49%', height: 150, marginBottom: 16 }
			]}
		>
			<S.Container insets={insets}>
				<S.Title>Characters</S.Title>
				<SearchInput placeholder='Type a character name' value={filter?.name as string} onChangeText={handleSearch} />
				<CharacterList characters={characters} handleLoadMore={handleLoadMore} isLoading={charactersResult.fetching} />
			</S.Container>
		</SkeletonContent>
	)
}
