function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.querySelector(`input#txtano`);
    var res = document.querySelector(`div#res`);

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("Verifique os dados e tente novamente!!")
    } else{
        var fsex = document.querySelectorAll(`input[name="radsex"]`);
        var idade = (ano - Number(fano.value));
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        img.style.display = 'block'; 
        img.style.margin = 'auto';

        if (fsex[0].checked){
            genero = 'Homem'
            if( idade>=0 && idade<10){
                //Criança
                img.setAttribute('src', 'imagens/bebehomem.png');
            } else if(idade>=10 && idade<21){
                //Jovem
                img.setAttribute('src', 'imagens/jovemhomem.png');
            } else if(idade>=21 && idade<50){
                //adulto
                img.setAttribute('src', 'imagens/adultohomem.png');
            } else{
                //idoso
                img.setAttribute('src', 'imagens/idosohomem.png')
            }

        } else if(fsex[1].checked){
            genero = 'Mulher'
            if( idade>=0 && idade<10){
                //Criança
                img.setAttribute('src', 'imagens/bebemulher.png');
            } else if(idade>=10 && idade<21){
                //Jovem
                img.setAttribute('src', 'imagens/jovemmulher.png');
            } else if(idade>=21 && idade<50){
                //adulto
                img.setAttribute('src', 'imagens/adultamulher.png');
            } else{
                //idoso
                img.setAttribute('src', 'imagens/idosamulher.png');
            }

        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img);
    }
}