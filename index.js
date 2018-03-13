function forEach(iterable, callback) {
	if (Array.isArray(iterable)) {
		for (let i = 0, l = iterable.length; i < l; i ++) {
			const elem = iterable[i]
			callback(elem, i, iterable)
		} else if (typeof iterable === 'object') {
	for (const key in iterable) {
  const value = iterable[key];
  callback(value, key, iterable);

		}
	}
}
