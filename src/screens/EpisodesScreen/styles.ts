import { EdgeInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

type InsetsProps = {
	insets: EdgeInsets
}

export const Container = styled.View<InsetsProps>`
	padding-top: ${props => props.insets.top + 16}px;
	flex: 1;
	background-color: white;
`

export const Title = styled.Text`
	font-size: 48px;
	font-weight: bold;
	padding-left: 16px;
	margin-bottom: 8px;
`

export const Description = styled.Text`
	font-size: 24px;
	padding-left: 16px;
	margin-bottom: 16px;
	color: #707070;
`

export const Footer = styled.View<InsetsProps>`
	height: ${props => props.insets.bottom + 16}px;
`
