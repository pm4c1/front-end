public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		String str = sc.next();
		String result = "";
		
		// 입력한 값을 한 글자 씩 for문을 사용해 조건대로 대소문자를 변경함
		for(char x : str.toCharArray()) { // toCharArray()로 문자를 배열로 바꿈 
			if(Character.isLowerCase(x)) {
				result += Character.toUpperCase(x);
			} else {
				result += Character.toLowerCase(x);
				/* 대문자 -> 소문자 -> 대문자로 바뀌도록 toUpper(Lower)Case를 사용하고, 
				* result 변수에 누적시킴
				*/
			}
		}
		System.out.println(result);
	}
