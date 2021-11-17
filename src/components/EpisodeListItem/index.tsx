import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Episode } from '../../generated/graphql'
import { RouteNames } from '../../utils/consts'
import { readableSeason } from '../../utils/readableSeason'

import * as S from './styles'

type EpisodeProps = {
	episode: Episode
	index: number
}

export function EpisodeListItem({ episode, index }: EpisodeProps) {
	const navigation = useNavigation()

	return (
		<S.Container onPress={() => navigation.navigate(RouteNames.EpisodeDetailsScreen, { episode })}>
			<S.Number>{index + 1}.</S.Number>
			<S.Details>
				<S.Name>{episode.name}</S.Name>
				<S.Episode>{readableSeason(episode.episode!)}</S.Episode>
				<S.AirDate>Went live in {episode.air_date}</S.AirDate>
			</S.Details>
		</S.Container>
	)
}
