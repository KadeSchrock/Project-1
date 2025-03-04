// <li>
// <div class="col s12 m7">
//     <div class="card horizontal">
//         <div class="card-stacked">
//             <div class="card-content">
//                 <div class="card-image">
//                     <img src="snowboarder-page-background.PNG">
//                 </div>
//                 <p>Snowboard item test</p>
//                 <p>$179.99</p>
//             </div>
//             <div class="card-action">
//                 <a href="#">This is a link</a>
//             </div>
//         </div>
//     </div>
// </div>
// </li>
function addItem() {
    var test = "$499.99"
    var element = document.getElementById("cart-nav");
    var newElement = `<li><div class="col s12 m7"><div class="card horizontal"><div class="card-stacked"><div class="card-content"><div class="card-image"><img src="snowboarder-page-background.PNG"></div><p>Snowboard item test</p><p>${test}</p></div><div class="card-action"><a href="#">This is a link</a></div></div></div></div></li>`
    element.insertAdjacentHTML('afterend', newElement);
}
function removeItem() {
    console.log('Item removed!')
}