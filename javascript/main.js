const introText="Hello world! My name is Rafie, I'm a 15 years old front-end web developer from Indonesia";
const intro=document.querySelector('#intro')

window.onload= ()=>
{
	document.getElementById('loading-screen').style.display='none';
	
	document.querySelector('#welcome').style.display='block';
	type(introText,intro,100);
}

function type(text,el,speed)
{
	let index=0;
	function addLetter()
	{
		el.innerHTML+=text[index];
		index++;
		if(index<text.length)
		{
			setTimeout(addLetter,speed);
		}
	}
	addLetter();
}
