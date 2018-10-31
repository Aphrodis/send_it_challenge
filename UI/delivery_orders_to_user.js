//Display the delivery orders made by a user to a user. 

const deliveryOrder = [{
	from:"kigali",
	to:"Gisenyi",	
	status:"Not delivered",
	weight:10,
	price:300,
	owner:"Janvier"
},
{
	from:"kigali",
	to:"Rwanda",	
	status:"Not delivered",
	weight:30,
	price:1000,
	owner:"Bruno"
},{
	from:"Burundi",
	to:"Nigeria",	
	status:"In transit",
	weight:50,
	price:800,
	owner:"Uwineza"
},{
	from:"Uganda",
	to:"Europe",	
	status:"delivered",
	weight:10,
	price:300,
	owner:"Allelua"
}]; 

const deliveries = document.getElementById("delivary");
for (let i =0; i<deliveryOrder.length;i++){
const table = document.createElement("table"); 
table.innerHTML =`<table>							
					<tr><td>${deliveryOrder[i].from}</td>
						<td>${deliveryOrder[i].to}</td>		
						<td>${deliveryOrder[i].weight}</td>
						<td>${deliveryOrder[i].price}</td>
						<td>${deliveryOrder[i].owner}</td>
						<td>${deliveryOrder[i].status}</td>
						<td><button class="cancel">Cancel</button></td>
					</tr>
				</table>`;
	deliveries.appendChild(table);
}; 



//canel the delivery order if it is not delivered
var button =document.querySelector('.cancel');
button.onclick = function(){
	if (deliveryOrder.status === "Not delivered"){
const div = document.getElementById("delivery");
 div.innerHTML="";
}
};