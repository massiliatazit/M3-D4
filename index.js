const BookCard = (books) => {
  const row = document.querySelector(".row");

  const htmlString = books.map(book =>{
    
    return `<div class ="col col-sm-12 col-md-4 col-lg-3 mt-2 d-flex align-items-stretch">
    <div class="card mb-4 bookcard ">
      <img src="${book.img}" class="card-img-top" alt="..."  style='object-fit: fill; width=200px ;'/>
      <div class="card-body m-auto" style=    'padding:10px 10px 0 10px;
      height:100px';
     
    >
        <h6 class="card-title text-center">${book.title}</h6>

      </div>
      <div class="card-footer">
        <div class="btn-group d-flex justify-items-between">
                  <button

                    type="button"
                    class="btn btn-sm  Addtocard mr-5"
                    onclick='addtocart()'
                  >
                    ADD to Cart
                  </button>
                  <button

                  type="button"
                  class="btn btn-sm  mr-5 skip "onclick='skipfun()'

                >
                  Skip
                </button>

                </div>
                <small class=price m-auto">${book.price} zł</small>
      </div>
    </div>
  </div>

   `;
  }).join('');

 row.innerHTML+=htmlString;
 

}
let books_data=[];
const searchbutton = document.getElementById('searchbtn')

let input = document.getElementById("myInput");
 input.addEventListener('keyup', (event) => {
 
  let searching_element=event.target.value;

    const filteredbooks = books_data.filter(searchbook =>
       searchbook.title.includes(searching_element)
    )
    console.log(filteredbooks)
    BookCard(filteredbooks);
   

        
      
      })
      
  const addtocart =()=>{
    const Addtocards = document.querySelectorAll(".Addtocard");
  
    const booksList = document.querySelectorAll(".bookcard");
    for(let i=0;i<booksList.length;i++){

     Addtocards[i].onclick=() =>{
       
      booksList[i].setAttribute(
        "style",
        "color:#f25c54; border: 2px solid #f25c54;")

     }
    }
    
    
     
  }
  addtocart()
 

 const skipfun=()=>{

  const cols = document.querySelectorAll(".col");
  const skipbtn = document.querySelectorAll('.skip')
   ;
  for (let i = 0; i < cols.length; i++) {
    

    skipbtn[i].onclick = () => {
      // if (!Addtocards.dataset.clicked) {
      cols[i].remove();
      // }
    };
  }
 }


const loadbooks = async () => {
  try{
    const loaddata = await fetch(`https://striveschool-api.herokuapp.com/books`)
    books_data = await loaddata.json()
    BookCard(books_data)
  }
    
    catch(err){
      (console.log(err));
    }
 
   
    
    
};

        

window.onload = () => {
  loadbooks();
};



 


