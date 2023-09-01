const animateCSS = (element, animation, prefix = 'animate__') => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    node.addEventListener('animationend', () => {
        location.replace("./index")
    });

};
