import { useRoute } from '@react-navigation/native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { BackButton } from '../../components/BackButton'
import CharacterList from '../../components/CharacterList'
import { Character, Episode } from '../../generated/graphql'
import { readableSeason } from '../../utils/readableSeason'

import * as S from './styles'

type EpisodeDetailsScreenProps = {
	episode: Episode
}

export function EpisodeDetailsScreen() {
	const { params } = useRoute()
	const insets = useSafeAreaInsets()
	const { episode } = params as EpisodeDetailsScreenProps

	return (
		<S.Container insets={insets}>
			<BackButton />
			<S.Header>
				<S.Name>{episode.name}</S.Name>
				<S.Description>
					{readableSeason(episode.episode as string)}
				</S.Description>
				<S.Description>Went live in {episode.air_date}</S.Description>
			</S.Header>
			<CharacterList showTitle characters={episode.characters as Character[]} />
		</S.Container>
	)
}
