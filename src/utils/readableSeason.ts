export function readableSeason(seasonCode: string): string {
	const season = seasonCode.substr(1, 2)
	const episode = seasonCode.substr(4)
	return `Season ${season} - Episode ${episode}`
}
