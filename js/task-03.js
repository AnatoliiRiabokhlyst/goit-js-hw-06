const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const adList = document.querySelector('.gallery');
const elements = images.map((option) => 
`<li><img class="images" src="${option.url}" alt="${option.alt}" width="375" height="220" /></li>`).join("");
adList.insertAdjacentHTML("afterbegin", elements);
const styleImg = document.querySelectorAll('li');
adList.style.display = "flex";
adList.style.flexWrap = "wrap";
adList.style.marginLeft = "-30px";
adList.style.marginTop = "-30px";
styleImg[0].style.flexBasis = "calc(100% / 3 - 30px)";
styleImg[0].style.marginLeft = "30px";
styleImg[0].style.marginTop = "30px";
styleImg[1].style.flexBasis = "calc(100% / 3 - 30px)";
styleImg[1].style.marginLeft = "30px";
styleImg[1].style.marginTop = "30px";
styleImg[2].style.flexBasis = "calc(100% / 3 - 30px)";
styleImg[2].style.marginLeft = "30px";
styleImg[2].style.marginTop = "30px";



