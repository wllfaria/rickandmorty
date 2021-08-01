export function useRandomQuote() {
	const quotes = [
		'Wubba Lubba Dub Dub!',
		'Boom! Big reveal! I turned myself into a pickle!',
		'Nobody exists on purpose. Nobody belongs anywhere. We’re all going to die. Come watch TV.',
		'Sometimes science is more art than science.',
		'Don’t move. Gonorrhea can’t see us if we don’t move. Wait! I was wrong! I was thinking of a T. rex.',
		'You gotta do it for Grandpa, Morty. You gotta put these seeds inside your butt.',
		'Thanks, Mr. Poopybutthole. I always could count on you.',
		'So I have an emo streak. It’s part of what makes me so rad.',
		'I just want to go back to hell, where everyone thinks I’m smart and funny.',
		'If I die in a cage, I lose a bet.',
		'I’m sorry, but your opinion means very little to me.',
		'welcome to the club, pal.'
	]

	const randomIndex = Math.floor(Math.random() * quotes.length) + 1
	return quotes[randomIndex]
}
