import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { RouteNames } from '../../utils/consts'
import * as S from './styles'

type CharacterListItemProps = {
	item: { image: string; name: string }
}

export default function CharacterListItem({ item }: CharacterListItemProps) {
	const navigation = useNavigation()

	function navigateToCharacterDetails() {
		navigation.navigate(RouteNames.CharacterDetailsScreen, {
			character: item
		})
	}

	return (
		<S.Container onPress={navigateToCharacterDetails}>
			<S.Avatar source={{ uri: item.image as string }} />
			<S.Name>{item.name}</S.Name>
		</S.Container>
	)
}
