$(function() {
    $("a").on("click", function() {
        const id = $(this).attr("id");
        const pageData = getPageData(id);

        $("#page").html(pageData);

        changeMenuOption($(this));
    });

    function changeMenuOption(elem) {
        $("a").css({
            "font-weight": "normal",
        })
        elem.css({
            "font-weight": "bold",            
        })
    }

    /**
     * Gets the data required for changing website 
     * @param id - id of menu option which was clicked 
     * @returns html code in String 
     */
    function getPageData(id) {
        if(id == "author") {
            return (`
                <div class="row innerContent">
                    <article class="innerContent">
                        <div class="title text-center">Autor</div>
                        Autorem strony jest Szymon Rychter <br> <br>
                        <div class="text-center">
                            <!-- <img src="res/grzyby.jpg" alt="grzyby" id="grzyby"> -->
                        </div>
                    </article>
                </div>
            `)
        }
        if(id == "mainPage") {
            return (`
                <div class="row innerContent">
                    <article class="innerContent">
                        <div class="title text-center">Strona główna</div>
                        Strona poświęcona grzybom. Na stronie znajdują się grzyby jadalne i niejadalne oraz ich opisy. <br> <br>
                        <div class="text-center">
                            <img src="res/grzyby.jpg" alt="grzyby" id="grzyby">
                        </div>
                    </article>
                </div>
            `)
        }
        if(id == "subpage1") {
            return (`
                <div class="row innerContent">
                    <article class="col-4 text-center">
                        <div class="title">Borowik Szlachetny</div>
                        <img src="res/borowik.jpg" alt="zdjecie borowika">
                        <div class="grzybOpis">
                            Gatunek grzybów z rodziny borowikowatych, 
                            potocznie nazywany prawdziwkiem. Występuje w Ameryce Północnej 
                            (głównie na zachód od Gór Skalistych, rzadziej w części centralnej 
                            i wschodniej kontynentu) i w Europie. Ponadto został zawleczony 
                            do Nowej Zelandii i południowej Afryki. W Polsce często 
                            spotykany zwłaszcza w górach, rzadziej na niżu, zwykle rzadki 
                            w okolicach wielkich miast.
                        </div>
                    </article>
                    <article class="col-4 text-center">
                        <div class="title">Maślak Ziarnisty</div>
                        <img src="res/maslak.jpg" alt="zdjecie maślaka">
                        <div class="grzybOpis">
                            Gatunek jadalnego grzyba z rodziny borowikowatych, wydzielający kropelki mlecznego soku. 
                            Rośnie tylko w lasach iglastych, sosnowych, zwykle na ich skraju i przy drogach. 
                            Owocniki pojawiają się od czerwca do października.
                        </div>
                    </article>
                    <article class="col-4 text-center">
                        <div class="title">Czubajka Kania</div>
                        <img src="res/kania.jpg" alt="zdjecie czubajki">
                        <div class="grzybOpis">
                            Gatunek jadalnego grzyba z rodziny pieczarkowatych. 
                            Ma orzechowy smak i zapach. Jadalne są tylko kapelusze, 
                            które przyrządza się jak kotlety w panierce. 
                            To grzyb o wyśmienitym smaku.
                        </div>
                    </article>
                </div>
            `);
        }
        if(id == "subpage2") {
            return (`
                <div class="row innerContent">
                    <article class="col-4 text-center">
                        <div class="title">Muchomor czerwony</div>
                        <img src="res/muchomor.jpg" alt="zdjecie borowika">
                        <div class="grzybOpis">
                            Gatunek trującego grzyba z rodziny muchomorowatych, 
                            z charakterystycznym czerwonym kapeluszem w białe plamki.
                        </div>
                    </article>
                    <article class="col-4 text-center">
                        <div class="title">Gąska biaława</div>
                        <img src="res/gaska.jpg" alt="zdjecie maślaka">
                        <div class="grzybOpis">
                            Gatunek niejadalnego grzyba z rodziny gąskowatych o nieprzyjemnym zapachu i ostrym smaku.
                        </div>
                    </article>
                    <article class="col-4 text-center">
                        <div class="title">Gołąbek lepki</div>
                        <img src="res/golabek.jpg" alt="zdjecie czubajki">
                        <div class="grzybOpis">
                            Gatunek grzybów z rodziny gołąbkowatych. Gołąbek lepki to grzyb niejadalny, ale nie trujący.
                        </div>
                    </article>
                </div>
            `);
        }
    }
});