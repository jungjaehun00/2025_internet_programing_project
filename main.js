
  function loadContent() {
    fetch('main.html') // 외부 HTML 파일 경로
      .then(response => {
        if (!response.ok) {
          throw new Error('네트워크 응답 오류');
        }
        return response.text(); // HTML 텍스트로 받음
      })
      .then(html => {
        // content-area에 HTML 삽입
        document.getElementById('content-area').innerHTML = html;
      })
      .catch(error => {
        console.error('콘텐츠 로드 실패:', error);
        document.getElementById('content-area').innerHTML = '<p>콘텐츠를 불러오지 못했습니다.</p>';
      });
  }

  // 페이지 로드 시 자동으로 콘텐츠 로드
  window.onload = function() {
    loadContent();
  };

