import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import theme from './theme'
import { ThemeProvider } from '@mui/material'

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Cyriel Basilio | React Developer',
	description:
		'Experienced Frontend Developer with 6+ years building scalable web applications using React, TypeScript, and modern JavaScript frameworks.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AppRouterCacheProvider>
					<ThemeProvider theme={theme}>{children}</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	)
}
