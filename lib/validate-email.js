var validateEmail = function(elementValue) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
  }


$('#email').keyup(function(){
    var value = $(this).val()
    var valid = validateEmail(value)


    if(!valid){
        $(this).css('color','red')
        $('#err').text('format email salah')
    }else{
        $(this).css('color','black')
        $('#err').text('format email benar')
    }
    
})