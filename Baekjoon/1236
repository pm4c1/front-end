public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

        //행 열 입력
        int row = sc.nextInt();
        int col = sc.nextInt();
        sc.nextLine();

        //성 입력
        char[][] castle = new char[row][col];

        for(int i = 0; i < row; i++){
            String c = sc.nextLine();
            char[] d = c.toCharArray();
            for(int j = 0; j < col; j++){
                castle[i][j] = d[j];
           }
        }

        // 경비원이 없는 행의 줄 수 계산
        int norow = 0;
        int temp = 0;

        for(int i = 0; i < row; i++){
            for(int j = 0; j < col; j++){
               if(castle[i][j] == 'X'){
                temp++;
               }
            }if(temp == 0){
                norow++;
            }temp = 0;
        }
        
        // 경비원이 없는 열의 줄 수 rPtks
        int nocol = 0;

        for(int j = 0; j < col; j++){
            for(int i = 0; i < row; i++){
               if(castle[i][j] == 'X'){
                temp++;
               }
            }if(temp == 0){
                nocol++;
            }temp = 0;
        }

        // 결과 출력
        if(norow >= nocol){
            System.out.println(norow);
        }else{
            System.out.println(nocol);
        }
	
	}
