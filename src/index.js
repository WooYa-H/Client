const cropFileInput = document.getElementById('crop-file-input');
const cropMonthInput = document.getElementById('crop-month-input');
const cropUploadButton = document.getElementById('crop-upload-button');

const nhFileInput = document.getElementById('nh-file-input');
const nhMonthInput = document.getElementById('nh-month-input');
const nhUploadButton = document.getElementById('nh-upload-button');

const resultList = document.getElementById('result-list');

cropUploadButton.addEventListener('click', () => {
  const file = cropFileInput.files[0];
  const month = cropMonthInput.value;

  if (!file || !month) {
    alert('파일과 월을 선택해주세요.');
    return;
  }

  // fetch API 호출 예시 (실제 사용 시에는 API 주소 및 요청 방식 확인 필요)
  const formData = new FormData();
  formData.append('file', file);
  formData.append('month', month);

  fetch('http://localhost:8080/crop', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
      alert('데이터 처리 오류!');
    });
});

nhUploadButton.addEventListener('click', () => {
  const file = nhFileInput.files[0];
  const month = nhMonthInput.value;

  if (!file || !month) {
    alert('파일과 월을 선택해주세요.');
    return;
  }

  // fetch API 호출 예시 (실제 사용 시에는 API 주소 및 요청 방식 확인 필요)
  const formData = new FormData();
  formData.append('file', file);
  formData.append('month', month);

  fetch('http://localhost:8080/nh', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
      alert('데이터 처리 오류!');
    });
});

// 불일치 데이터 표시 기능 추가 (API 호출 및 데이터 처리 필요)
