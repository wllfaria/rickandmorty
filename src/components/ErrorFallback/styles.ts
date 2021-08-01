import styled from 'styled-components/native'

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	padding: 0 16px;
`

export const ErrorImage = styled.Image`
	width: 100%;
	height: 300px;
`

export const ErrorTitle = styled.Text`
	font-size: 32px;
	text-align: center;
	font-weight: bold;
	margin-top: 32px;
	margin-bottom: 16px;
`

export const ErrorDescription = styled.Text`
	font-size: 20px;
	text-align: center;
	color: #707070;
`

export const RetryButton = styled.TouchableOpacity`
	background-color: #3da3ec;
	padding: 16px;
	border-radius: 8px;
	width: 100%;
	margin-top: 32px;
`

export const RetryButtonText = styled.Text`
	color: white;
	font-weight: bold;
	font-size: 28px;
	text-align: center;
`
