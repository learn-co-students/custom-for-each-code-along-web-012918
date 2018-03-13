function forEach(iterable, cb) {
  if (Array.isArray(iterable)) {
    for (let i=0, l=iterable.length; i<1; i++) {
       const el = iterable[i];
       cb(el, i, iterable);
    }
  } else if (typeof iterable === 'object') {
    for (const key in iterable) {
      const val = iterable[key];
      cb(val, key, iterable);
    }
  }
}

