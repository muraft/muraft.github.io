const pages=document.querySelectorAll('.page')
const pageButton=document.querySelectorAll('#page-button ul li');
pageButton.forEach((v)=>{
	v.addEventListener("click",el=>{
		pageButton.forEach(w=>w.classList.remove('active'));
		el.target.classList.add('active');
		changePage(el.target.innerHTML);
	})
})

function changePage(toPage)
{
	pages.forEach(v=>v.style.display='none')
	switch(toPage)
	{
		case 'Welcome':
		document.querySelector('#welcome').style.display='block';
		runWelcome();
		break;
		case 'My Skill':
		document.querySelector('#skill').style.display='block';
		break;
		case 'Project':
		document.querySelector('#project').style.display='block';
		break;
		case 'Social':
		document.querySelector('#social').style.display='block';
		break;
	}
}
