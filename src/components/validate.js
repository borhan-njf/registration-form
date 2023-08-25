export const validate = (data) =>{

    const errors={};

    if(!data.name.trim()){
        errors.name='name is required'
    }else{
        delete errors.name;
    }

    if(!data.email.trim()){
        errors.email='email is required'
    }else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(data.email))(
        errors.email='email is invalid'
    )
    else{
        delete errors.name;
    }

    if(!data.password.trim()){
        errors.password='password is required'
    }else if(data.password.length < 6){
        errors.password='password must be 6 characters or more'
    }else{
        delete errors.password;
    }

    if(!data.confirmPassword.trim()){
        errors.confirmPassword='confirm the password'
    }else if(data.password !== data.confirmPassword){
        errors.confirmPassword='password do not match'
    }else{
        delete errors.confirmPassword;
    }

    if(!data.isAccepted){
        errors.isAccepted='accept the regulations';
    }else{
        delete errors.isAccepted;
    }

    return errors;
}