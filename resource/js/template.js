/* 'load' 와 'DOMContentLoaded' 중에 상화에 맞는 걸로 사용하면 된다. */
window.addEventListener('load', function () {
	// load 이벤트는 문서내의 모든 리소스(이미지, 스크립트)의 다운로드가 
})

window.addEventListener('DOMContentLoaded', function () {
	//DOMContentLoaded는 문서에서 스크립트 작업을 할 수 있을 때 실행되기 
	document.addEventListener('click', addclick)
})

function addclick() {
	// 속성 넣는 문법
	// var query = document.querySelector('.test123').getAttribute('data-test')
	// console.log(query);

	// 속성 넣는 문법
	// var query = document.querySelector('.test123').setAttribute('data', '123')
	// console.log(query);

	// querySelector 선택자 토글 함수
	// document.querySelector('.test123').classList.toggle('active');

	// querySelector 선택자 클래스 및 아이디 찾기
	// document.querySelector('#id1').classList.add('test')
	// console.log(document.querySelector('.test123'));

	// id 선택자시 아래내용으로 클래스 내용 추가
	// document.getElementById('id1').classList.add('test')
}