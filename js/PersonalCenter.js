function optionCart (name1, name2) {

    var all1 = document.getElementsByClassName(name1)[0];
    var all3 = all1.getElementsByTagName('a');
    var all2 = document.getElementsByClassName(name2);
    for(let i = 0; i < all3.length; i++){
        all3[i].index = i;
        all3[i].onclick = function () {
            for(let j = 0; j < all3.length; j++){
                all3[j].className = '';
                all2[j].style.display = 'none';
            }
            this.className = 'active';
            all2[this.index].style.display = 'block';
            // console.log(this.index);
        }
    }
}
optionCart('bosy_r_option', 'content');