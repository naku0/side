export const goTo = (id, position) => {
        const element = document.querySelector(`#${id}`);
        element.scrollIntoView({
            behavior: "smooth",
            block: position,
        });
        const y = element.getBoundingClientRect().top + window.pageYOffset - 90;
        if(position === "start") {window.scrollTo({ top: y, behavior: "smooth" });}
}