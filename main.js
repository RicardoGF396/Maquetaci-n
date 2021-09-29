$(document).ready(function(){
  if(window.location.href.indexOf("index")>-1){
    $(function(){
      $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
      });
    });
  }
    

      //Post
      if(window.location.href.indexOf("index")>-1){
  var posts = [

    {
      title: 'Titulo 1',
      date: 'Publiado el día '+ moment().format('DD') + " de " + moment().format('MMMM') + ' del ' + moment().format('YYYY') ,
      content:  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, cumque ratione aliquid nemo amet perspiciatis nihil, eos pariatur voluptatum suscipit totam quibusdam! Deleniti nostrum illo omnis sint, voluptates sequi! Quaerat aliquam quas voluptates quos quia sit laboriosam earum voluptatum. At quaerat sit voluptas explicabo delectus. Quasi sequi nemo officia? Pariatur velit repellat voluptatibus quas unde. Nesciunt tempora, recusandae quos voluptatem maxime, ex praesentium officia ab odio consequuntur facilis optio harum vitae cum est, numquam id eligendi culpa veniam vero assumenda. Nam suscipit incidunt praesentium beatae ab id deserunt pariatur, rerum accusantium nemo. Soluta doloremque expedita sed error. Quasi, voluptas amet?'
    },{
      title: 'Titulo 2',
      date: 'Publiado el día '+ moment().format('DD') + " de " + moment().format('MMMM') + ' del ' + moment().format('YYYY') ,
      content:  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, cumque ratione aliquid nemo amet perspiciatis nihil, eos pariatur voluptatum suscipit totam quibusdam! Deleniti nostrum illo omnis sint, voluptates sequi! Quaerat aliquam quas voluptates quos quia sit laboriosam earum voluptatum. At quaerat sit voluptas explicabo delectus. Quasi sequi nemo officia? Pariatur velit repellat voluptatibus quas unde. Nesciunt tempora, recusandae quos voluptatem maxime, ex praesentium officia ab odio consequuntur facilis optio harum vitae cum est, numquam id eligendi culpa veniam vero assumenda. Nam suscipit incidunt praesentium beatae ab id deserunt pariatur, rerum accusantium nemo. Soluta doloremque expedita sed error. Quasi, voluptas amet?'
    },

  ];

  console.log(posts);

  //Recorrer el JSON para enviar al index.html

  posts.forEach((item,index) =>{
    var post = `<article class="post">
                  <h2>${item.title} </h2>
                  <span class="date">${item.date} </span>
                  <p>
                  ${item.content}
              </p>
              <div class="btn-link"><a href="#" class="button-more">Artículo completo</a></div>
            </article>
            
            `;

          //Encontrar el div con ID posts y meterle el JSO
            $('#posts').append(post);
  });

      }
  //Selector de tema

    var theme = $("#theme");
    
    $("#to-red").click(function(){
      theme.attr("href","red.css")
      alert('Esta wea cambio de tema a Rojo')
    })

    $("#to-green").click(function(){
      theme.attr("href","green.css")
      alert('Esta wea cambio de tema a Verde')
    })

    $("#to-blue").click(function(){
      theme.attr("href","blue.css")
      alert('Esta wea cambio de tema a Azul')
    })


    // ======= Login LocalStorage =======

    /* Iniciar sesión */
  $("#login form").submit(function () {
    let form_name = $("#form_name").val();
    localStorage.setItem("form_name",form_name);
    
    window.open("perfil.html")
    window.close("/index.html")
  })

  var form_name = localStorage.getItem("form_name");
 

  if(form_name != null && form_name != "undefined"){
    
    let about_parrafo = $("#about p");
    $("#about p").html("<b>Bienvenido " + form_name + "</b>");
    about_parrafo.append("<br><br><br><a href = '#' class='button-more' id='logout'>Cerrar sesión</a> ")
    $("#login").hide();
       

    /* Cerrar sesión */
    $("#logout").click(function () { 
      window.open("index.html")   /* Tiene que ir ahí */
      window.close("perfil.html")
      localStorage.clear();
      location.reload();
      
    });

  }

  });

