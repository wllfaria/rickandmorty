import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useRoute } from '@react-navigation/core'
import SkeletonContent from 'react-native-skeleton-content'
import { Character, useCharacterQuery } from '../../generated/graphql'

import * as S from './styles'
import { BackButton } from '../../components/BackButton'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SpoilerText } from '../../components/SpoilerText'
import { shapeLocationName } from '../../utils/shapeLocationName'
import { Platform } from 'react-native'

type CharacterDetailsScreenProps = {
	character: Character
}

export function CharacterDetailsScreen() {
	const { params } = useRoute()
	const insets = useSafeAreaInsets()
	const { character } = params as CharacterDetailsScreenProps
	const [characterQueryResult] = useCharacterQuery({
		variables: { id: character.id as string }
	})
	const characterData = characterQueryResult.data?.character

	return (
		<S.Container insets={insets}>
			{Platform.OS === 'ios' && <StatusBar hidden />}
			<SkeletonContent
				isLoading={characterQueryResult.fetching}
				containerStyle={{ justifyContent: 'flex-start', flex: 1 }}
				boneColor='#deeaee'
				layout={[
					{ width: '100%', height: 400, marginBottom: 16 },
					{ width: '60%', height: 48, marginLeft: 16, marginBottom: 16 },
					{ width: '80%', height: 150, marginLeft: 16, marginBottom: 16 },
					{ width: '55%', height: 85, marginLeft: 16 }
				]}
			>
				<S.BackButtonContainer insets={insets}>
					<BackButton />
				</S.BackButtonContainer>

				<S.CharacterInformation showsVerticalScrollIndicator={false}>
					<S.Avatar source={{ uri: characterData?.image as string }} resizeMode='cover' />

					<S.DetailsWrapper>
						<S.Label>NAME</S.Label>
						<S.Name>{characterData?.name}</S.Name>

						<S.DetailsGrid>
							<S.Col>
								<S.Label>GENDER</S.Label>
								<S.Detail>{characterData?.gender}</S.Detail>
							</S.Col>

							<S.Col>
								<S.Label>SPECIE</S.Label>
								<S.Detail>{characterData?.species}</S.Detail>
							</S.Col>

							<S.Col>
								<S.Label>STATUS</S.Label>
								<SpoilerText>
									<S.Detail>{characterData?.status}</S.Detail>
								</SpoilerText>
							</S.Col>
						</S.DetailsGrid>

						<S.DetailsGrid>
							<S.Col>
								<S.Label>ORIGIN</S.Label>
								<S.Detail>{shapeLocationName(characterData?.origin?.name as string)}</S.Detail>
							</S.Col>

							{characterData?.origin?.dimension && (
								<S.Col>
									<S.Label>DIMENSION</S.Label>
									<S.Detail>{characterData.origin.dimension}</S.Detail>
								</S.Col>
							)}

							{characterData?.origin?.type && (
								<S.Col>
									<S.Label>TYPE</S.Label>
									<S.Detail>{characterData.origin.type}</S.Detail>
								</S.Col>
							)}
						</S.DetailsGrid>

						<S.DetailsGrid>
							<S.Col>
								<S.Label>LOCATION</S.Label>
								<S.Detail>{shapeLocationName(characterData?.location?.name as string)}</S.Detail>
							</S.Col>

							<S.Col>
								<S.Label>DIMENSION</S.Label>
								<S.Detail>{characterData?.location?.dimension}</S.Detail>
							</S.Col>

							<S.Col>
								<S.Label>TYPE</S.Label>
								<S.Detail>{characterData?.location?.type}</S.Detail>
							</S.Col>
						</S.DetailsGrid>
					</S.DetailsWrapper>
				</S.CharacterInformation>
			</SkeletonContent>
		</S.Container>
	)
}
