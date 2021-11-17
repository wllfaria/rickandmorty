import React, { useCallback, useMemo } from 'react'
import { Character } from '../../generated/graphql'
import { useRandomQuote } from '../../hooks/useRandomQuote'
import CharacterListHeader from './CharacterListHeader'
import CharacterListFooter from './CharacterListFooter'
import CharacterListItem from './CharacterListItem'
import * as S from './styles'

type CharacterListItemProps = {
	characters: Character[]
	handleLoadMore?: () => void
	isLoading?: boolean
	showTitle?: boolean
}

export default function CharacterList({ characters, handleLoadMore, isLoading, showTitle }: CharacterListItemProps) {
	const randomQuote = useMemo(() => useRandomQuote(), [])

	return (
		<S.FlatList
			style={{ flex: 1 }}
			data={characters}
			numColumns={2}
			keyExtractor={useCallback(() => (Math.floor(Math.random() * 10000) + 1).toString(), [])}
			showsVerticalScrollIndicator={false}
			maxToRenderPerBatch={6}
			windowSize={6}
			getItemLayout={useCallback((_, index) => ({ length: 200, offset: 200 * index, index }), [])}
			columnWrapperStyle={{ justifyContent: 'space-between' }}
			onEndReachedThreshold={0.01}
			onEndReached={handleLoadMore}
			ListHeaderComponent={useCallback(
				() => (
					<CharacterListHeader showTitle={showTitle} />
				),
				[]
			)}
			ListFooterComponent={useCallback(
				() => (
					<CharacterListFooter isLoading={isLoading} randomQuote={randomQuote} />
				),
				[]
			)}
			renderItem={useCallback(
				({ item }) => (
					<CharacterListItem item={item} />
				),
				[]
			)}
		/>
	)
}
