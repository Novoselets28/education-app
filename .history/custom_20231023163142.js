$("#formValidation").validate({
    rules:{
        name:{
            minlength: 2
        },
        email:{
            email: true
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