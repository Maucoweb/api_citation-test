const citation = document.getElementById('citation');

 // fetch('https://api.quotable.io/random')
   // .then((res) => res.json())
   // .then(data => {
  //      console.log(`${data.content} -${data.autho}`)
  //  })


const getCitation = () =>{


    fetch('https://api.quotable.io/random')
        .then((res) => res.json())
        .then((data) => {
            citation.innerHTML = data.content
    })
    fetch ('https://picsum.photos/1600/1000')
        .then((res) => {
        document.getElementById('imgBack').innerHTML = `<img src=${res.url} />`;

        });
};

citation.addEventListener('click', () => getCitation ());
getCitation ();