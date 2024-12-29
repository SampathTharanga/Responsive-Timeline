let actress_data = {
    "presentYear":[
            "Tamil Actress | 2013–present",
            "Hindi Actress | 2014–present"],

    "name":[
            "Meghali",
            "Deepika Singhe"],
    
    "description":[
            "Meghali is an Indian actress who has appeared in Tamil cinema . She will make her Tamil debut in P. Vijay's upcoming film ...",
            "Singh made her debut in the Star Plus series Diya Aur Baati Hum playing the role of Sandhya who is a fun-loving, spirited ..."],

    "readmore":[
            "https://en.wikipedia.org/wiki/Meghali",
            "https://en.wikipedia.org/wiki/Deepika_Singh"],

    "photo":[
            "https://i.pinimg.com/originals/3d/b6/41/3db6412a68e022a4ed39cdd97b43fb93.jpg",
            "https://i.pinimg.com/originals/61/80/7c/61807c06d3c73d66392f55210ecc1752.jpg"]
};

/* Node 01 - Data */
document.getElementById('act1-name').innerHTML = actress_data.name[0];
document.getElementById('act1-present').innerHTML = actress_data.presentYear[0];
document.getElementById('act1-description').innerHTML = actress_data.description[0] + ' <a class="text-danger" id="act1-readmore" target="_blank">read more</a>';
document.getElementById('act1-readmore').href = actress_data.readmore[0];
document.getElementById('act1-pop-name').innerHTML = actress_data.name[0];
document.getElementById('act1-img').src = actress_data.photo[0];
document.getElementById('act1-popimg').src = actress_data.photo[0];

/* Node 02 - Data */
document.getElementById('act2-name').innerHTML = actress_data.name[1];
document.getElementById('act2-present').innerHTML = actress_data.presentYear[1];
document.getElementById('act2-description').innerHTML = actress_data.description[1] + ' <a class="text-danger" id="act2-readmore" target="_blank">read more</a>';
document.getElementById('act2-readmore').href = actress_data.readmore[1];
document.getElementById('act2-pop-name').innerHTML = actress_data.name[1];
document.getElementById('act2-img').src = actress_data.photo[1];
document.getElementById('act2-popimg').src = actress_data.photo[1];