// your code here
const nameEle = document.getElementById('name')
const yearEle = document.getElementById('year')
const urlEle = document.getElementById('url')

nameEle.addEventListener('input',(e)=>{
	nameEle.value=e.target.value
})

yearEle.addEventListener('input',(e)=>{
	yearEle.value=e.target.value
})

let url= urlEle.innerText

const submitBtn= document.getElementById('button')
submitBtn.addEventListener('click',function(){
	const name= nameEle.value
	const year= yearEle.value

	if(name || url){
		url+='?'
	}

	if(name){
		let nameQuery = `name=${name}`
		url+=nameQuery
	}

	if(year){
		let yearQuery=`year=${year}`
		if(name){
			url+='&'
		}
		url+=yearQuery
	}

	urlEle.textContent=url
})