async function getData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }
  
  async function mainData() {
    const data = await getData();
    console.log(data);
    const tableBody = document.getElementById('postsTable').querySelector('tbody');
  
    data.forEach(post => {
      let row = document.createElement('tr');
  
      let userIdCell = document.createElement('td');
      userIdCell.innerText = post.userId;
      row.appendChild(userIdCell);
  
      let postIdCell = document.createElement('td');
      postIdCell.innerText = post.id;
      row.appendChild(postIdCell);
  
      let titleCell = document.createElement('td');
      titleCell.innerText = post.title;
      row.appendChild(titleCell);
  
      let bodyCell = document.createElement('td');
      bodyCell.innerText = post.body;
      row.appendChild(bodyCell);
  
      tableBody.appendChild(row);
    });
  }
  
  mainData();