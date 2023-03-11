export const DateValue = (dates) => {
  // Membuat objek Date dari string tanggal
  const date = new Date(dates);

  // Mendapatkan tanggal saat ini
  const now = new Date();

  // Menghitung selisih waktu dalam milidetik
  const diff = now.getTime() - date.getTime();

  // Menghitung selisih waktu dalam detik, menit, jam, hari, atau tahun
  const diffInSeconds = Math.floor(diff / 1000);
  const diffInMinutes = Math.floor(diff / (1000 * 60));
  const diffInHours = Math.floor(diff / (1000 * 60 * 60));
  const diffInDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffInYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

  // Menentukan string yang sesuai dengan selisih waktu
  let formattedDate;
  if (diffInSeconds < 60) {
    formattedDate = `${diffInSeconds} seconds ago`;
  } else if (diffInMinutes < 60) {
    formattedDate = `${diffInMinutes} minutes ago`;
  } else if (diffInHours < 24) {
    formattedDate = `${diffInHours} hours ago`;
  } else if (diffInDays < 365) {
    formattedDate = `${diffInDays} days ago`;
  } else {
    formattedDate = `${diffInYears} years ago`;
  }

  return formattedDate;
};
