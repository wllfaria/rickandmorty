import { EdgeInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

type InsetsProps = {
	insets: EdgeInsets
}

export const Container = styled.View<InsetsProps>`
	flex: 1;
	padding-bottom: ${props => props.insets.bottom + 16}px;
	background: white;
`

export const BackButtonContainer = styled.View<InsetsProps>`
	position: absolute;
	top: ${props => props.insets.top}px;
	z-index: 1;
	width: 100%;
	left: 16px;
`

export const Avatar = styled.Image`
	width: 100%;
	height: 400px;
`

export const CharacterInformation = styled.ScrollView`
	padding-bottom: 32px;
`

export const Name = styled.Text`
	font-size: 48px;
	font-weight: bold;
`

export const DetailsWrapper = styled.View`
	padding: 0 16px;
`

export const Label = styled.Text`
	font-size: 18px;
	margin-top: 16px;
`

export const Detail = styled.Text`
	font-size: 24px;
	font-weight: bold;
`

export const DetailsGrid = styled.View`
	margin-bottom: 16px;
`

export const Col = styled.View`
	flex-grow: 1;
	flex-basis: 0;
	margin-right: 8px;
`
