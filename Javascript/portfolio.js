"use strict";
//get all project previews

let linkIcons = document.querySelectorAll("i");
let links = document.querySelectorAll(".footer-link");
let previews = document.querySelectorAll(".project-preview");
let previewTitles = document.querySelectorAll(".preview-title");

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

for(let i = 0; i < previews.length; i++)
{
    previews[i].onmouseover = function()
    {
        previewTitles[i].style.animationName = "reveal-title";
        previewTitles[i].style.animationDuration = "1s";
        previewTitles[i].style.animationIterationCount = "1";
        previewTitles[i].style.animationDirection = "normal";
        previewTitles[i].style.animationFillMode = "forwards";
    }

    previews[i].onmouseout = function()
    {
        previewTitles[i].style.animationName = "";
    }
    
}