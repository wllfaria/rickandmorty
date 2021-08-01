import { EdgeInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

type InsetsProps = {
	insets: EdgeInsets
}

export const Header = styled.View`
	padding-bottom: 16px;
`

export const Container = styled.View<InsetsProps>`
	padding-top: ${props => props.insets.top}px;
	padding-left: 16px;
	flex: 1;
	background: white;
	padding-right: 16px;
`

export const Name = styled.Text`
	font-size: 48px;
	margin-top: 16px;
	margin-bottom: 8px;
	font-weight: bold;
`

export const Description = styled.Text`
	font-size: 20px;
`
