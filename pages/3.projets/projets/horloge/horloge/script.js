horloge = 
{ 

    init :()  =>
    {   
        let date = new Date;
        let degSecondes = date.getSeconds()*6;
        let degMinutes = date.getMinutes()*6;
        let degHours = date.getHours()*30;
        

        document.getElementById("horloge_seconde").style = "transform : rotate("+degSecondes+"deg)";
        document.getElementById("horloge_minute").style = "transform : rotate("+((degMinutes)+degSecondes/60)+"deg)";
        document.getElementById("horloge_heure").style = "transform : rotate("+((degHours)+degMinutes/12)+"deg)";

        setTimeout("horloge.init()", 1000);

        horloge.createNum();
    },

    createNum: () =>
    {
		let i = 0;
        let x=0;
        let y=0;
        let angle = 0;
        let pasChiffre = -90;
        let rayon;

		for(i = 1; i<=12; i++)
		{
			rayon= 230;
			pasChiffre = pasChiffre + 30;
			angle = (pasChiffre)*(Math.PI / 180);
           

			x = (230 + rayon * Math.cos(angle));
			y = (230 + rayon * Math.sin(angle));

			chiffre = document.createElement("div");
			chiffre.id = "horloge_chiffre"+i;
            chiffre.className = "chiffre";
            chiffre.style.left = x+"px";
			chiffre.style.top = y+"px";
			chiffre.innerHTML = i;
		
            document.getElementById("horloge_cadre").appendChild(chiffre);
			
    	}
    }


}

