import { Feather } from '@expo/vector-icons'
import React from 'react'
import { TextInputProps } from 'react-native'
import { Input } from '../Input'

import * as S from './styles'

type SearchInputProps = Pick<TextInputProps, 'placeholder' | 'onChangeText' | 'value'>

export function SearchInput({ placeholder, value, onChangeText }: SearchInputProps) {
	return (
		<S.Container>
			<Input placeholder={placeholder} onChangeText={onChangeText} value={value} />
			<S.IconContainer>
				<Feather name='search' size={20} color='#777777' />
			</S.IconContainer>
		</S.Container>
	)
}
