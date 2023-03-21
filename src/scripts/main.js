//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MSAOiJzdXBhYmFzZSIsInJlZiI6InpkbW94YXlpdmZkZXl2bW9zZGxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg5NzMwNDEsImV4cCI6MTk5NDU0OTA0MX0.AEn38sQFVJLclEVL5V1IgByV_qt5qvKs0r9GFE8dJ7Y;

fetch("https://zdmoxayivfdeyvmosdlh.supabase.co/rest/v1/kune_lineup", {
  method: "GET",
  headers: { apikey: "yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MSAOiJzdXBhYmFzZSIsInJlZiI6InpkbW94YXlpdmZkZXl2bW9zZGxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg5NzMwNDEsImV4cCI6MTk5NDU0OTA0MX0.AEn38sQFVJLclEVL5V1IgByV_qt5qvKs0r9GFE8dJ7Y" },
})
  .then((res) => res.json())
  .then(ShowData);

function ShowData(items) {
  console.log(items);
}
