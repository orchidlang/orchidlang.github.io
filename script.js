function downloadFile(type) {
  const fileMap = {
    msi: 'download/msi/Orchid-1.0.msi',
    exe: 'download/exe/Orchid-1.0.exe',
  };

  const url = fileMap[type];
  if (url) {
    window.location.href = url;
  }
}
