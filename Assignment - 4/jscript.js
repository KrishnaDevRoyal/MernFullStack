$(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please supply your first name'
                    }
                }
            },
             last_name: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please supply your last name'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your password'
                    },
                    pass: {
                        message: 'Please supply a valid password'
                    }
                }
            },
            reenterpassword: {
                validators: {
                    notEmpty: {
                        message: 'Please re-enter your password'
                    },
                    pass: {
                        message: 'Please re-enter the same password'
                    }
                }
            },
            gender: {
                validators: {
                    notEmpty: {
                        message: 'Please select your gender'
                    }
                }
            },
            age: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your age'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your phone number'
                    },
                    phone: {
                        country: 'IND',
                        message: 'Please supply a vaild 10 digit indian phone number'
                    }
                }
            },
            address: {
                validators: {
                     stringLength: {
                        min: 8,
                        message: 'Please supply your full address'
                    },
                    notEmpty: {
                        message: 'Please supply address'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your state with atleast 3 characters'
                    },
                    stringLength: {
                        min: 3
                    }
                }
            },
            country: {
                validators: {
                    notEmpty: {
                        message: 'Please select your country'
                    }
                }
            },
            language: {
                validators: {
                    notEmpty: {
                        message: 'Please select your known languages'
                    }
                }
            },
            checkbox2: {
                validators: {
                    notEmpty: {
                        message: 'Please confirm your details and tick the box'
                    }
                }
            }
        }
    })
    .on('success.form.bv', function(e) {
        $('#success_message').slideDown({ opacity: "show" }, "slow")
            $('#contact_form').data('bootstrapValidator').resetForm();

        // Prevent form submission
        e.preventDefault();

        // Get the form instance
        var $form = $(e.target);

        // Get the BootstrapValidator instance
        var bv = $form.data('bootstrapValidator');

        // Use Ajax to submit form data
        $.post($form.attr('action'), $form.serialize(), function(result) {
            console.log(result);
        }, 'json');
    });
});