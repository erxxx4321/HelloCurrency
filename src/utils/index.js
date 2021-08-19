export function getSpecificDate(count = 6) {
	const today = new Date();
	const specificDate = today.getDate() - count;
	today.setDate(specificDate);

	return today.toJSON().slice(0, 10);
}
