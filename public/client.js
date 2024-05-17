const cropFileInput = document.getElementById('crop-file-input');
const cropMonthInput = document.getElementById('crop-month-input');
const cropUploadButton = document.getElementById('crop-upload-button');

const nhFileInput = document.getElementById('nh-file-input');
const nhMonthInput = document.getElementById('nh-month-input');
const nhUploadButton = document.getElementById('nh-upload-button');

const resultList = document.getElementById('result-list');
const monthInput = document.getElementById('result-month-input');
const submitButton = document.getElementById('result-button');


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
    body: formData
})
    .then((response) => {
        if (response.status === 200) {
            alert('파일 업로드 성공!');
        } 
        else {
            alert('파일 업로드 실패. (오류 코드: ' + response.status + ')');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('파일 업로드 오류!');
    });
});

nhUploadButton.addEventListener('click', () => {
    const file = nhFileInput.files[0];
    const month = nhMonthInput.value;
  
    if (!file || !month) {
      alert('파일과 월을 선택해주세요.');
      return;
    }
  
  
    const formData = new FormData();
    formData.append('file', file);
    formData.append('month', month);
  
    fetch('http://localhost:8080/nh', {
      method: 'POST',
      body: formData,
    })
    .then((response) => {
        if (response.status === 200) {
            alert('파일 업로드 성공!');
        } 
        else {
            alert('파일 업로드 실패. (오류 코드: ' + response.status + ')');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('파일 업로드 오류!');
    });
});

submitButton.addEventListener('click', async () => {
  const month = monthInput.value;

  console.log(`월:  ${month}`);
  if (!month) {
    alert('월을 입력하세요.');
    return;
  }

  try {
    const response = await fetch('http://localhost:8080/result', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Error fetching results: ${response.statusText}`);
    }

    const responseData = await response.json();

    if (responseData.error) {
      alert(`Error: ${responseData.error}`);
      return;
    }

    const data = responseData.data; // Assuming the response structure is as per backend implementation
    displayResults(data);
  } catch (error) {
    console.error('Error:', error);
    alert('데이터 처리 오류!');
  }
});

function displayResults(data) {
  const resultList = document.getElementById('result-list');
  resultList.innerHTML = ''; // Clear previous results

  if (data.length === 0) {
    resultList.innerHTML = '<p>일치하는 데이터가 없습니다.</p>';
    return;
  }

  const resultHeader = document.createElement('h3');
  resultHeader.textContent = `총 ${data.length}개 데이터 불일치`;
  resultList.appendChild(resultHeader);

  const table = document.createElement('table');
  table.className = 'table'; // Add a class if needed for styling

  // Create table header row
  const tableHeaderRow = document.createElement('tr');
  for (const header of ['번호', '품목', '사업소명', '조사원', '일자', '보험번호', '목표액', '계약자', '사고번호', '불일치사유']) {
    const tableHeaderCell = document.createElement('th');
    tableHeaderCell.textContent = header;
    tableHeaderRow.appendChild(tableHeaderCell);
  }
  table.appendChild(tableHeaderRow);

  // Create table rows for data
  const tableBody = document.createElement('tbody');
  data.forEach((nh, index) => {
    const tableRow = document.createElement('tr');
    const rowNum = index + 1; // Add row number counter

    tableRow.innerHTML = `
      <td>${rowNum}</td>
      <td>${nh.item}</td>
      <td>${nh.name}</td>
      <td>${nh.investigator}</td>
      <td>${nh.date}</td>
      <td>${nh.securitiesNumber}</td>
      <td>${nh.targetNumber}</td>
      <td>${nh.contractor}</td>
      <td>${nh.accidentNumber}</td>
      <td>${nh.bad}</td>
    `;
    tableBody.appendChild(tableRow);
  });
  table.appendChild(tableBody);

  resultList.appendChild(table);
}
