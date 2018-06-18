class Main{
	constructor(){
		console.log("hello world!");
		// let worker  = new Worker("Worker.js");
		// worker.addEventListener("message",function(e){
		// 	console.log(e.data.result);
		// });
		// worker.postMessage({});
		var taskList = [task1,task2];
		requestAnimationFrame(processTaskList);
		function processTaskList(taskStartTime){
			console.log(taskStartTime);
			let taskFinishTime;
			do{
				var nextTask = taskList.pop();
				nextTask.apply(null,[]);
				taskFinishTime = window.performance.now();
				console.log(taskStartTime);
			}while(taskFinishTime - taskStartTime < 3);
			if(taskList.length > 0){
				requestAnimationFrame(processTaskList);
			}
		}
		function task1(){
			let sum = 0;
			for(let i=0;i<1000000;i++){
				sum += i;
			}
			// console.log(sum);
		}
		function task2(){
			let sum1 = 0;
			for(let j=0;j<1000000;j++){
				sum1 += j;
			}
			// console.log(sum1);
		}

	}
}