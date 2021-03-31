$(document).ready(function () {
    const projects = getProjectInfo();
    populatePage(projects);
    applyFilters();
    handleSliders(projects);
});

function getProjectInfo(){
     // Add in info for each project as a separate JSON in order to dynamically generate cards!
    // Name is used as title, while the identifier is used for any class names, ids, etc.
    const ecobud = {
        Name: "EcoBud",
        Identifier: "ecobud",
        Categories: ["personal", "competitive"],
        ImgSrc: "./images/projects/bbug.png",
        Date: "August 2020",
        Desc:
            "First slide: quick description and/or tagline for the project (what does it do?)",
        Desc2:
            "Second slide: More technical details about the project. What did I use to make it?",
        Desc3:
            "Third slide: Any other quick details that are specific to the project, like awards!",
    };

    const bbug = {
        Name: "BrowserBug",
        Identifier: "bbug",
        Categories: ["personal", "frontend"],
        ImgSrc: "../images/projects/test.png",
        Date: "September 2020",
        Desc:
            "First slide: quick description and/or tagline for the project (what does it do?)",
        Desc2:
            "Second slide: More technical details. What did I use to make it?",
        Desc3:
            "Third slide: Any other quick details that are specific to the project, like awards!",
    }

    // add each JSON to final projects array
    const projects = [ecobud, bbug];
    return projects;
}

function populatePage(projects) {
    function makeCards() {
        let finalHTML = document.createElement("div");
        finalHTML.classList.add("projects")
        for (let i = 0; i < projects.length; i++) {
            finalHTML.appendChild(makeCard(projects[i]));
        }

        $(".proj-container").html(finalHTML);
    }

    function makeCard(project) {
        let name = project.Name,
            identifier = project.Identifier;
        (categories = project.Categories),
            (imgSrc = project.ImgSrc),
            (date = project.Date),
            (desc = project.Desc);

        // create the card div and add appropriate classes for filtering
        let card = document.createElement("div");
        card.classList.add("card");
        for (let i = 0; i < categories.length; i++) {
            card.classList.add(categories[i]);
        }

        // create the sliders
        card.appendChild(createSliders(identifier));

        // create the image box
        let rightContent = document.createElement("div");
        rightContent.classList.add("right-content");
        rightContent.appendChild(createImg(imgSrc));

        // create the main card information
        rightContent.appendChild(
            createCardInfo(date, categories, name, desc, identifier)
        );
        card.appendChild(rightContent);

        return card;
    }

    function createSliders(identifier) {
        let sliders = document.createElement("div");
        sliders.classList.add("sliders");
        sliders.innerHTML =
            `<label id=` +
            identifier +
            ` class="active-slide tap tap-1"></label><label id=` +
            identifier +
            ` class="tap tap-2"></label><label id=` +
            identifier +
            ` class="tap tap-3"></label>`;
        return sliders;
    }

    function createImg(imgSrc) {
        let imgBox = document.createElement("div");
        imgBox.classList.add("imgBox");

        let img = document.createElement("img");
        img.src = imgSrc;
        imgBox.appendChild(img);

        return imgBox;
    }

    function createCardInfo(date, categories, name, desc, identifier) {
        let cardInfo = document.createElement("div");
        cardInfo.classList.add("card-info");
        cardInfo.appendChild(createDateCategories(date, categories));
        let cardTextContent = createTextContent(name, desc, identifier);
        cardInfo.appendChild(cardTextContent[0]);
        cardInfo.appendChild(cardTextContent[1]);
        cardInfo.appendChild(cardTextContent[2]);

        return cardInfo;
    }

    function createDateCategories(date, categories) {
        let dateCategories = document.createElement("div");
        dateCategories.classList.add("date-and-categories");

        let cardDate = document.createElement("p");
        cardDate.textContent = date;
        dateCategories.appendChild(cardDate);

        let categoryList = document.createElement("ul");

        for (let i = 0; i < categories.length; i++) {
            let newListItem = document.createElement("li");
            newListItem.textContent = categories[i];
            categoryList.appendChild(newListItem);
        }

        dateCategories.appendChild(categoryList);
        return dateCategories;
    }

    function createTextContent(name, desc, identifier) {
        let cardName = document.createElement("h2");
        cardName.textContent = name;

        let cardDesc = document.createElement("p");
        cardDesc.textContent = desc;

        //   necessary to add the project identifier to the classlist for slider functionality
        cardDesc.classList.add(identifier);
        cardDesc.classList.add("description");
        let cardLink = document.createElement("a");
        cardLink.href = identifier;
        cardLink.classList.add("learnMore");
        cardLink.id = identifier;
        cardLink.textContent = "learn more";

        return [cardName, cardDesc, cardLink];
    }
    makeCards();

    // FINAL CARD STRUCTURE: 

    // <div class="card personal comp">
    //       <div class="sliders">
    //         <label id="ecobud" class="active-slide tap tap-1"></label>
    //         <label id="ecobud" class="tap tap-2"></label>
    //         <label id="ecobud" class="tap tap-3"></label>
    //       </div>
    //       <div class="right-content">
    //         <div class="imgBox">
    //           <img src="./images/projects/bbug.png" alt="" />
    //         </div>
    //         <div class="card-info">
    //           <div class="date-and-categories">
    //             <p>August 2020</p>
    //             <ul>
    //               <li>personal</li>
    //               <li>school</li>
    //               <li>frontend</li>
    //               <li>backend</li>
    //             </ul>
    //           </div>
    //           <h2 class="ecobud">EcoBud</h2>
    //           <p class="ecobud description">
    //             First slide: quick description and/or tagline for the project
    //             (what does it do?)
    //           </p>
    //           <a href="project" class="learnMore" id="ecobud">learn more</a>
    //         </div>
    //       </div>
    //     </div>
}

function applyFilters() {
    // APPLYING DATA FILTERS
    $(".list").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all") {
            $(".card").show();
        } else {
            $(".card")
                .not("." + value)
                .hide();
            $(".card")
                .filter("." + value)
                .show();
        }
    });

    $(".list").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

}

function handleSliders(projects) {
    // ADDING FUNCTIONALITY TO SLIDERS ON EACH PROJECT
    $(".tap").click(function () {
        const id = $(this).attr("id");
        let project;
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].Identifier === id) {
                project = projects[i];
            }
        }
        if ($(this).hasClass("tap-2")) {
            $("p." + id).html(project.Desc2);
        } else if ($(this).hasClass("tap-3")) {
            $("p." + id).html(project.Desc3);
        } else {
            $("p." + id).html(project.Desc);
        }

        $(this)
            .addClass("active-slide")
            .siblings()
            .removeClass("active-slide");
    });
}