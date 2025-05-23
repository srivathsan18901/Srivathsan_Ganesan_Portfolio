import resumePDF from '../files/Srivathsan_Ganesan_CV.pdf';

const DownloadResume = () => {
  const handleDownload = () => {
    // Using a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Srivathsan_Ganesan_CV.pdf'; // This will be the downloaded filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className="download-resume" onClick={handleDownload}>
      Download Resume (PDF)
    </button>
  );
};

export default DownloadResume;