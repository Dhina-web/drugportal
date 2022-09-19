
$(function () {
    $.fn.serializeObject = function () {
        var obj = {};
        var arr = this.serializeArray();
        $.each(arr, function () {
            if (obj[this.name] !== undefined) {
                if (!obj[this.name].push) {
                    obj[this.name] = [obj[this.name]];
                }
                obj[this.name].push(this.value || '');
            } else {
                obj[this.name] = this.value || '';
            }
        });
        return obj;
    };
})

$(function () {
    var email = document.getElementById("emailUser");
    var password = document.getElementById("passsword");
    var firstName = document.getElementById("firstName");
    var userName = document.getElementById("userName");
    var emailSign = document.getElementById("emailSingup");
    var passwordSign = document.getElementById("passswordSign");
    var repeatPassword = document.getElementById("repeatPassword");
    var button = document.getElementsByClassName('bntDisable')
    $('.success_icon').hide();
    $('.error_msg_pass').hide();
    if (email) {
        email.addEventListener('input', () => {
            const emailBox = document.querySelector('.email_div');
            const emailText = document.querySelector('.error_msg_email');
            const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;

            if (email.value.match(emailPattern)) {
                emailBox.classList.add('valid');
                emailBox.classList.remove('invalid');
                emailText.innerHTML = "";
                $(emailBox).find('.font_i').css("bottom", "7px");
                $(emailBox).find('.success_icon').show();
                button.disabled = true;


            } else {
                emailBox.classList.add('invalid');
                emailBox.classList.remove('valid');
                emailText.innerHTML = "Must be a valid email address.";
                $(emailBox).find('.font_i').css("bottom", "39px");
                $(emailBox).find('.success_icon').hide();
                button.disabled = false;

            }
        });
    }
   
    if (password) {
        password.addEventListener('input', () => {

            const passBox = document.querySelector('.pass_div_sign');
            const passText = document.querySelector('.pass_div_sign_msg');
            const passPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

            if (password.value.match(passPattern)) {
                passBox.classList.add('valid');
                passBox.classList.remove('invalid');
                passText.innerHTML = "";
                $(passBox).find('.font_i').css("bottom", "7px");
                $(passBox).find('.success_icon').show();
                button.disabled = true;


            } else {
                passBox.classList.add('invalid');
                passBox.classList.remove('valid');
                passText.innerHTML = "Must be a valid Password.";
                $(passBox).find('.font_i').css("bottom", "39px");
                button.disabled = false;

            }
        });
    }
 
    if (firstName) {
        firstName.addEventListener('input', () => {
            const firstBox = document.querySelector('.fN_div');
            const firstText = document.querySelector('.fN_div_msg');
            const fNPattern = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;

            if (firstName.value.match(fNPattern)) {
                firstBox.classList.add('valid');
                firstBox.classList.remove('invalid');
                firstText.innerHTML = "";
                $(firstBox).find('.font_singup').css("bottom", "17px");
                $(firstBox).find('.success_icon').show();
                $('#lastname').css("bottom", "5px");
                $('.btnDisEnable').prop('disabled', false);


            } else {
                firstBox.classList.add('invalid');
                firstBox.classList.remove('valid');
                firstText.innerHTML = "Please enter firstname";
                $(firstBox).find('.font_singup').css("bottom", "39px");
                $(firstBox).find('.success_icon').hide();
                $('#lastname').css("bottom", "16px");
                $('.btnDisEnable').prop('disabled', true);

            }
        });
    }
   
    if (userName) {
        userName.addEventListener('input', () => {
            const UNBox = document.querySelector('.user_div');
            const UNText = document.querySelector('.UN_div_msg');
            const UNPattern = /^[a-zA-Z0-9]+$/;

            if (userName.value.match(UNPattern)) {
                UNBox.classList.add('valid');
                UNBox.classList.remove('invalid');
                UNText.innerHTML = "";
                $(UNBox).find('.font_i').css("bottom", "7px");
                $(UNBox).find('.success_icon').show();
                $('.btnDisEnable').prop('disabled', false);

            } else {
                UNBox.classList.add('invalid');
                UNBox.classList.remove('valid');
                UNText.innerHTML = "Please enter Username";
                $(UNBox).find('.font_i').css("bottom", "39px");
                $(UNBox).find('.success_icon').hide();
                $('.btnDisEnable').prop('disabled', true);

            }
        });

    }

    //emailSingup
    if (emailSign) {
        emailSign.addEventListener('input', () => {
            const emailBox = document.querySelector('.email_div_sign');
            const emailText = document.querySelector('.error_msg_signEmail');
            const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;

            if (emailSign.value.match(emailPattern)) {
                emailBox.classList.add('valid');
                emailBox.classList.remove('invalid');
                emailText.innerHTML = "";
                $(emailBox).find('.font_i').css("bottom", "7px");
                $(emailBox).find('.success_icon').show();
                $('.btnDisEnable').prop('disabled', false);


            } else {
                emailBox.classList.add('invalid');
                emailBox.classList.remove('valid');
                emailText.innerHTML = "Must be a valid email address.";
                $(emailBox).find('.font_i').css("bottom", "39px");
                $(emailBox).find('.success_icon').hide();
                $('.btnDisEnable').prop('disabled', true);

            }
        });
    }


    //Password Signup
    if (passwordSign) {
        passwordSign.addEventListener('input', () => {
            const passBox = document.querySelector('.pass_div');
            const passText = document.querySelector('.error_msg_pass');
            const passPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

            if (passwordSign.value.match(passPattern)) {
                $(passText).hide()
                $(passBox).find('.b_50').css("bottom", "8px");
                $('.btnDisEnable').prop('disabled', false);


            } else {
                $(passText).show()
                $(passBox).find('.b_50').css("bottom", "106px");
                $('.btnDisEnable').prop('disabled', true);

            }
        });
    }
   
    //Repeat Password
    if (repeatPassword) {
        repeatPassword.addEventListener('input', () => {
            const repeatBox = document.querySelector('.repeatBox');
            const repeatText = document.querySelector('.error_msg_repeat');
            if (repeatPassword.value === passwordSign.value) {
                repeatBox.classList.add('valid');
                repeatBox.classList.remove('invalid');
                repeatText.innerHTML = "";
                $(repeatBox).find('.font_i').css("bottom", "7px");
                $(repeatBox).find('.success_icon').show();
                $('.btnDisEnable').prop('disabled', false);

            } else {
                repeatBox.classList.add('invalid');
                repeatBox.classList.remove('valid');
                repeatText.innerHTML = "Password Doesnot Match";
                $(repeatBox).find('.font_i').css("bottom", "39px");
                $(repeatBox).find('.success_icon').hide();
                $('.btnDisEnable').prop('disabled', true);

            }
        })
    }


    
})
   
$(document).ready(function () {
    $('.datepicker').pickadate({
        format: 'dd-mm-yyyy',
        formatSubmit: 'dd-mm-yyyy',
        onSelect: function () {
            // Remove the delimiters
            var reformattedDate = this.getDate().replace(/-/g, '')
            // Set the input value
            this.$node.val(reformattedDate)
        }
    })
    $('.singup_content').hide();
    $('#loginLink').on('click', function () {
        console.log('working')
        $('.login_content').hide();
        $('.singup_content').show();
        $('.login').find('.card').removeClass('card_pos');
        $('.login').find('.card').addClass('margin_10');
    });
    $('#signUpLink').on('click', function () {
        console.log('working')
        $('.singup_content').hide();
        $('.login_content').show();
        $('.login').find('.card').removeClass('margin_10');
        $('.login').find('.card').addClass('card_pos');
    });
    $(document).click(function () {
        $('.logoutMenu').removeClass('show');
    });
    $('.dropdownBtn').click(function (e) {
        e.stopPropagation();
        console.log('working');
        $(this).next('.logoutMenu').toggleClass('show');
    });
    //$('.successMsg').hide();
    //$('.errorsMsg').hide();
    $('#submitBtn').prop("disabled", true);
    /* Employee Form Validation */
    $("#empNameGroup input").on("focusout", function () {
        //validateResourceName();
        const empName = document.getElementById("empName").value;
        const pattern = /^[a-zA-Z0-9][a-zA-Z0-9_]*[a-zA-Z0-9](?<![-?\d+\.?\d*$]{6,}.*)$/
        console.log($(this));
        if (!pattern.test(empName) && empName.length === 0) {
            console.log("not a match");
            $('#empNameGroup').children('.errorsMsg').removeClass('d-none');
            $('#empNameGroup').children('.successMsg').addClass('d-none');
           // $('#submitBtn').attr('disabled');
            $('#submitBtn').prop("disabled", true);
;
           
        } else {
            console.log("match");
            $('#empNameGroup').children('.successMsg').removeClass('d-none');
            $('#empNameGroup').children('.errorsMsg').addClass('d-none');
           // $('#submitBtn').removeAttr('disabled');
            $('#submitBtn').prop("disabled", false);
            
        }
    });

    //Employee Code
    $('#empCodeGroup input').on('focusout', function () {
        const empCode = document.getElementById("empCode").value;
        const pattern = /^[A-Z\d]{1}[A-Z\d._/\-]{49}$/
       
        if (!pattern.test(empCode) && empCode.length === 0) {
            console.log("not a match");
            $('#empCodeGroup').children('.errorsMsg').removeClass('d-none');
            $('#empCodeGroup').children('.successMsg').addClass('d-none');
            $('#submitBtn').prop("disabled", true);
        } else {
            console.log("match");
            $('#empCodeGroup').children('.successMsg').removeClass('d-none');
            $('#empCodeGroup').children('.errorsMsg').addClass('d-none');
            $('#submitBtn').prop("disabled", false);
        }
    })
    
    //FirstName
    $('#empfirstnameGroup input').on('focusout', function () {
        const firstName = document.getElementById("empfirstname").value;
        const pattern = /^[a-zA-Z0-9][a-zA-Z0-9_]*[a-zA-Z0-9](?<![-?\d+\.?\d*$]{6,}.*)$/
        if (!pattern.test(firstName) && firstName.length === 0) {
            console.log("not a match");
            $('#empfirstnameGroup').children('.errorsMsg').removeClass('d-none');
            $('#empfirstnameGroup').children('.successMsg').addClass('d-none');
            $('#submitBtn').prop("disabled", true);

        } else {
            console.log("match");
            $('#empfirstnameGroup').children('.successMsg').removeClass('d-none');
            $('#empfirstnameGroup').children('.errorsMsg').addClass('d-none');
            $('#submitBtn').prop("disabled", false);
        }
    });

    //LastName
    $('#empLastNameGroup input').on('focusout', function () {
        const lastName = document.getElementById("empLastName").value;
        const pattern = /^[a-zA-Z0-9][a-zA-Z0-9_]*[a-zA-Z0-9](?<![-?\d+\.?\d*$]{6,}.*)$/
        if (!pattern.test(lastName) && lastName.length === 0) {
            console.log("not a match");
            $('#empLastNameGroup').children('.errorsMsg').removeClass('d-none');
            $('#empLastNameGroup').children('.successMsg').addClass('d-none');
            $('#submitBtn').prop("disabled", true);
        } else {
            console.log("match");
            $('#empLastNameGroup').children('.successMsg').removeClass('d-none');
            $('#empLastNameGroup').children('.errorsMsg').addClass('d-none');
            $('#submitBtn').prop("disabled", false);
        }
    });

    //Emp Email
   
    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const validate = () => {
        const email = $('#empEmail').val();
        if (validateEmail(email)) {
            $('#emailGroup').children('.successMsg').removeClass('d-none');
            $('#emailGroup').children('.errorsMsg').addClass('d-none');
            $('#submitBtn').prop("disabled", true);
        } else {
            $('#emailGroup').children('.errorsMsg').removeClass('d-none');
            $('#emailGroup').children('.successMsg').addClass('d-none');
            $('#submitBtn').prop("disabled", false);
        }
        return false;
    }

    $('#empEmail').on('input', validate);

    //Date Validation
    $('#datePicker input').on('change', function () {
        const dateVal = $("input[name=_submit]").val();
        if (dateVal.length === 0) {
            console.log("not a match");
            $('#datePicker').children('.errorsMsg').removeClass('d-none');
            $('#datePicker').children('.successMsg').addClass('d-none');
            $('#submitBtn').prop("disabled", true);
        } else {
            console.log("match");
            $('#datePicker').children('.successMsg').removeClass('d-none');
            $('#datePicker').children('.errorsMsg').addClass('d-none');
            $('#submitBtn').prop("disabled", false);
        }
    });

    //Zip Postal code
   
    $('#zipCodeGroup input').on('focusout', function () {
        const zip = document.getElementById("zipCode").value;
        const pattern = /^[1-9]+[0-9]*$/
        if (!pattern.test(zip) && zip.length === 0 && (zip.length) < 6 || (zip.length) > 6) {
            console.log("not a match");
            $('#zipCodeGroup').children('.errorsMsg').removeClass('d-none');
            $('#zipCodeGroup').children('.successMsg').addClass('d-none');
            $('#submitBtn').prop("disabled", true);
        }
        else {
            console.log("match");
            $('#zipCodeGroup').children('.successMsg').removeClass('d-none');
            $('#zipCodeGroup').children('.errorsMsg').addClass('d-none');
            $('#submitBtn').prop("disabled", false);
        }
    });

    //Mobile Number Validation
    $('#mobileNoGroup input').on('change', function () {
        const mobileNo = document.getElementById("empMobileNo").value;
        if (isNaN(mobileNo) || mobileNo.indexOf(" ") != -1 || mobileNo.length === 0) {
            $('#mobileNoGroup').children('.errorsMsg').removeClass('d-none');
            $('#mobileNoGroup').children('.successMsg').addClass('d-none');
            $('#submitBtn').prop("disabled", true);
            return false;
        }
        if (mobileNo.length < 10 || mobileNo.length > 10) {
            $('#mobileNoGroup').children('.errorsMsg').removeClass('d-none');
            $('#mobileNoGroup').children('.successMsg').addClass('d-none');
            $('#submitBtn').prop("disabled", true);
            return false;
        }
        if (mobileNo.charAt(0) != "9") {
            $('#mobileNoGroup').children('.errorsMsg').removeClass('d-none');
            $('#mobileNoGroup').children('.successMsg').addClass('d-none');
            $('#submitBtn').prop("disabled", true);
            return false
        }
        else {
            $('#mobileNoGroup').children('.successMsg').removeClass('d-none');
            $('#mobileNoGroup').children('.errorsMsg').addClass('d-none');
            $('#submitBtn').prop("disabled", false);
        }
       
    });

    //Select2 DropDown Validation States
    $('#selectStateGroup select').on('change', function () {
        debugger;
        const $select2 = $('.form-control-select2', $(this));
        if ($select2.val() === '') {
            console.log("not a match");
            $('#selectStateGroup').children('.errorsMsg').removeClass('d-none');
            $('selectStateGroup').children('.successMsg').addClass('d-none');
            $('#submitBtn').prop("disabled", true);
        } else {
            console.log("match");
            $('#selectStateGroup').children('.successMsg').removeClass('d-none');
            $('#selectStateGroup').children('.errorsMsg').addClass('d-none');
            $('#submitBtn').prop("disabled", false);
        }
    });

    //Select2 DropDown Validation
    $('#selectCountryGroup select').on('change', function () {
        debugger;
        const $select2 = $('.form-control-select2', $(this));
        if ($select2.val() === '') {
            console.log("not a match");
            $('#selectCountryGroup').children('.errorsMsg').removeClass('d-none');
            $('selectCountryGroup').children('.successMsg').addClass('d-none');
            $('#submitBtn').prop("disabled", true);
        } else {
            console.log("match");
            $('#selectCountryGroup').children('.successMsg').removeClass('d-none');
            $('#selectCountryGroup').children('.errorsMsg').addClass('d-none');
            $('#submitBtn').prop("disabled", false);
        }
    });

    //Permenent Address Validation 
    $('#addressGroup #addressText').on('change', function () {
        debugger;
        const empAddress = document.getElementById("addressText").value;
        const pattern = /^[a-zA-Z0-9\s,'-]*$/

        if (!pattern.test(empAddress) && empAddress.length === 0) {
            console.log("not a match");
            $('#addressGroup').children('.errorsMsg').removeClass('d-none');
            $('#addressGroup').children('.successMsg').addClass('d-none');
            $('#submitBtn').prop("disabled", true);

        } else {
            console.log("match");
            $('#addressGroup').children('.successMsg').removeClass('d-none');
            $('#addressGroup').children('.errorsMsg').addClass('d-none');
            $('#submitBtn').prop("disabled", false);
        }
    });

    $('#submitform input').keypress(function (e) {
        // e.preventDefault();
        if (e.which == 32) {
            return false;
        }
    })
    $('.themeTab').click(function () {
        var id = $(this).attr('data-id');
        var ref = $(this).attr('data-ref');
        $('.navTabContents').addClass('tab_none');
        $('#'+ref+id).removeClass('tab_none tab_block');
        console.log('wokring')
    });
    $('.nav-red-carousal').owlCarousel({
        loop: false,
        margin: 10,
        dots: false,
        items: 4
    });
   
});

