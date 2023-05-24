function solution(str) {
	var i = str.length - 1;
	for (var k of str){
		if(k == str[i]){
			i = i - 1
		}else {
			return false
		}
	}
	return true
}
