function Matrix() {
      var n = document.getElementById("n").value;
      var matrix = " ";
      if (n > 0) {
         for (var i = 0; i < n; i++) {
               matrix += '<tr><table>'
               for (var j = 0; j < n; j++) {
		   	matrix += '<td><input type="number" name = "value" placeholder = "0 or 1" min="0" max="1"></td>';
               }
               matrix += '</tr></table>';       
         }
         matrix += " ";
      }       // цикл для матрицы n x n
      else {
          alert("Введите значение > 0");   // если введено n < 0, выведет сообщение об этом
      } 
      document.getElementById('matrix').innerHTML = matrix; 
}

function correct() {
      var n = document.getElementById("n").value;
      var val = document.getElementsByName("value"); // получяем коллекцию элементов
      var schet = 0;
      var arr = [];  
      for (var i = 0; i < n; i++){
           arr[i] = [];
           for (var j = 0; j < n; j++){
        	  arr[i][j] = val[schet].value;  //запись элементов коллекции в массив
		  schet++; 
	   }	
      }
      for (var i = 0; i < n; i++){   
           for (var j = 0; j < n; j++){
                 if(arr[i][j] > 1 || arr[i][j] < 0 ){  // условие для элементов меньше 0 и больше 1
                       return alert("ДОПУСТИМЫЕ ЗНАЧЕНИЯ ТОЛЬКО 0 и 1. ИСПРАВЬТЕ!!!");
                 }
	   }	 
      }
      return true;  
}

function graph() {
        var n = document.getElementById("n").value;
	var val = document.getElementsByName("value");
	var schet = 0;
	var arr = [];
	for (var i = 0; i < n; i++){
	      arr[i] = [];
	      for (var j = 0; j < n; j++){
		    arr[i][j] = val[schet].value;
		    schet++;
	      }	
	}
	for (var i = 0; i < n; i++){
	      for (var j = 0; j < n; j++){
	            if(arr[i][j] != arr[j][i]) { //условие для неориентированного графа(не может быть асимметричным)
			return alert("ГРАФ НЕ ЯВЛЯЕТСЯ НЕОРИЕНТИРОВАННЫМ");
		    }
	      }	
	}
        return true;        
}   

function reflexivity() {
        var n = document.getElementById("n").value;
	var val = document.getElementsByName("value");  // получаем коллекцию всех элементов 
	var schet = 0;
        var result = 'отношение является РЕФЛЕКСИВНЫМ';
	for (var i = 0; i < n; i++){
             for (var j = 0; j < n; j++){
	           if(i == j) {
             		if(val[schet].value != 1) {  // если какой либо элемент главной диагонали не равен 1, то граф НЕ рефлексивен 
                                result = 'Отношение НЕ является РЕФЛЕКСИВНЫМ';
                        }
           	   }
                   schet++;
              }	
	}
        document.getElementById('reflexivity').innerHTML = result;
}

function antireflex() {
        var n = document.getElementById("n").value;
	var val = document.getElementsByName("value");  // получаем коллекцию всех элементов 
	var schet = 0;
        var result = 'Отношение является АНТИРЕФЛЕКСИВНЫМ';
	for (var i = 0; i < n; i++){
             for (var j = 0; j < n; j++){
	           if(i == j) {
             	       if(val[schet].value == 1) { // если какой либо элемент диагонали равен единице, то граф НЕ антирефлексивен
                           result = 'Отношение НЕ является АНТИРЕФЛЕКСИВНЫМ';
		       }		
                   }
                   schet++;
              }
        }
        document.getElementById('antireflex').innerHTML = result;	
}

function symmetry() {
        var n = document.getElementById("n").value;
	var val = document.getElementsByName("value");  // получаем коллекцию всех элементов
	var schet = 0;
	var result = 'Отношение является СИММЕТРИЧНЫМ';
	var arr = [];
	for (var i = 0; i < n; i++){
	      arr[i] = [];
	      for (var j = 0; j < n; j++){
		    arr[i][j] = val[schet].value;  // записываем элементы в двумерный массив
		    schet++;
	      }	
	}
	for (var i = 0; i < n; i++){
	      for (var j = 0; j < n; j++){
	            if(arr[i][j] != arr[j][i]) {  // если существует ребро из i в j, и не существует ребра ведущего из j в i, то граф несимметричен
			result = 'Отношение не является СИММЕТРИЧНЫМИ';
		    }
	      }	
	}
	document.getElementById('symmetry').innerHTML = result;	
}  

function transitivity(){
       var n = document.getElementById("n").value;
       var val = document.getElementsByName("value"); // получаем коллекцию всех элементов
       var schet = 0;
       var result = 'Отношение является ТРАНЗИТИВНЫМ';
	var arr = [];
	for (var i = 0; i < n; i++){
	      arr[i] = [];
	      for (var j = 0; j < n; j++){
		    arr[i][j] = val[schet].value;   // записываем элементы в двумерный массив
		    schet++;
	      }	
	}
        for (var i = 0; i < n; i++){
	      for (var j = 0; j < n; j++){
                  if(arr[i][j] == 1) {  // если существует ребро, соединяющее вершины i и j
                        for (var z = 0; z < n; z++) {
                              if (arr[j][z] == !arr[i][z]) {   // если из вершины j в вершину z ведёт ребро, но из i в z - нет, то граф нетранзитивен
                                   result = "Отношение НЕ является ТРАНЗИТИВНЫМ";
                              }
                        }
                  }
              }
         }
         document.getElementById('transitivity').innerHTML = result;
}


function result() {
     correct();
     graph();
     reflexivity();
     antireflex();
     symmetry();
     transitivity();
}
