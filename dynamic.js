
    // URL에서 파라미터 가져오기
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');

    let content = '';

    // 파라미터 값에 따라 다른 내용 출력
    if (page === 'haksa') {
       fetch('main.html');
          
    } else if (page === 'recommend') {
        content = '현재 <strong>강의 정보 및 추천</strong> 페이지입니다.';
    } else {
        content = '선택된 페이지가 없습니다. 학사 정보 또는 강의 추천 링크를 클릭해주세요.';
    }

    // #content 요소에 내용 삽입
    document.getElementById('content').innerHTML = content;
