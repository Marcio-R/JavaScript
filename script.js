function carregar(){
    var msg = document.getElementById('msg')
    var foto = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //hora = 20
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12)
    {
        //Bom dia
        foto.src = 'modelo/foto_manha.png'
        document.body.style.background = '#58ACFA'
    }

    else if(hora >=12 && hora <=18)
    {
        //Boa Tarde
        foto.src = 'modelo/foto_tarde.png'
        document.body.style.background ='#F7BE81'
    }
    else{
        //Boa noite!
        foto.src = 'modelo/foto_noite.png'
        document.body.style.background = '#6E6E6E'
    }

}
