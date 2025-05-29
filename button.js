// 이벤트 위임: document 또는 공통 부모 요소에 클릭 이벤트 추가
document.addEventListener('click', function(event) {
    // .toggle-btn을 클릭했는지 확인
    if (event.target && event.target.matches('.toggle-btn')) {
        const btn = event.target;
        const content = btn.closest('.college').querySelector('.content');
        const isVisible = content.style.display === 'block';

        // 다른 모든 컨텐츠 닫기
        document.querySelectorAll('.content').forEach(c => {
            c.style.display = 'none';
        });
        document.querySelectorAll('.toggle-btn').forEach(b => {
            b.textContent = '▶';
            b.classList.remove('open');
        });

        // 현재 클릭한 컨텐츠만 열기/닫기
        if (!isVisible) {
            content.style.display = 'block';
            btn.textContent = '▼';
            btn.classList.add('open');
        } else {
            content.style.display = 'none';
            btn.textContent = '▶';
            btn.classList.remove('open');
        }
    }
});