// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'e-commerce';

//   // const btnOpenModal = document.getElementById("open-modal");
//   // const btnCloseModal = document.getElementById("close-modal");
//   // const modalElm = document.getElementById("modal");

//   // btnOpenModal.addEventListener("click", function () {
//   //   modalElm.classList.add("open");
//   // });

//   // btnCloseModal.addEventListener("click", function () {
//   //   modalElm.classList.remove("open");
//   // });

// }

import { Component, OnInit } from "@angular/core";

@Component({
selector: "app-root",
templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'e-commerce';
constructor() {}

ngOnInit() {}

displayStyle = "none";

openPopup() {
	this.displayStyle = "block";
}

Pop() {
	this.displayStyle = "nav-items";
}
closePopup() {
	this.displayStyle = "none";
}
}
