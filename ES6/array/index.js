const lis = document.getElementsByTagName(`li`);
console.log(lis);
Array.from(lis).forEach(li => 
    {
        li.addEventListener(`click`, () =>
        {
            li.classList.toggle(`change`);
        });
    });