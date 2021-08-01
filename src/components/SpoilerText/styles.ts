import styled from 'styled-components/native'

type SpoilerProps = {
	isShown: boolean
}

export const Spoiler = styled.TouchableOpacity<SpoilerProps>`
	background-color: ${props => (props.isShown ? 'transparent' : '#333333')};
	padding: ${props => (props.isShown ? '0px' : '6px')};
	border-radius: 4px;
	width: ${props => (props.isShown ? 'auto' : '100px')};
	margin-top: ${props => (props.isShown ? '0px' : '4px')};
`

export const SpoilerText = styled.Text`
	text-transform: uppercase;
	text-align: center;
	font-size: 20px;
	color: white;
	font-weight: bold;
`
