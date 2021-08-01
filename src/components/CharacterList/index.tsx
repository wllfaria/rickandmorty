import { useNavigation } from '@react-navigation/core'
import React, { useCallback, useMemo } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Character } from '../../generated/graphql'
import { useRandomQuote } from '../../hooks/useRandomQuote'
import { RouteNames } from '../../utils/consts'

import * as S from './styles'

type CharacterListItemProps = {
	characters: Character[]
	handleLoadMore?: () => void
	isLoading?: boolean
	showTitle?: boolean
}

export default function CharacterList({
	characters,
	handleLoadMore,
	isLoading,
	showTitle
}: CharacterListItemProps) {
	const navigation = useNavigation()
	const insets = useSafeAreaInsets()
	const randomQuote = useMemo(() => useRandomQuote(), [])

	return (
		<FlatList
			data={characters}
			numColumns={2}
			// keyExtractor={item => item?.id as string}
			keyExtractor={useCallback(
				item => (Math.floor(Math.random() * 10000) + 1).toString(),
				[]
			)}
			showsVerticalScrollIndicator={false}
			maxToRenderPerBatch={6}
			windowSize={6}
			getItemLayout={useCallback(
				(data, index) => ({ length: 200, offset: 200 * index, index }),
				[]
			)}
			columnWrapperStyle={{ justifyContent: 'space-between' }}
			onEndReachedThreshold={0.01}
			onEndReached={handleLoadMore}
			ListHeaderComponent={() => {
				if (!showTitle) return <></>
				return (
					<S.Header>
						<S.HeaderName>Characters</S.HeaderName>
					</S.Header>
				)
			}}
			ListFooterComponent={() => (
				<S.Footer insets={insets}>
					{isLoading && (
						<ActivityIndicator style={{ marginBottom: 16 }} animating />
					)}
					<S.FooterQuote>&apos;{randomQuote}&apos;</S.FooterQuote>
				</S.Footer>
			)}
			renderItem={useCallback(
				({ item }) => (
					<S.Container
						onPress={() =>
							navigation.navigate(RouteNames.CharacterDetailsScreen, {
								character: item
							})
						}
					>
						<S.Avatar source={{ uri: item.image as string }} />
						<S.Name>{item.name}</S.Name>
					</S.Container>
				),
				[]
			)}
		/>
	)
}
