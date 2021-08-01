import { EdgeInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

type InsetsProps = {
	insets: EdgeInsets
}

export const Header = styled.View`
	padding-bottom: 16px;
`

export const HeaderName = styled.Text`
	font-size: 48px;
	margin-top: 16px;
	margin-bottom: 8px;
	font-weight: bold;
`

export const Container = styled.TouchableOpacity`
	flex-grow: 1;
	flex-basis: 0;
	max-width: 49%;
`

export const Avatar = styled.Image`
	width: 100%;
	height: 200px;
`

export const Name = styled.Text`
	font-size: 24px;
	font-weight: bold;
	margin-top: 8px;
	margin-bottom: 16px;
`

export const Footer = styled.View<InsetsProps>`
	padding-left: 16px;
	padding-right: 16px;
	padding-top: 16px;
	padding-bottom: ${props => props.insets.bottom + 16}px;
`

export const FooterQuote = styled.Text`
	font-size: 18px;
	text-align: center;
	line-height: 30px;
`
