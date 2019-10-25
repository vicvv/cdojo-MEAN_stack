function fib(){
	var temp1 = 0;
	var temp2 = 1;
	var sum = 1;
	function nacci(){
		console.log(sum);
		sum = temp1+temp2;
		temp1=temp2;
		temp2=sum;
	}
	return nacci;
}


  var fibCounter = fib();
  fibCounter(); // should console.log "1"
  fibCounter(); // should console.log "1"
  fibCounter(); // should console.log "2"
  fibCounter(); // should console.log "3"
  fibCounter(); // should console.log "5"
  fibCounter(); // should console.log "8"
  