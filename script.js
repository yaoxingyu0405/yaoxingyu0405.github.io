// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // 考虑固定导航栏的高度
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // 更新URL哈希（可选）
            history.pushState(null, null, targetId);
        }
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
});

// 联系表单提交（模拟）
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 获取表单数据
    const formData = new FormData(this);
    const name = formData.get('name') || '匿名用户';
    
    // 这里可以添加实际的表单提交逻辑
    // 例如发送到服务器或使用Formspree等服务
    
    // 显示成功消息
    alert(`谢谢 ${name}！你的消息已发送。我会尽快回复你。`);
    
    // 重置表单
    this.reset();
});

// 技能标签动画
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.2s ease';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// 项目卡片点击效果
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('click', function() {
        const link = this.querySelector('.project-link');
        if (link) {
            // 这里可以添加项目详情页面的跳转逻辑
            console.log('跳转到项目详情:', link.href);
        }
    });
});

// 博客文章阅读更多
const readMoreLinks = document.querySelectorAll('.read-more');
readMoreLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // 这里可以添加博客文章页面的跳转逻辑
        const postTitle = this.closest('.blog-post').querySelector('h3 a').textContent;
        console.log('阅读文章:', postTitle);
    });
});

// 页面加载动画
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// 当前年份更新
const currentYear = new Date().getFullYear();
const yearElements = document.querySelectorAll('.current-year');
yearElements.forEach(element => {
    element.textContent = currentYear;
});

// 控制台欢迎信息
console.log('%c👋 欢迎访问我的个人主页！', 'color: #3498db; font-size: 16px; font-weight: bold;');
console.log('%c🔧 本网站使用纯HTML/CSS/JavaScript构建', 'color: #2c3e50;');
console.log('%c🐱 由小喵助手协助创建', 'color: #e74c3c;');