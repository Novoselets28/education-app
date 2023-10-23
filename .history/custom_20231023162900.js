$("#formValidation").validate({
    rules:{
        name:{
            minlength: 2
        }
    },
    message:{
        name:{
            required: "Enter name",
            minlength: "Name at least 2 characters",
        }
    },

    submitHandler: function(form) {
      form.submit();
    }
   });