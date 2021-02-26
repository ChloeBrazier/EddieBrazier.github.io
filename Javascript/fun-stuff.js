let linkIcons = document.querySelectorAll("i");
let links = document.querySelectorAll(".footer-link");

for(let i = 0; i < links.length; i++)
{
    links[i].onmouseover = function()
    {
        linkIcons[i].style.color = "#f0faf5";
        console.log("changed icon color");
    }

    links[i].onmouseout = function()
    {
        linkIcons[i].style.color = "#00CE7D";
        console.log("changed icon color");
    }
}