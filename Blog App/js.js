async function fetchData(){
	var url = "https://jsonplaceholder.typicode.com/posts";
	try{
		var res = await fetch(url);	
	}catch(err){
		console.log(err);
	}
	var data = await res.json();
	var blogs = document.querySelector(".allblogs");
	for(var i=0;i<data.length;i++){
		var title = data[i].title;
		var body = data[i].body;
		var id = data[i].id;
		console.log(id);
		const div = document.createElement("div");
		div.innerHTML = "<div class='addbox'> <div class='title'>"+title+"</div><div class='textarea'>"+body+"</div><button id='"+id+"' class='btadd' onclick='showPost(event.target.id)'>View Blog</button></div>";
		blogs.appendChild(div);
	}
}

async function showPost(num){
	console.log(num);
	var url = "https://jsonplaceholder.typicode.com/posts/"+num;
	try{
		var res = await fetch(url);	
	}catch(err){
		console.log(err);
	}
	var data = await res.json();
	console.log("fetch",data);
	var title = data.title;
	var body = data.body;
}

fetchData();


