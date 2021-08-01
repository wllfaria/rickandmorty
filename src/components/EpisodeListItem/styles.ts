import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
	padding: 0 16px;
	margin-bottom: 16px;
	padding-bottom: 8px;
	flex-direction: row;
`

export const Number = styled.Text`
	font-size: 32px;
	margin-right: 16px;
	color: #909090;
`

export const Name = styled.Text`
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 6px;
	line-height: 36px;
`

export const Details = styled.View`
	flex-wrap: nowrap;
	flex: 1;
`

export const Episode = styled.Text`
	font-size: 18px;
	color: #707070;
	flex-grow: 1;
	flex-basis: 0;
	margin-bottom: 4px;
`

export const AirDate = styled.Text`
	font-size: 18px;
	color: #707070;
	flex-grow: 1;
	flex-basis: 0;
`
