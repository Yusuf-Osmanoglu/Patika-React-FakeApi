import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        console.log(data); // API'den gelen verileri consola yazdırır
      })
      .catch(error => {
        console.error('Hata:', error);
      });
  }, []); // useEffect sadece bir kere çalışsın diye boş bağımlılık array'i kullanıyoruz

  return (
    <div className="App">
      {/* Buraya API'den gelen verileri gösterecek bir bileşen ekleyebilirsin */}
    </div>
  );
}

export default App;




