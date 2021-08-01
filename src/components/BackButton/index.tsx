import { useNavigation } from '@react-navigation/core'
import React from 'react'
import * as S from './styles'

type BackButtonProps = {
	text?: string
}

export function BackButton({ text = 'Back' }: BackButtonProps) {
	const navigation = useNavigation()

	return (
		<S.Button onPress={() => navigation.goBack()}>
			<S.Text>{text}</S.Text>
		</S.Button>
	)
}
