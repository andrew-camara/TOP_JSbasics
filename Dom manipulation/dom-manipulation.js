const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is glorious text-content, ya mum!";
container.appendChild(content);
const redText = document.createElement("p");
redText.style.color = "red"
redText.textContent = "Hey I'm red, ya mum!";
container.appendChild(redText)
const blueText = document.createElement("h3")
blueText.style.color = "blue"
blueText.textContent = "Hey I'm blue h3, ya mum!"
container.appendChild(blueText)

//create container, insert into html
    //make container 
        const pinkBox = document.createElement("div")
        //add styles
        pinkBox.setAttribute("style", "border-color: black; background: pink; height: 200px")
        pinkBox.style.backgroundColor = "pink";
    //append lvl 1 heading to container
        //make element
        const pinkBoxHeading = document.createElement("h1");
        //add text
        pinkBoxHeading.textContent = "I'm in a div!";
        pinkBox.appendChild(pinkBoxHeading);
    //append paragraph to container
        //make element
        const pinkBoxText = document.createElement("p");
        pinkBoxText.style.fontFamily = '"comic sans ms", serif';
        pinkBoxText.textContent = "Me too!";
        pinkBox.appendChild(pinkBoxText);
    //append div and its contents to container
        container.appendChild(pinkBox);


