import React from 'react'
import { TextInputProps } from 'react-native'

import * as S from './styles'

type InputProps = TextInputProps

export function Input({ placeholder, value, onChangeText }: InputProps) {
	return <S.Input placeholder={placeholder} onChangeText={onChangeText} value={value} placeholderTextColor='#aaaaaa' />
}
