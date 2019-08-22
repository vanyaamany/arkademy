let todo=[
    {
        title:"rendang",
        description:"Rendang atau randang adalah masakan daging dengan bumbu rempah-rempah yang berasal dari Minangkabau. "
    },

    {
        title:"sepeda",
        description:"Sepeda (dari bahasa Prancis: vélocipède /ve.lɔ.si.pɛd/, melalui bahasa Belanda: vélocipède /velosiˈpɛːdə/) atau kereta angin adalah kendaraan beroda dua atau tiga yang mempunyai setang, tempat duduk, dan sepasang pengayuh yang digerakkan kaki untuk menjalankannya"
    },

    {
        title:"bali",
        description:"Bali adalah sebuah provinsi di Indonesia. Ibu kota provinsi ini adalah Denpasar. Bali juga merupakan salah satu pulau di Kepulauan Nusa Tenggara"
    },
    {
        title:"bali",
        description:"Bali adalah sebuah provinsi di Indonesia. Ibu kota provinsi ini adalah Denpasar. Bali juga merupakan salah satu pulau di Kepulauan Nusa Tenggara"
    },

    {
    title:"bali",
    description:"Bali adalah sebuah provinsi di Indonesia. Ibu kota provinsi ini adalah Denpasar. Bali juga merupakan salah satu pulau di Kepulauan Nusa Tenggara"
    },

]
 class todolist{
     item= document.getElementById('todo-list')
     content=document.getElementById('todo-list')
     listItem=()=>{
         for( let x in todo){
             this.item.innerHTML+= '<div class="list-item">'+todo[x].title+'</div>'
         }

     }
 }

 const todolist=new todolist()