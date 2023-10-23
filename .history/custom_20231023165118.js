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