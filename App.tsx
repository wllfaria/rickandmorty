import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { API_URL } from '@env'
import { createClient, Provider } from 'urql'
import { Router } from './src/router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from './src/components/ErrorFallback'

const client = createClient({
	url: API_URL
})

export default function App() {
	return (
		<Provider value={client}>
			<SafeAreaProvider>
				<StatusBar style='dark' />
				<ErrorBoundary FallbackComponent={ErrorFallback}>
					<Router />
				</ErrorBoundary>
			</SafeAreaProvider>
		</Provider>
	)
}
