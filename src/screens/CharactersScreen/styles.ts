import { EdgeInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

type InsetsProps = {
	insets: EdgeInsets
}

export const Container = styled.View<InsetsProps>`
	flex: 1;
	background-color: white;
	padding-left: 16px;
	padding-right: 16px;
	padding-top: ${props => props.insets.top}px;
`

export const Title = styled.Text`
	font-size: 48px;
	margin-bottom: 16px;
	font-weight: bold;
`
