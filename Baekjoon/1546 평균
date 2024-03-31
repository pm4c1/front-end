public static void main(String[] args) {
	 
		Scanner sc = new Scanner(System.in);
	 
		double arr[] = new double[sc.nextInt()]; // arr[]를 double로 선언하면서 배열 크기를 Scanner로 받음
			
		for(int i = 0; i < arr.length; i++) {
				arr[i] = sc.nextDouble(); // double형으로 값을 입력받음
		}
			
		double sum = 0;
		Arrays.sort(arr); // 정렬
			
		for(int i = 0; i < arr.length; i++) {
			sum += ((arr[i] / arr[arr.length-1]) * 100);
		}
		
			System.out.print(sum / arr.length); // 출력
			
	}
