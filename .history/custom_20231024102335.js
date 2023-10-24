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

$(".tab").css("display", "none");
      $("#tab-1").css("display", "block");

      function run(hideTab, showTab){
        if(hideTab < showTab){ 
          var currentTab = 0;
          x = $('#tab-'+hideTab);
          y = $(x).find("input")
          for (i = 0; i < y.length; i++){
            if (y[i].value == ""){
              $(y[i]).css("background", "#ffdddd");
              return false;
            }
          }
        }

        $("#tab-"+hideTab).css("display", "none");
        $("#tab-"+showTab).css("display", "block");
        $("input").css("background", "#fff");

        // Validation function for Step 2
  function validateStep2() {
    var email = $("#tab-2 input[name='email']").val();
    var phone = $("#tab-2 input[name='phone']").val();

    // Implement your validation rules for email and phone here
    // Example: Check if email is valid and phone is in the correct format

    return true; // Return false if validation fails
  }

  // Validation function for Step 3
  function validateStep3() {
    var dd = $("#tab-3 input[name='dd']").val();
    var mm = $("#tab-3 input[name='mm']").val();
    var yy = $("#tab-3 input[name='yy']").val();

    // Implement your validation rules for the date fields here
    // Example: Check if dd, mm, and yy are valid dates

    return true; // Return false if validation fails
  }

  // Validation function for Step 4
  function validateStep4() {
    var username = $("#tab-4 input[name='username']").val();
    var password = $("#tab-4 input[name='password']").val();

    // Implement your validation rules for username and password here
    // Example: Check if username is not already taken, and password meets criteria

    return true; // Return false if validation fails
  }

      }