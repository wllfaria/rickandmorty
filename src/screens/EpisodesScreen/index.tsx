import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import SkeletonContent from 'react-native-skeleton-content'
import { EpisodeListItem } from '../../components/EpisodeListItem'
import { Episode, useEpisodesQuery } from '../../generated/graphql'

import * as S from './styles'

export function EpisodesScreen() {
	const insets = useSafeAreaInsets()
	const [page, setPage] = useState<number>(1)
	const [isFirstFetch, setIsFirstFetch] = useState(true)
	const [episodes, setEpisodes] = useState<Episode[]>([])
	const [episodesResult, reExecuteEpisodesQuery] = useEpisodesQuery({
		variables: { page }
	})

	function handleLoadMore() {
		const nextPage = episodesResult.data?.episodes?.info?.next
		if (!nextPage) return
		setPage(nextPage)
		reExecuteEpisodesQuery()
	}

	useEffect(() => {
		const currentEpisodes = episodesResult.data?.episodes?.results as Episode[]
		if (!episodesResult.fetching) {
			setIsFirstFetch(false)
			setEpisodes([...episodes, ...currentEpisodes])
		}
	}, [episodesResult])

	if (episodesResult.error) {
		// Make ErrorBoundary display network error component
		throw new Error(
			'Displaying error boundary. On expo this may show an red error screen, but when built, app will display fallback UI screen displaying the error. You can see that screen dismissing this error.'
		)
	}

	return (
		<SkeletonContent
			isLoading={episodesResult.fetching && isFirstFetch}
			containerStyle={{ flexGrow: 1 }}
			layout={[
				{ width: '100%', height: 100, marginBottom: 16, marginTop: 150 },
				{ width: '100%', height: 100, marginBottom: 16 },
				{ width: '100%', height: 100, marginBottom: 16 },
				{ width: '100%', height: 100, marginBottom: 16 },
				{ width: '100%', height: 100, marginBottom: 16 },
				{ width: '100%', height: 100, marginBottom: 16 },
				{ width: '100%', height: 100, marginBottom: 16 },
				{ width: '100%', height: 100, marginBottom: 16 }
			]}
		>
			<S.Container insets={insets}>
				<S.Title>Episodes</S.Title>
				<S.Description>Choose an episode</S.Description>
				<FlatList
					data={episodes}
					contentContainerStyle={{ flexGrow: 1 }}
					renderItem={({ item, index }) => <EpisodeListItem episode={item} index={index} />}
					ListFooterComponent={() => (
						<S.Footer insets={insets}>{episodesResult.fetching && !isFirstFetch && <ActivityIndicator animating />}</S.Footer>
					)}
					showsVerticalScrollIndicator={false}
					onEndReached={handleLoadMore}
					onEndReachedThreshold={0}
				/>
			</S.Container>
		</SkeletonContent>
	)
}
