import ScrollMagic from 'scrollmagic';

export const cssParallax = (cont, el, radiusVal) => {
        document.querySelector(cont).addEventListener("mousemove",(event) => {

        let cx = Math.ceil(document.documentElement.clientWidth / 2);
        let cy = Math.ceil(document.documentElement.clientHeight / 2);

        let dx = event.pageX - cx;
        let dy = event.pageY - cy;

        let tiltx = (dy / cy);
        let tilty = - (dx / cx);
        let radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
        let degree = (radius * radiusVal);

        document.querySelector(el).style.cssText = `-webkit-transform: rotate3d( ${tiltx}, ${tilty}, 0, ${degree}deg)`;
        document.querySelector(el).style.cssText = `transform: rotate3d( ${tiltx}, ${tilty}, 0, ${degree}deg)`;
    });
}

export const viewersCount = (el) =>{
        const element = document.getElementById(el);
       let value = 1000030020;
        setInterval(()=>{
                value += 1;
                element.textContent = value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
        }, 10)
}

export const customCursor = (cont) => {
    const cursor = document.querySelector(".cursor");

    document.querySelector(cont).addEventListener("mousemove",(event) => {
        let x = event.clientX;
        let y = event.clientY;
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
    });
}

export const onChangeCursor = (el, classTarget) => {
    document.querySelector(el).addEventListener("mouseover", ()=>{
        const cursor = document.querySelector(".cursor");
        cursor.classList.add(classTarget);
    })

    document.querySelector(el).addEventListener("mouseout", ()=>{
        const cursor = document.querySelector(".cursor");
        cursor.classList.remove(classTarget);
    })

}

export const wipes = () => {
    let controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            addIndicators: false,
            triggerHook: 'onLeave',
            duration: "200%" // this works just fine with duration 0 as well
            // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
            // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
        }
    });

    let slides = document.querySelectorAll("section.panel");

    for (let i=0; i<slides.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: slides[i]
        })
            .setPin(slides[i], {pushFollowers: false})
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
    }
}

export const onSelectItemDo = (classes, innerTexts ) => {

    const allItem = document.querySelectorAll(".item");
    const doTarget = document.querySelector(".do_target")
    const doContent = document.querySelector(".do_content")

    let activeIndex = 0;

    allItem[activeIndex].classList.add(`${classes[activeIndex]}_hover`);
    allItem[activeIndex].classList.add("item_hover");
    doTarget.classList.add(`do_${classes[activeIndex]}`);
    doContent.innerHTML = `<span>${innerTexts[activeIndex]}</span><a>learn more</a>`;


    for (let i=0; i<=allItem.length; i++){
        allItem[i].classList.add(classes[i]);

        allItem[i].addEventListener("mouseover", ()=>{
            if(allItem[i] !==allItem[activeIndex]){
                allItem[activeIndex].classList.remove(`${classes[activeIndex]}_hover`);
                allItem[activeIndex].classList.remove("item_hover");
                doTarget.classList.remove(`do_${classes[activeIndex]}`);
                allItem[i].classList.add(`${classes[i]}_hover`);
                allItem[i].classList.add("item_hover");
                doTarget.classList.add(`do_${classes[i]}`);
                doContent.innerHTML = `<span>${innerTexts[i]}</span><a>learn more</a>`;

                activeIndex = i;
            }
        })
    }
}