function cleanSet(set, startString) {
  // Return an empty string if startString is empty
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  const result = [];
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      // Add the substring without the startString to the result array
      result.push(value.slice(startString.length));
    }
  });
  // Join all the parts with a hyphen
  return result.join('-');
}
export default cleanSet;
