import React, { useEffect } from 'react'
import { FallbackProps } from 'react-error-boundary'

import * as S from './styles'

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
	useEffect(() => {
		console.warn(error.message)
	}, [error])

	return (
		<S.Container>
			<S.ErrorImage source={require('./img/phone-illustration.png')} />
			<S.ErrorTitle>Oops! Looks like you are not connected to the internet</S.ErrorTitle>
			<S.ErrorDescription>Check your internet connection and</S.ErrorDescription>
			<S.RetryButton onPress={resetErrorBoundary}>
				<S.RetryButtonText>Try Again</S.RetryButtonText>
			</S.RetryButton>
		</S.Container>
	)
}
