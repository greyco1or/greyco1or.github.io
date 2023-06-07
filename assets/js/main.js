
$(document).ready(function() {
    general_utils();
    blog_posts();
})


function general_utils() {
    // smooth scrolling for nav links
    $('.head-menu-wrap a').smoothScroll();
    $('.extra-link a').smoothScroll();
    $('.profile-pic-link').smoothScroll();

    $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width: $(this).attr('data-percent')
		}, 1000);
	});
}

function blog_posts() {

    // keeping it static, can be fetched from a blog dynamically as well
    let posts = [
        {
            url: 'https://blog.naver.com/starbux630/222905405694',
            title: '[CS] 양방향 암호화(대칭키, 비대칭키)',
        },
        {
            url: 'https://blog.naver.com/starbux630/222929851935',
            title: '[Solidity] 컨트랙트의 불변성, 소유(ownable), 함수제어자, 가스(가스비 최적화)',
        },
        {
            url: 'https://blog.naver.com/starbux630/222907384984',
            title: '[Solidity] 매핑, msg.sender, require, 상속, storage와 memory, internal과 external, 인터페이스, 다수의 리턴',
        },
        {
            url: 'https://blog.naver.com/starbux630/223006232231',
            title: '[Java] 반복문 - for문, 향상된 for문, Listlterator',
        },
        {
            url: 'https://blog.naver.com/starbux630/222907941901',
            title: '[블록체인] 비트코인의 거래 원리, 블록구조(블록해더), 채굴, SHA-256, 머클트리(머클루트)',
        },
        {
            url: 'https://blog.naver.com/starbux630/223028386071',
            title: '[블록체인] 노드와 지갑, 니모닉 - 비트코인',
        },
        {
            url: 'https://blog.naver.com/starbux630/223035047319',
            title: '[블록체인] Account 구조, 이더리움의 Tries - 이더리움',
        },
    ];

    let post_html = [];

    for(let post of posts) {

        let tags;
        
        if(post.tags) {
            tags = post.tags.map(tag => {
                return `<a href="https://www.nagekar.com/tags#${tag}">${tag}</a>`
            })
        }

        let post_template = `
        <div class="blog-post" onclick="blog_link_click('${post.url}');">

            <div class="blog-link">
    
                <h3><a href="${post.url}">${post.title}</a></h3>            

            </div>
    
            <div class="blog-goto-link">
                <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
            </div>
        </div>
        `;

        post_html.push(post_template);
    }

    // for the more posts link
    let post_template = `
    <div class="blog-post more-blogs" onclick="blog_link_click('https://blog.naver.com/starbux630');">

        <div class="blog-link">

            <h3><a href="https://blog.naver.com/starbux630">Visit the blog for more posts</a></h3>            

        </div>

        <div class="blog-goto-link">
            <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
        </div>
    </div>
    `;

    post_html.push(post_template);

    $('#rss-feeds').html(post_html);

}

function blog_link_click(url) {
    window.location = url;
}