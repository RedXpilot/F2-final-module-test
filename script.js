const btn = document.getElementById('newPostId');
const blogArea = document.getElementById('blogArea');
const modalView = document.querySelector('.modalShow');

const crossBtn = document.getElementById("cross");
crossBtn.addEventListener('click', funca);
   
function funca() {
    modalView.style.display="none";
};


btn.addEventListener('click', funcModalShow);

function funcModalShow(){
      
    modalView.style.display='block';

}


// const publishBtn = document.getElementById('publishBtn');
   
var form = document.getElementById("myForm");

   form.addEventListener('submit', funcPost);

    function funcPost(event) {
        event.preventDefault();

    //creating new post using modal input


    var heading = document.getElementById('headingFromForm').value;
    var post = document.getElementById('postFromForm').value;


     const postDiv = document.createElement('div');

     const headingDiv = document.createElement('div');
     const postHeading = document.createElement('h3');

     const paraDiv = document.createElement('div');
     const postPara = document.createElement('p');

     postHeading.textContent=heading;
     headingDiv.appendChild(postHeading);
     postDiv.appendChild(headingDiv);

     postPara.textContent=post;
     paraDiv.appendChild(postPara);
     postDiv.appendChild(paraDiv);

     const downDiv = document.createElement('div');

     const btnDiv = document.createElement('div');
     const postButton1 = document.createElement('button');
     const postButton2 = document.createElement('button');

     postButton1.style.width="150px";
     postButton1.style.height="35px";
     postButton1.textContent="Edit Post";
     postButton1.style.backgroundColor="black";
     postButton1.style.color="white";
     postButton1.style.border="1px solid white";
     postButton1.textContent="Edit Post";
     btnDiv.appendChild(postButton1);

     postButton2.style.width="150px";
     postButton2.style.height="35px";
     postButton2.textContent="Delete Post";
     postButton2.style.backgroundColor="black";
     postButton2.style.color="white";
     postButton2.style.border="1px solid white";
     btnDiv.appendChild(postButton2);

     btnDiv.style.display="flex";
     btnDiv.style.gap="20px";

        //current time append.
        const timeDiv = document.createElement('div');
        const postDate = document.createElement('p');
        const date = new Date();
        postDate.textContent=`Posted on ${date}`;
        timeDiv.appendChild(postDate);

        downDiv.appendChild(btnDiv);
        downDiv.appendChild(timeDiv);

        downDiv.style.display="flex";
        downDiv.style.justifyContent="space-between";
        
        postDiv.appendChild(downDiv);

    postDiv.style.border="1px solid white";
    postDiv.style.padding="10px";
    postDiv.style.margin="15px";

    blogArea.appendChild(postDiv);


    modalView.style.display="none";

  // Reset the form
    form.reset();
}