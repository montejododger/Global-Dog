const navBarLeft = document.querySelector(`.navbar-left`);
const navBarRight = document.querySelector(`.navbar-right`);

const socialLinks = [
    {
        url: `https://www.linkedin.com/in/matthewbmontejo/`,
        iconClass: `fa-linkedin`,
    },
    {
        url: `https://github.com/montejododger`,
        iconClass: `fa-github-square`,
    },
];

const createNavTitle = () => {
    const h3 = document.createElement("h3");

    h3.classList.add(`navbar-title`);
    // h3.classList.add(`navbar-brand`);
    h3.innerText = `Global Dawgs`;

    navBarLeft.appendChild(h3);
};

const createNavLink = (url, iconClass) => {
    const a = document.createElement(`a`);
    const i = document.createElement(`i`);

    i.classList.add(`fab`, iconClass);

    a.href = url;
    a.target = `_blank`;
    a.classList.add(`nav-links`);

    a.appendChild(i);
    navBarRight.appendChild(a);
};

export const navBar = () => {
    createNavTitle();
    socialLinks.forEach((link) => createNavLink(link.url, link.iconClass));
};
