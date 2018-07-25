let socialIcons = document.querySelectorAll('.si');
socialIcons.forEach(function(icon) {
    icon.addEventListener('mouseover',open)
    icon.addEventListener('mouseout',close)
})
function open(){
    this.nextElementSibling.style.maxWidth = '100px';
    this.nextElementSibling.style.visibility = 'visible';
    this.nextElementSibling.style.opacity = '1';
}
function close(){
   this.nextElementSibling.style.visibility = 'hidden';
   this.nextElementSibling.style.maxWidth = '0px';
   this.nextElementSibling.style.opacity = '0';
}

function openSearchWindow(){
    document.body.classList.add('searchOpen');
}
function closeSearchWindow(){
    document.body.classList.remove('searchOpen');
}


// GETTING DATA FROM GOOGLE  
function getList(e){
    let form = $('#searchForm').serialize();
    let res = ''
    $.post('/search',form,function(results){
        results.forEach((result) => {
           res += `<a onclick='getDetails(this)' value=${result.place_id}><li><span class="title">${result.structured_formatting.main_text}</span><span class="subtitle">${result.structured_formatting.secondary_text}</span></li></a>`
        })
        document.getElementById('results').innerHTML = res
    })
}

function getDetails(e){
    let placeid = $(e).attr('value')
    console.log(placeid)
    $.get('/search/'+placeid,function(details){
        document.querySelector('.wrapper').style.background = 'url(https://maps.googleapis.com/maps/api/place/photo?maxwidth='+details.photos[0].width+'&photoreference='+details.photos[0].photo_reference+'&key=AIzaSyAdM0WKXPgir7Vqb-t-uuqStoCaAlla4o0)';
        document.querySelector('.wrapper').style.backgroundSize = 'cover';
        document.querySelector('#locationName span').innerHTML = details.name;
    })

    document.getElementById('searchForm').reset()
    document.getElementById('results').innerHTML = ''
    closeSearchWindow()
}