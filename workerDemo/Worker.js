onmessage = function(e){
	let sum = 0;
	for(let i = 0;i<10000000;i++){
		sum+=i;
	}
	postMessage({result:sum});
};