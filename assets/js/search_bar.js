  //Define local variables
  const searchInput = document.getElementById("search_input");
  const myList = document.getElementById('searchbarlist');

  // if an element doesn't match the input letter, filter it out
  searchInput.addEventListener('input', ()=>{
      const filterValue = searchInput.value.toLowerCase();
      const listItems = myList.getElementsByTagName("li");

      Array.from(listItems).forEach((item)=>{
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(filterValue)? '' : 'none';
      })
  })
