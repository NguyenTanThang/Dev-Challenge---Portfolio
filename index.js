
const projectList = [
    {
        imageURL: "./img/img-2",
        tags: [
            "Responsive",
            "HTML",
            "CSS"
        ],
        title: "My Gallery",
        description: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
        demoURL: "#",
        codeURL: "#"
    },
    {
        imageURL: "./img/img-10",
        tags: [
            "React",
            "HTML",
            "CSS"
        ],
        title: "React Project",
        description: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
        demoURL: "#",
        codeURL: "#"
    },
    {
        imageURL: "./img/img-11",
        tags: [
            "Vue",
            "HTML",
            "CSS"
        ],
        title: "My Gallery",
        description: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
        demoURL: "#",
        codeURL: "#"
    },
    {
        imageURL: "./img/img-2",
        tags: [
            "Responsive",
            "HTML",
            "CSS"
        ],
        title: "My Gallery",
        description: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
        demoURL: "#",
        codeURL: "#"
    },
    {
        imageURL: "./img/img-10",
        tags: [
            "React",
            "HTML",
            "CSS"
        ],
        title: "React Project",
        description: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
        demoURL: "#",
        codeURL: "#"
    },
    {
        imageURL: "./img/img-11",
        tags: [
            "Vue",
            "HTML",
            "CSS"
        ],
        title: "My Gallery",
        description: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
        demoURL: "#",
        codeURL: "#"
    },
    {
        imageURL: "./img/img-2",
        tags: [
            "Responsive",
            "HTML",
            "CSS"
        ],
        title: "My Gallery",
        description: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
        demoURL: "#",
        codeURL: "#"
    },
    {
        imageURL: "./img/img-10",
        tags: [
            "React",
            "HTML",
            "CSS"
        ],
        title: "React Project",
        description: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
        demoURL: "#",
        codeURL: "#"
    },
    {
        imageURL: "./img/img-11",
        tags: [
            "Vue",
            "HTML",
            "CSS"
        ],
        title: "My Gallery",
        description: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
        demoURL: "#",
        codeURL: "#"
    }
];
const projectNavItems = Array.from(document.querySelectorAll(".project-nav-list__item"));
const projectNavListDisplay = document.querySelector(".project-nav__list-display .row");

const getSelectedTag = () => {
    let ans;

    projectNavItems.forEach((projectNavItem) => {
        if (projectNavItem.classList.contains("active")) {
            ans = projectNavItem.textContent
        }
    })

    return ans.trim();
}

const renderProjectItems = () => {
    projectNavListDisplay.innerHTML = "";
    const selectedTag = getSelectedTag();

    const filteredProjectList = projectList.filter(projectItem => {
        return projectItem.tags.includes(selectedTag);
    })

    let content = "";

    filteredProjectList.forEach(filteredProjectItem => {
        content += generateProjectItem(filteredProjectItem)
    });

    console.log(filteredProjectList);

    projectNavListDisplay.innerHTML = content;
}

const generateProjectItem = (projectItem) => {
    const {imageURL, tags, title, description, demoURL, codeURL} = projectItem;
    let tagContent = "";

    tags.forEach(tag => {
        tagContent += `<li>#${tag}</li>`
    })

    return `
    <div class="project__item project__item--2 project-nav__display-item">

    <div class="project-item__image project-item__image--2">
      <img src="${imageURL}" alt="" class="img-fluid">
    </div>

    <div class="project-item__content project-item__content--2">
      <ul class="project-tags">
        ${tagContent}
      </ul>
      <h4>${title}</h4>
      <p>${description}</p>
      <div class="project-item-content__footer project-item-content__footer--2">
        <ul>
          <li>
            <a href="${demoURL}" class="btn btn-primary btn-block">Demo</a>
          </li>
          <li>
            <a href="${codeURL}" class="btn btn-outline-primary btn-block">Code</a>
          </li>
        </ul>
      </div>
    </div>

  </div>
    `
}

const clearActiveTags = () => {
    projectNavItems.forEach(projectNavItem => {
        projectNavItem.classList.remove("active");
    })
}

const initialize = () => {
    renderProjectItems();
    projectNavItems.forEach(projectNavItem => {
        projectNavItem.addEventListener("click", (e) => {
            clearActiveTags();
            projectNavItem.classList.add("active");
            renderProjectItems();
        })
    })
}

initialize();