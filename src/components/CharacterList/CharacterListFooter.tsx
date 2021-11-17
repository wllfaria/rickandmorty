import React from 'react'
import { ActivityIndicator } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import * as S from './styles'

type CharacterListFooterProps = {
	isLoading?: boolean
	randomQuote: string
}

export default function CharacterListFooter({ isLoading, randomQuote }: CharacterListFooterProps) {
	const insets = useSafeAreaInsets()

	return (
		<S.Footer insets={insets}>
			{isLoading && <ActivityIndicator style={{ marginBottom: 16 }} animating />}
			<S.FooterQuote>&apos;{randomQuote}&apos;</S.FooterQuote>
		</S.Footer>
	)
}
