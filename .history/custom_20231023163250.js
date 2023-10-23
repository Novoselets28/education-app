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
            minlength: 10
        }
    },
    message:{
        name:{
            required: "Enter name",
            minlength: "Name at least 2 characters",
        },
        email: 'Enter email'
    },

    submitHandler: function(form) {
      form.submit();
    }
   });