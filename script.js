function Matrix() {
      var n = document.getElementById("n").value;
      var matrix = '<div class = "mat"><div class = "table">';
      if (n > 0) {
         for (var i = 0; i < n; i++) {
               matrix += "<table><tr>"
               for (var j = 0; j < n; j++) {
		   	matrix += '<td><input type="number" name = "value" placeholder = "0 or 1" min="0" max="1"></td>';
               }
               matrix += "</tr></table>";       
         }
         matrix += "</div><div>";
      }       // цикл для матрицы n x n
      else {
          alert("Введите значение > 0");   // если введено n < 0, выведет сообщение об этом
      } 
      document.getElementById('matrix').innerHTML = matrix; 
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
	            if(arr[i][j] != arr[j][i]) {
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
             		if(val[schet].value != 1) {
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
             	       if(val[schet].value == 1) {
                           result = 'Отношение НЕ является АНТИРЕФЛЕКСИВНЫМ';
		       }		
                   }
                   schet++;
              }
        }
        document.getElementById('antireflex').innerHTML = result;	
}

function result() {
     graph();
     Matrix();
     reflexivity();
     antireflex();
}

