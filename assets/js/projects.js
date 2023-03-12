$(document).ready(() => {
  render_projects("featured");
});

let render_projects = (slug) => {
  let projects_area = $(".projects-wrapper");

  $(".white-button").removeClass("white-button-hover");
  $(`#${slug}`).addClass("white-button-hover");

  let projects_obj = [
    {
      image: "assets/images/farmMarket.png",
      link: "https://github.com/Bumja12/ks44team04",
      title: "농산물 직거래 플랫폼",
      demo: "http://130.162.131.42",
      technologies: ["Java", "Javascript", "Spring Boot"],
      description: "장부 분석 및 시세 api를 활용한 경제 기반 농산물 플랫폼",
      categories: ["featured", "webdev"],
    },
    {
      image: "assets/images/coinchart.png",
      link: "https://github.com/greyco1or/coinchart",
      title: "Coinchart",
      demo: "https://github.com/greyco1or/coinchart",
      technologies: ["Java", "Javascript", "Spring Boot"],
      description: "Rest API와 스케줄러를 활용한 코인시세 조회",
      categories: ["featured", "webdev"],
    },
    {
      image: "assets/images/tost.png",
      link: "https://www.tost.gg/",
      title: "Tost",
      demo: "https://www.tost.gg/",
      technologies: ["Java", "Javascript", "Spring Boot"],
      description: "DB형 Defi, Staking 서비스",
      categories: ["featured", "webdev", "Blockchain"],
    },
    {
      image: "assets/images/tostAdmin.png",
      link: "https://admin.tost.gg/",
      title: "Tost Admin",
      demo: "https://admin.tost.gg/",
      technologies: ["Java", "Javascript", "Spring Boot"],
      description: "DB형 Defi, Staking 서비스의 관리자 페이지",
      categories: ["featured", "webdev", "Blockchain"],
    },
  ];

  let projects = [];
  if (slug == "all") {
    projects = projects_obj.map(project_mapper);
  } else {
    projects = projects_obj
      .filter((project) => project.categories.includes(slug))
      .map(project_mapper);
  }
  projects_area.hide().html(projects).fadeIn();
};

let project_mapper = (project) => {
  return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${
                  project.image
                    ? `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`
                    : ""
                }

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
                        <p class="paragraph-text-normal">${
                          project.description
                        } ${
    project.demo
      ? `<button onclick="location.href='${project.demo}'";>서비스 링크</button>`
      : ""
  }</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies
                          .map(
                            (tech) =>
                              `<span class="project-technology paragraph-text-normal">${tech}</span>`
                          )
                          .join("")}
                    </div>

                </div>
            </div>
        </div>
    `;
};

let selected = (slug) => {
  render_projects(slug);
};

//<p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">서비스 링크</a>` : ""}</p>
