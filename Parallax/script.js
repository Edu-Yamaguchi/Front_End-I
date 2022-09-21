
        let stars = document.getElementById("stars");
        let moon = document.getElementById("moon");
        let mountains_behind = document.getElementById("mountain");
        let text = document.getElementById("texts");
        let btn = document.getElementById("btn");
        let mountainf = document.getElementById("mountainf");
        let header = document.querySelector('header');

        window.addEventListener("scroll", function(){
            let value = window.scrollY;
            stars.style.left = value * 1.5 + 'px';
            moon.style.top = value * 1.05 + 'px';
            mountains_behind.style.top = value * 0.5 + 'px';
            texts.style.marginRight = value * 4 + 'px';
            texts.style.marginTop = value * 1.5 + 'px';
            btn.style.marginTop = value * 1.5 + 'px';
            header.style.top = value * 0.5 + 'px';
        })