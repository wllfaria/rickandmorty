import React, { useState } from 'react'

import * as S from './styles'

type SpoilerTextProps = {
	children: React.ReactNode
}

export function SpoilerText({ children }: SpoilerTextProps) {
	const [isShown, setIsShown] = useState(false)

	return (
		<S.Spoiler isShown={isShown} onPress={() => setIsShown(true)}>
			{isShown && children}
			{!isShown && <S.SpoilerText>Spoiler</S.SpoilerText>}
		</S.Spoiler>
	)
}
