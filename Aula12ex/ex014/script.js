function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var dataHora = new Date()
    var hora = dataHora.getHours()
    var dataMin = new Date()
    var min = dataMin.getMinutes()
    //var hora = 20
    
    msg.innerHTML = `${hora}:${min}`
    if (hora >= 0 && hora < 12 ){
        // BOM DIA
        img.src = 'manha.png'
        document.body.style.background = '#fec463'
    } else if (hora >= 12 && hora <= 18){
        // BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#75474f'
    } else{
        // BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#6e4b6b'
    }
}