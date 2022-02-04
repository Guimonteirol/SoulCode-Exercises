//console.log(document.forms.meuForm) //ACESSO AO FORM Q CRIEI

document.forms.meuForm.addEventListener("submit", function(e){
    e.preventDefault();/*IMPEDE QUE CARREGUE A OUTRA PAG*/
    let valid = true;

    // Nome completo
    const smallName = meuForm.nome_completo.nextElementSibling;

    //console.log(meuForm.nome_completo.value.split(" "));
    if(meuForm.nome_completo.value.split(" ").length <= 1){
        //console.log("Nome é inválido");
        meuForm.nome_completo.classList.add("invalid")
        //meuForm.nome_completo.value = " " //apagar campo
        smallName .innerHTML = 'Seu nome está incompleto';
    }

    else{
       // console.log("Nome é válido")
        meuForm.nome_completo.classList.remove("invalid");
        smallName.innerHTML = " ";
    }

    //Email
    const smallEmail = meuForm.email.nextElementSibling;

    if(!meuForm.email.value.includes("gmail")){
        meuForm.email.classList.add("invalid")
        smallEmail.innerHTML = "Provedor inválido"
    }
    else{
        meuForm.email.classList.remove("invalid")
        smallEmail.innerHTML = "";
    }

    //Senha
    const smallSenha = meuForm.senha.nextElementSibling; //SMALL NO LADO DO INPUT SENHA

    if(meuForm.senha.value.length < 8){
        meuForm.senha.classList.add("invalid");
        smallSenha.innerHTML = "Senha muito curta"
    }
    else{
        meuForm.senha.classList.remove("invalid");
        smallSenha.innerHTML = " ";
    }



});