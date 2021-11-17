import React from 'react'
import * as S from './styles'

type CharacterListHeaderProps = {
	showTitle?: boolean
}

export default function CharacterListHeader({ showTitle }: CharacterListHeaderProps) {
	if (!showTitle) return <></>

	return (
		<S.Header>
			<S.HeaderName>Characters</S.HeaderName>
		</S.Header>
	)
}
