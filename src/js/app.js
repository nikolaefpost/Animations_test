import {cssParallax, viewersCount, customCursor, onChangeCursor, wipes, onSelectItemDo, sliderMove, preloaderAction} from "./modules/functions.js";



document.addEventListener("DOMContentLoaded", function() {

    const classes = ["gear_item", "star2_item", "graphic_item", "scale_item", "video_item", "headphone2_item"];
    const innerTexts = [
        "Channel Operation and Management",
        "Creative Services for Infuencers",
        "Graphic Design & Photography",
        "Business Development",
        " Lyric Videos & Animation",
        "Brand Campaigns"
    ]
    const subject = [".do_boll1", ".do_boll2", ".do_heart"];
    const teamMemberPath = [
        {image: "./assets/img/sliderPhoto1.png", name: "Thomas French", position: "Video Maker"},
        {image: "./assets/img/sliderPhoto2.png", name: "Thomas French", position: "Video Maker"},
        {image: "./assets/img/sliderPhoto3.png", name: "Thomas French", position: "Video Maker"},
        {image: "./assets/img/sliderPhoto4.png", name: "Thomas French", position: "Video Maker"},
        {image: "./assets/img/sliderPhoto1.png", name: "Thomas French", position: "Video Maker"},
        {image: "./assets/img/sliderPhoto2.png", name: "Thomas French", position: "Video Maker"},
    ]

    preloaderAction();
    wipes();
    cssParallax('.main_parallax', '.parallax_base', 20);
    viewersCount("viewers");
    customCursor('.main_parallax');
    onChangeCursor(".contact", "hover_contact");
    onChangeCursor(".menu", "hover_menu");
    onChangeCursor(".floaat", "hover_floaat");
    onSelectItemDo(classes, innerTexts, subject);
    sliderMove(".prev", ".next", ".shift_block", teamMemberPath);

































    // const yearly = document.getElementById("year");
    // const starter = document.getElementById("starter");
    // const professional = document.getElementById("professional");
    // const company = document.getElementById("company");
    // const cardBlock = document.getElementById("card");
    // const targets = cardBlock.querySelectorAll(".price");
    //
    // const price = [
    //     {starter: 19, professional: 54, company: 89},
    //     {starter: 12, professional: 36, company: 56},
    // ]
    //
    // const onHandleClick = (elem, id) => {
    //     if (elem.classList.contains("white_button")){
    //         monthly.classList.toggle("white_button")
    //         yearly.classList.toggle("white_button")
    //         targets.forEach(item=>{
    //             item.classList.toggle("price_left")
    //         })
    //
    //         if(id ==="month"){
    //             starter.textContent = `$${price[0].starter}`;
    //             professional.textContent = `$${price[0].professional}`;
    //             company.textContent = `$${price[0].company}`;
    //
    //
    //         }else {
    //             starter.textContent = `$${price[1].starter}`;
    //             professional.textContent = `$${price[1].professional}`;
    //             company.textContent = `$${price[1].company}`;
    //         }
    //     }
    //     setTimeout(()=> targets.forEach(item=>{
    //         item.classList.remove("price_left")
    //     }),1000)
    // }
    //
    // monthly.addEventListener( "click" , () => onHandleClick(monthly, "month"));
    // yearly.addEventListener( "click" , () => onHandleClick(yearly, "year"));
});