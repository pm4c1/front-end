public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		String str1 = sc.next();
		String str2 = sc.next();
		
		// 알파벳을 담을 배열 생성
		char[] arr1 = str1.toCharArray();
		char[] arr2 = str2.toCharArray();
		
		int cnt = 0;
		
		for(int i = 0; i < arr1.length; i++) {
			for(int j = 0; j < arr2.length; j++) {
				if(arr1[i] == arr2[j]) {
					arr1[i] = 'A';
					arr2[j] = 'A';
				}
			}
		}
		for(int i = 0; i < arr1.length; i++) {
			if(arr1[i] != 'A') {
				cnt++;
			}
		}
		for(int i = 0; i < arr2.length; i++) {
			if(arr2[i] != 'A') {
				cnt++;
			}
		}
		System.out.println(cnt);
		
	}
