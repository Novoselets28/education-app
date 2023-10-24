// $("#formValidation").validate({
//     rules:{
//         name:{
//             minlength: 2
//         },
//         email:{
//             email: true
//         },
//         phone:{
//             number: true,
//             minlength: 10,
//             maxlength: 10
//         }
//     },
//     message:{
//         name:{
//             required: "Введите имя",
//             minlength: "В имени должно быть минимум 2 буквы",
//         },
//         email: 'Введите email',
//         phone: 'Введите номер телефона'
//     },

//     submitHandler: function(form) {
//       form.submit();
//     }
//    });

$(".tab").css("display", "none");
      $("#tab-1").css("display", "block");

      function run(hideTab, showTab){
        
        if(hideTab < showTab){ 
          x = $('#tab-'+hideTab);
          y = $(x).find("input")
          for (i = 0; i < y.length; i++){
            if (y[i].value == ""){
              $(y[i]).css("background", "#ffdddd");
              return false;
            }
          }
        }
        $("#formValidation").validate({
                rules:{
                    name:{
                        minlength: 2
                    },
                    email:{
                        email: true
                    },
                    phone:{
                        number: true,
                        minlength: 10,
                        maxlength: 10
                    }
                },
                message:{
                    name:{
                        required: "Введите имя",
                        minlength: "В имени должно быть минимум 2 буквы",
                    },
                    email: 'Введите email',
                    phone: 'Введите номер телефона'
                },
            
                submitHandler: function(form) {
                  form.submit();
                }
               });

        for (i = 1; i < showTab; i++){
          $("#step-"+i).css("opacity", "1");
        }

        $("#tab-"+hideTab).css("display", "none");
        $("#tab-"+showTab).css("display", "block");
        $("input").css("background", "#fff");
      }