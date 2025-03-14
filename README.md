# Praktikum TCC Pertemuan 6

## How to setup:

- Clone repository ini
- Buka isi dari file cloudbuild.yaml, di situ telah ada penjelasan tiap-tiap perintah/langkah yang akan digunakan untuk melakukan CI/CD menggunakan Service Cloud Build
- Setelah itu, masuk ke menu Cloud Build pada GCP, klik "enable" pada Cloud Build API (Jika belum pernah mengaktifkan)

- Kemudian, kita akan membuat sebuah trigger yang berfungsi untuk mengotomatiskan proses build dan deployment ketika suatu peristiwa (event) tertentu terjadi. Masuk ke sub-menu "Triggers" dan klik "Connect repository". Masukkan akun GitHub yang telah dihubungkan dan pilih repository yg akan digunakan, kemudian, klik "Connect".

![select repo](screenshot/link_repo_select_repo.png)

- Jika sudah, klik "Create Trigger", masukkan nama trigger (bebas) dan pada bagian Event, pilih "push to a branch" karena kita akan menjalankan trigger ketika kita melakukan push kode kita ke suatu branch. Kemudian pada Source, pilih 2nd gen (karena kita menghubungkan akun kita menggunakan 2nd gen) dan pilih repository yg akan di-trigger. Pada bagian branch, pilih main, artinya trigger akan berjalan HANYA ketika di-push ke branch main. Pada bagian Configuration Type, pilih "Cloud Build configuration file (YAML or JSON)" dan Location-nya pilih "Repository". Hal tersebut berarti sistem secara otomatis akan menjalankan isi file yang ada pada cloudbuild.yaml ketike ter-trigger. Jika sudah, klik create.

![create trigger 1](screenshot/create_trigger_1.png)
![create trigger 1](screenshot/create_trigger_2.png)

- Setelah itu, klik Run untuk menjalankan trigger secara manual (Hanya untuk mengecek apakah konfigurasi yg telah dilakukan sudah benar atau belum)

![run trigger](screenshot/trigger_run.png)
