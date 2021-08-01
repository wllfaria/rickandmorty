/**
 * This function removes the parenthesis after the name of a location
 * Such as "Earth (C-137)" to fit the layout. turning it into a string with
 * just the name.
 */
export function shapeLocationName(locationName: string) {
	if (!locationName) return ''
	const [location] = locationName.split('(')
	return location
}
