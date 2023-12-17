/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
	var v = {};
	str1 = str1.toLowerCase();
	str2 = str2.toLowerCase();

	for (let i = 0; i < str1.length; ++i) v[str1[i]] = (v[str1[i]] || 0) + 1;
	for (let i = 0; i < str2.length; ++i) v[str2[i]] = (v[str2[i]] || 0) - 1;

	for (let i in v) if (v[i] !== 0) return false;

	return true;
}

module.exports = isAnagram;
