document.getElementById('exportData').addEventListener('click', () => {
  chrome.storage.local.get(['webData'], (result) => {
    const webData = result.webData || [];
    if (webData.length === 0) {
      alert('No data to export');
      return;
    }

    // Define headers for the CSV file
    const headers = ["eventType", "url", "timestamp", "position", "scrollPosition", "timeSpent"];
    
    // Convert the data array to CSV format
    const csvContent = "data:text/csv;charset=utf-8," 
      + headers.join(",") + "\n"
      + webData.map(e => 
          [
            e.eventType, 
            e.url, 
            e.timestamp, 
            e.position ? `${e.position.x},${e.position.y}` : '', 
            e.scrollPosition || '', 
            e.timeSpent || ''
          ].join(",")
        ).join("\n");
    
    // Create a link to download the CSV file
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "web_interaction_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clear the data from Chrome storage after downloading
    chrome.storage.local.remove('webData', () => {
      console.log('Web interaction data cleared from storage.');
    });
  });
});
